import { useState } from 'react';

import Profile from '../../components/buttons/Profile';

const Header = () => {

  const [menuOpen, setMenuOpen] = useState(false);

  const openMenuToggle = (menuToggle) => {
    setMenuOpen(menuToggle);
    console.log(menuToggle);
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