import React, { useState, useEffect } from 'react';

import './App.scss';

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Header from './containers/header/Header';
import MainWrapper from './containers/main/MainWrapper';
import SubMenu from './containers/submenu/SubMenu';
import Login from './pages/Login';
import Signup from './pages/Signup';

// import { db } from './utils/firebaseConfig';
// import app from './utils/firebaseConfig';

export const LogInContext = React.createContext();

const App = () => {

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Submenu functionality
  const [category, setCategory] = useState('home');
  const setContent = (selectedCategory) => {
    setCategory(selectedCategory);
  }

  // useEffect(() => {
  //   const findingUser = window.localStorage.getItem("loggedIn");

  //   if (findingUser) {
  //     const loggedInUser = JSON.parse(findingUser);
  //     setIsLoggedIn(loggedInUser);
  //   }
  // }, [isLoggedIn])



  return (
    <LogInContext.Provider value={isLoggedIn}>
    <Router>
      <div className="App">
        <Header loggedIn={isLoggedIn} setLogIn={setIsLoggedIn}/>
        <Routes>
          {
          !isLoggedIn ? 
          <>
            <Route path="/" element={<Login loggedIn={isLoggedIn} setLogIn={setIsLoggedIn}/>}/> 
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
