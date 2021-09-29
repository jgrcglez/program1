# django-react-boilerplate
<h3>Django + React project start boilerplate</h3>

A starting point for a Django backend API project with React as frontend. 
It includes dj-rest-auth and allauth for authentication (including social).

<ol>
  <li>Clone</li>
  <li>Install Python virtual environment and activate it.</li>
  <li>Install requirements from requirements.txt</li>
  <li>Create .env file and add DJANGO_SECRET_KEY=xxxxxx...</li>
  <li>Create .gitignore and add:</li>
    <ul>
      <li>.env</li>
      <li>venv</li>
      <li>db.sqlite3</li>
      <li>frontend/node_modules</li>
      <li>frontend/.gitignore</li>
      <li>frontend/.env.local</li>
      <li>etc...</li>      
    </ul>
  <li>Enter frontend directory and run <strong>yarn install</strong> (or npm)</li>
  <li>Run <strong>yarn build</strong></li>  
</ol>
<h4>Optional - To run with <em>https</em>:</h4>
<h5>Django:</h5>
<ol>
  <li>Copy an ssl-private.key and ssl-cert.pem certificate pair to the project root</li>
  <li>Run development server as: <strong>python manage.py runserver_plus --cert-file ssl-cert.pem --key-file ssl-private.key</strong></li> 
</ol>
<h5>React:</h5>
<ol>
  <li>Enter <strong>frontend</strong> directory and create <strong>.env.local</strong> and add <strong>HTTPS=true</strong></li>
  <li>Also a good idea to add <strong>HOST=localhost</strong></li>
</ol>

