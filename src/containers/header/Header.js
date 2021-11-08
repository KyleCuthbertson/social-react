import { useState } from 'react';

import Profile from './sidemenu/Profile';

const Header = () => {

  const [menuOpen, setMenuOpen] = useState(false);

  const openMenuToggle = (menuToggle) => {
    setMenuOpen(menuToggle);
  }

  return (
    <>
      <header>
        <h2 className="app-title">ConnectMe</h2>
        <Profile menu={menuOpen} toggleMenu={openMenuToggle} />
      </header>
    </>
  )
}

export default Header;