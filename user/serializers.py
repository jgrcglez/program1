from django.contrib.auth import get_user_model, authenticate
from django.utils.translation import ugettext_lazy as _
from rest_framework import serializers


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = get_user_model()
        fields = (
            "email",
            "password",
            "first_name",
            "last_name",
        )
        extra_kwargs = {
            "password": {"write_only": True, "min_length": 5},
        }

    def create(self, validated_data):
        return get_user_model().objects.create_user(**validated_data)

    def update(self, instance, validated_data):
        password = validated_data.pop("password", None)
        user = super().update(instance, validated_data)
        if password:
            user.set_password(password)
            user.save()
        return user


class AuthTokenSerializer(serializers.Serializer):
    def update(self, instance, validated_data):
        super().update(instance, validated_data)

    def create(self, validated_data):
        super().create(validated_data)

    email = serializers.CharField(max_length=255)
    password = serializers.CharField(
        style={"input_type": "password"}, trim_whitespace=False
    )

    def validate(self, attrs):
        email = attrs.get("email")
        password = attrs.get("password")
        user = authenticate(
            request=self.context.get("request"), username=email, password=password
        )
        if not user:
            msg = _("Unable to authenticate with provided credentals")
            raise serializers.ValidationError(msg, code="authorization")
        attrs["user"] = user
        return attrs
