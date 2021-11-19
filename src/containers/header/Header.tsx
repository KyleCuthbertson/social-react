import { useState } from 'react';

import { useAuth } from '../../context/AuthContext';

import Profile from './sidemenu/Profile';

const Header = () => {

  const { currentUser }: any = useAuth();

  const [menuOpen, setMenuOpen] = useState(false);

  const openMenuToggle = (menuToggle: boolean) => {
    if (currentUser) {
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