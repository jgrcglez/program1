import logo from './logo.svg';
import './App.css';
import FacebookLogin from 'react-facebook-login';
import GoogleLogin from "react-google-login";
import axios from "axios";

/**
 * @param response.accessToken
 */
const responseFacebook = async (response) => {
    await axios.post(
        "/dj-rest-auth/facebook/",
        {
            access_token: response.accessToken,
        }
    ).then((res) => {
        console.log(res.data.key);
    }).catch((err) => {
        console.log(err);
    });
}

/**
 * @param response.accessToken
 */
const responseGoogle = async (response) => {
    await axios.post(
        "/dj-rest-auth/google/",
        {
            access_token: response.accessToken,
        }
    ).then((res) => {
        console.log(res.data.key);
    }).catch((err) => {
        console.log(err);
    });
}

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
                <h1>LOGIN WITH FACEBOOK</h1>
                <FacebookLogin
                    textButton="LOGIN WITH FACEBOOK"
                    appId={process.env.REACT_APP_FACEBOOK_APP_ID} //better get from DB (?)
                    fields="name,email"
                    callback={responseFacebook}
                />
                <h1>LOGIN WITH GOOGLE</h1>
                <GoogleLogin
                    clientId={process.env.REACT_APP_GOOGLE_APP_ID}
                    buttonText="LOGIN WITH GOOGLE"
                    onSuccess={responseGoogle}
                    onFailure={responseGoogle}
                    cookiePolicy={'single_host_origin'}
                />
            </header>
        </div>
    );
}

export default App;
