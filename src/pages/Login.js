import { Link } from "react-router-dom";

const Login = () => {
  return (
    <>
      <div className="form-wrapper">
      <h1 className="form-title">Log in</h1>
        <form id="login-form" className="forms">
          <label htmlFor="email">Email Address: </label>
            <input type="email" id="email" name="email" required/>
  
          <label htmlFor="password">Password: </label>
            <input type="password" id="password" min-length="5" name="password" required/>

          <div className="signup-btn-wrapper">
            <button className="signup-btns" type="submit">Log in</button>
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