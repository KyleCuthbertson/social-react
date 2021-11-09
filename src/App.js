import { useState } from 'react';

import './App.scss';

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Header from './containers/header/Header';
import MainWrapper from './containers/main/MainWrapper';
import SubMenu from './containers/submenu/SubMenu';
import Login from './pages/Login';
import Signup from './pages/Signup';

const App = () => {

  const [isLoggedIn, setIsLoggedIn] = useState(true);
  
  // Submenu functionality
  const [category, setCategory] = useState('home');

  const setContent = (selectedCategory) => {
    setCategory(selectedCategory);
  }


  return (
    <Router>
      <div className="App">
        <Header loggedIn={isLoggedIn}/>
        <Routes>
          <Route path="/" element={<Login/>}/>

          <Route 
            path="/home" 
            element={
            <>
              <SubMenu setContent={setContent} selectedContent={category}/>
              <MainWrapper loggedIn={isLoggedIn} selectedContent={category}/>
            </>
            }
          />
          
          <Route path="/signup" element={<Signup/>}/>
        </Routes>
        
      </div>
    </Router>
  );
}

export default App;
