
import { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";

import { useAuth } from "../context/AuthContext";
import { db } from "../utils/firebaseConfig";

const Signup = () => {

  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const firstNameRef = useRef<HTMLInputElement>(null);
  const lastNameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const passwordConfirmRef = useRef<HTMLInputElement>(null);

  const { signup }: any = useAuth();

  const navigate = useNavigate();
  

  // Creating new user into Firebase
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (passwordRef.current && passwordConfirmRef.current) {
      if (passwordRef.current['value'] !== passwordConfirmRef.current['value']) {
        return setError("Passwords do not match!");
      }
    }

    try {
      if (emailRef.current && passwordRef.current && passwordConfirmRef.current) {
        setError("");
        setLoading(true);
        await signup(emailRef.current.value, passwordRef.current.value).then((cred: any) => {
          if (firstNameRef.current && lastNameRef.current && emailRef.current) {
            db.collection('users').doc(cred.user.uid)
            .set({
              firstName: firstNameRef.current.value,
              lastName: lastNameRef.current.value,
              email: emailRef.current.value,
              id: cred.user.uid
            })
            .then(() => {
              navigate("/");
            })
          }
        });
      }
    } 
    catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message);
      }
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
        <Link to="/login" className="back-btn"><p><i className="fas fa-long-arrow-alt-left"></i> Back to log in</p></Link>
        <h1 className="form-title">Sign up</h1>
        {error ? <span className="error-message">{error}</span> : null}
        <form id="signup-form" onSubmit={handleSubmit} className="forms">
          
          <label htmlFor="firstName"><i className="fas fa-user"></i>First Name </label>
            <input type="text" ref={firstNameRef} id="firstName" name="firstName" required/>
        
          <label htmlFor="lastName"><i className="fas fa-user"></i>Last Name </label>
            <input type="text" ref={lastNameRef} id="lastName" name="lastName" required/>
        
          <label htmlFor="email"><i className="fas fa-envelope"></i>Email Address </label>
            <input type="email" ref={emailRef} id="email" name="email" required/>
  
          <label htmlFor="password"><i className="fas fa-lock"></i>Password </label>
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

          <label htmlFor="password-confirm"><i className="fas fa-lock"></i>Confirm Password </label>
            <input type={showPassword ? "text" : "password"} ref={passwordConfirmRef} id="password-confirm" min-length="6" name="password-confirm" required/>

          <div className="signup-btn-wrapper">
            <button className="signup-btns" title="Sign up!" disabled={loading} type="submit">{loading ? <i className="fas fa-circle-notch loading-icon"></i> : <span>Register</span>}</button>
            <button className="signup-btns" title="Reset" type="reset">Reset</button>
          </div>

        </form>
      </div>
    </>
  )
}

export default Signup;