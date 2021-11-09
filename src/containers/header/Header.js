import { useState } from 'react';

import Profile from './sidemenu/Profile';

const Header = (props) => {

  const { loggedIn } = props;

  const [menuOpen, setMenuOpen] = useState(false);

  const openMenuToggle = (menuToggle) => {
    if (loggedIn) {
      setMenuOpen(menuToggle);
    } else {
      return null;
    }
  }

  return (
    <>
      <header>
        <h2 className="app-title">ConnectMe</h2>
        <Profile menu={menuOpen} toggleMenu={openMenuToggle}/>
      </header>
    </>
  )
}

export default Header;