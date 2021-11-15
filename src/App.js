import React, { useState, useEffect } from 'react';

import './App.scss';

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Header from './containers/header/Header';
import MainWrapper from './containers/main/MainWrapper';
import SubMenu from './containers/submenu/SubMenu';
import Login from './pages/Login';
import Signup from './pages/Signup';

export const LogInContext = React.createContext();

const App = () => {

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Submenu functionality
  const [category, setCategory] = useState('home');
  const setContent = (selectedCategory) => {
    setCategory(selectedCategory);
  }

  const findingUser = localStorage.getItem("loggedIn");

  useEffect(() => {
    if (findingUser === "true") {
      setIsLoggedIn(true);
    }
  }, [])

  return (
    <LogInContext.Provider value={isLoggedIn}>
    <Router>
      <div className="App">
        <Header loggedIn={isLoggedIn} setLogIn={setIsLoggedIn}/>
        <Routes>
          {
          !isLoggedIn ? 
          <>
            <Route path="/" element={<Login setLogIn={setIsLoggedIn}/>}/> 
            <Route path="/signup" element={<Signup setLogIn={setIsLoggedIn}/>}/>
          </>
            : 
          <Route 
            path="/home" 
            element={
            <>
              <SubMenu setContent={setContent} selectedContent={category}/>
              <MainWrapper loggedIn={isLoggedIn} selectedContent={category}/>
            </>
            }
          />
          }
        </Routes>
      </div>
    </Router>
  </LogInContext.Provider>
  );
}

export default App;
