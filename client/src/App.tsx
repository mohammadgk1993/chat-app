import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import './App.css'

function App() {
  return (
    <div className='App'>
      <GoogleOAuthProvider clientId="1052930514727-u3h177r5lpcuiv9b1hjitn1dc8t74sr3.apps.googleusercontent.com">
        <div>
          hello
          <GoogleLogin
          onSuccess={credentialResponse => {
            console.log(credentialResponse);
          }}
          onError={() => {
            console.log('Login Failed');
          }}
          />
        </div>
      </GoogleOAuthProvider>
    </div>
  )
}

export default App
