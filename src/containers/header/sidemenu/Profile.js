

const Profile = (props) => {

  const { menu, toggleMenu } = props;

  return (
    <>
      <button onClick={() => toggleMenu(true)} className="profile-btn"><i className="fas fa-user-circle"></i></button>
      <div className={menu ? "profile-menu show" : "profile-menu"}>
        <span onClick={() => toggleMenu(false)} className="btn-close"><i class="fas fa-times"></i></span>
        <div className="profile-menu-wrapper">
          <ul className="profile-menu-list">
            <li>Home</li>
            <li>My Profile</li>
            <li>Settings</li>
            <li>Log Out</li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default Profile;