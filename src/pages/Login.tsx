import  { Link, useNavigate } from 'react-router-dom'

import { useState, useRef } from 'react';

import { useAuth } from '../context/AuthContext';

const Login = () => {

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const navigate = useNavigate();

  const { login }: any = useAuth();

  const userLogin = async (e: React.FormEvent<HTMLFormElement>) => {

    e.preventDefault();
    setLoading(true);

    try {
      if (emailRef.current && passwordRef.current) {
        await login(emailRef.current['value'], passwordRef.current['value']);
        setLoading(false);
        navigate('/'); // Pushes user to home content
      }    
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
          <label htmlFor="email"><i className="fas fa-user"></i>Email Address </label>
            <input type="email" ref={emailRef} id="email" name="email" required/>
  
          <label htmlFor="password"><i className="fas fa-lock"></i>Password </label>
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