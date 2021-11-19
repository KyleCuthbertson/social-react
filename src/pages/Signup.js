
import { useState } from "react";

const Signup = () => {

  const [showPassword, setShowPassword] = useState(false);

  return (
    <>
      <div className="form-wrapper">
        <h1 className="form-title">Sign up</h1>
        <form id="signup-form" className="forms">
          <label htmlFor="firstName">First Name: </label>
            <input type="text" id="firstName" name="firstName" required />

          <label htmlFor="lastName">Last Name: </label>
            <input type="text" id="lastName" name="lastName" required/>


          <label htmlFor="email">Email Address: </label>
            <input type="email" id="email" name="email" required/>
  
          <label htmlFor="password">Password: </label>
            <input type={showPassword ? "text" : "password"} id="password" min-length="5" name="password" required/>
            <span className="password-minimum-text">5 characters minimum</span>
          
          <label htmlFor="showPassword">
            <input 
              type="checkbox" 
              className="showPasswordCheckbox" 
              id="showPassword" 
              name="showPassword" 
              onChange={() => setShowPassword(!showPassword)}/>
              Show Password</label>

          <div className="signup-btn-wrapper">
            <button className="signup-btns" type="submit">Register</button>
            <button className="signup-btns" type="reset">Reset</button>
          </div>

        </form>
      </div>
    </>
  )
}

export default Signup;