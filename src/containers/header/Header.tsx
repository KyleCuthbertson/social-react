import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { LogInContext } from '../../App';

import Profile from './sidemenu/Profile';

const Header = () => {

  const loggedIn = useContext(LogInContext);

  const navigate = useNavigate();

  const [menuOpen, setMenuOpen] = useState(false);

  const findingUser = localStorage.getItem("loggedIn");

  // Keeps logged out users from entering app content
  useEffect(() => {
    if (findingUser === "true") {
      navigate('/home');
    } else {
      navigate('/');
    }
  }, []);


  const openMenuToggle = (menuToggle: boolean) => {
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
        <Profile menu={menuOpen} setLogin={loggedIn} toggleMenu={openMenuToggle}/>
      </header>
    </>
  )
}

export default Header;