
import { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";

import app from "../utils/firebaseConfig";
import { loginProps } from "./types";

const Signup = (props: loginProps) => {

  const auth = app.auth();

  const { setLogIn } = props;

  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const passwordConfirmRef = useRef<HTMLInputElement>(null);

  const navigate = useNavigate();

  // Creating new user into Firebase
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (passwordRef.current && passwordConfirmRef.current) {
      if (passwordRef.current['value'] !== passwordConfirmRef.current['value']) {
        return setError("Passwords do not match");
      }
    }

    try {
      if (emailRef.current && passwordRef.current && passwordConfirmRef.current) {
        setError("");
        setLoading(true);
        await auth.createUserWithEmailAndPassword(emailRef.current.value, passwordRef.current.value);
        setLogIn(true);
        localStorage.setItem("loggedIn", "true"); // Sets localstorage true to keep user online after page refresh
        navigate('/home');
      }
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message);
      }
      localStorage.setItem("loggedIn", "false"); // Sets the localstorage false if unsuccessful logging in
      setTimeout(() => {
        setError("");
      }, 5000)
    }
    setLoading(false);
  }

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="form-wrapper">
      <Link to="/" className="back-btn"><p><i className="fas fa-long-arrow-alt-left"></i> Back to log in</p></Link>
        <h1 className="form-title">Sign up</h1>
        {error ? <span className="error-message">{error}</span> : null}
        <form id="signup-form" onSubmit={handleSubmit} className="forms">
          
          {/* <label htmlFor="firstName">First Name: </label>
            <input type="text" id="firstName" name="firstName" required />

          <label htmlFor="lastName">Last Name: </label>
            <input type="text" id="lastName" name="lastName" required/> */}


          <label htmlFor="email">Email Address: </label>
            <input type="email" ref={emailRef} id="email" name="email" required/>
  
          <label htmlFor="password">Password: </label>
            <input type={showPassword ? "text" : "password"} ref={passwordRef} id="password" min-length="5" name="password" required/>
            <span className="password-minimum-text">6 characters minimum</span>
          
          <label htmlFor="showPassword">
            <input 
              type="checkbox" 
              className="showPasswordCheckbox" 
              id="showPassword" 
              name="showPassword" 
              onChange={() => setShowPassword(!showPassword)}/>
              Show Password</label>

          <label htmlFor="password-confirm">Confirm Password: </label>
            <input type={showPassword ? "text" : "password"} ref={passwordConfirmRef} id="password-confirm" min-length="6" name="password-confirm" required/>

          <div className="signup-btn-wrapper">
            <button className="signup-btns" disabled={loading} type="submit">{loading ? <i className="fas fa-circle-notch loading-icon"></i> : <span>Register</span>}</button>
            <button className="signup-btns" type="reset">Reset</button>
          </div>

        </form>
      </div>
    </>
  )
}

export default Signup;