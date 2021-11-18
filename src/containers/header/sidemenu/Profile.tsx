import { Link } from "react-router-dom";
import { useAuth } from '../../../context/AuthContext';

interface profileProps {
  menu: boolean,
  toggleMenu: Function
}

const Profile = (props: profileProps) => {

  const { menu, toggleMenu } = props;

  const { logOut }: any = useAuth();

  const handleLogOut = async () => {
    try {
      await logOut();
      toggleMenu(false);
    } catch (err) {
      console.log("Did not log out: " + err);
    }
  }

  return (
    <>
      <button onClick={() => toggleMenu(true)} className="profile-btn"><i className="fas fa-user-circle"></i></button>
      <div className={menu ? "profile-menu show" : "profile-menu"}>
        <span onClick={() => toggleMenu(false)} className="btn-close"><i className="fas fa-times"></i></span>
        <div className="profile-menu-wrapper">
          <ul className="profile-menu-list">
            <Link to="/" onClick={() => toggleMenu(false)}><li>Home</li></Link>
            <Link to="/myprofile" onClick={() => toggleMenu(false)}><li>My Profile</li></Link>
            <Link to="/settings" onClick={() => toggleMenu(false)}><li>Settings</li></Link>
            <Link to="/login" onClick={handleLogOut}><li>Log Out</li></Link>
          </ul>
        </div>
      </div>
    </>
  )
}

export default Profile;