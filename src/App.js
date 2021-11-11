import { useState } from 'react';

import './App.scss';

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Header from './containers/header/Header';
import MainWrapper from './containers/main/MainWrapper';
import SubMenu from './containers/submenu/SubMenu';
import Login from './pages/Login';
import Signup from './pages/Signup';

import { db } from './utils/firebaseConfig';
import app from './utils/firebaseConfig';

const App = () => {

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [token, setToken] = useState(false);

  // Submenu functionality
  const [category, setCategory] = useState('home');
  const setContent = (selectedCategory) => {
    setCategory(selectedCategory);
  }

  // const response = db.collection('users');
  // response.get().then(
  //   (snapshot) => {
  //     snapshot.docs.forEach(doc => {
  //       console.log(doc.data());
  //       console.log(doc.id);
  //     })
  //   }
  // )


  return (
    <Router>
      <div className="App">
        <Header loggedIn={isLoggedIn}/>
        <Routes>
          {
          !isLoggedIn ? 
          <>
            <Route path="/" element={<Login setToken={setToken} setLogIn={setIsLoggedIn}/>}/> 
            <Route path="/signup" element={<Signup setToken={setToken}/>}/>
          </>
            : 
          <Route 
            path="/" 
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
    
  );
}

export default App;
