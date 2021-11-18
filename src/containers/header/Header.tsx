import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { useAuth } from '../../context/AuthContext';

import Profile from './sidemenu/Profile';

const Header = () => {

  const { currentUser }: any = useAuth();

  const navigate = useNavigate();

  const [menuOpen, setMenuOpen] = useState(false);

  // Keeps logged out users from entering app content
  useEffect(() => {
    if (currentUser === "true") {
      navigate('/');
    } else {
      navigate('/login');
    }
  }, []);


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