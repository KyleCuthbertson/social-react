import { Link } from "react-router-dom";

const Profile = (props) => {

  const { menu, setIsLoggedIn, toggleMenu } = props;

  const logOut = () => {
    toggleMenu(false);
    setIsLoggedIn(false);
  }

  return (
    <>
      <button onClick={() => toggleMenu(true)} className="profile-btn"><i className="fas fa-user-circle"></i></button>
      <div className={menu ? "profile-menu show" : "profile-menu"}>
        <span onClick={() => toggleMenu(false)} className="btn-close"><i className="fas fa-times"></i></span>
        <div className="profile-menu-wrapper">
          <ul className="profile-menu-list">
            <Link to="/home" onClick={() => toggleMenu(false)}><li>Home</li></Link>
            <Link to="/myprofile" onClick={() => toggleMenu(false)}><li>My Profile</li></Link>
            <Link to="/settings" onClick={() => toggleMenu(false)}><li>Settings</li></Link>
            <Link to="/" onClick={logOut}><li>Log Out</li></Link>
          </ul>
        </div>
      </div>
    </>
  )
}

export default Profile;