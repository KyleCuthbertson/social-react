import  { Link } from 'react-router-dom'

import { useState, useContext, useRef } from 'react';
import app from "../utils/firebaseConfig";

import { useNavigate } from 'react-router-dom';

import { LogInContext } from '../App';

const Login = (props) => {

  const { setLogIn, loggedIn } = props;
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const emailRef = useRef();
  const passwordRef = useRef();

  const navigate = useNavigate();

  // const loggedIn = useContext(LogInContext);

  const auth = app.auth();

  const userLogin = async (e) => {

    e.preventDefault();
    setLoading(true);

    try {
      await auth.signInWithEmailAndPassword(emailRef.current.value, passwordRef.current.value);
      setLoading(false);
      setLogIn(true);
      navigate('/home');
      setTimeout(() => {
        console.log(loggedIn);
        window.localStorage.setItem("loggedIn", loggedIn);
      }, 3000)
    } 
    catch (err) {
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
        <form id="login-form" onSubmit={userLogin} className="forms">
          <label htmlFor="email">Email Address: </label>
            <input type="email" ref={emailRef} id="email" name="email" required/>
  
          <label htmlFor="password">Password: </label>
            <input type="password" ref={passwordRef} id="password" min-length="5" name="password" required/>

          <div className="signup-btn-wrapper">
            <button className="signup-btns" disabled={loading} type="submit">{loading ? <i className="fas fa-circle-notch loading-icon"></i> : <span>Log in</span>}</button>
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