import  { Link } from 'react-router-dom'

import { useState } from 'react';
import app, { db } from "../utils/firebaseConfig";

const Login = (props) => {

  const { setLogIn } = props;
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const auth = app.auth();

  const signInWithEmailAndPassword = async (e) => {
    e.preventDefault();
    const loginForm = document.querySelector("#login-form");
    setLoading(true);
    try {
      await auth.signInWithEmailAndPassword(loginForm.email.value, loginForm.password.value);
      console.log("Successfully Logged in!");
      setLoading(false);
      setLogIn(true);

    } catch (err) {
      console.error("User not found: " + err);
      setError(true);
      setTimeout(() => {
        setError(false);
      }, 5000)
    
      setLoading(false);
    }

  };
  

  return (
    <>
      <div className="form-wrapper">
      <h1 className="form-title">Log in</h1>
      {error ? <span className="error-message">Invalid email address or password</span> : null}
        <form id="login-form" onSubmit={signInWithEmailAndPassword} className="forms">
          <label htmlFor="email">Email Address: </label>
            <input type="email" id="email" name="email" required/>
  
          <label htmlFor="password">Password: </label>
            <input type="password" id="password" min-length="5" name="password" required/>

          <div className="signup-btn-wrapper">
            <button className="signup-btns" type="submit">{loading ? <i className="fas fa-circle-notch loading-icon"></i> : <span>Log in</span>}</button>
          </div>

          <div className="no-account-wrapper">
            <p>Don't have an account?</p>
            <Link to="/signup"><p>Sign up here!</p></Link>
          </div>

        </form>
      </div>
    </>
  )
}

export default Login;