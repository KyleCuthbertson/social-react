import React, { useState } from 'react';

import './App.scss';

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Header from './containers/header/Header';
import MainWrapper from './containers/main/MainWrapper';
import SubMenu from './containers/submenu/SubMenu';
import Login from './pages/Login';
import Signup from './pages/Signup';

import { AuthProvider, useAuth } from './context/AuthContext';
import PrivateRoute from './components/PrivateRoute';

export const LogInContext = React.createContext<Boolean>(false);


const App = () => {

  // Submenu functionality
  const [category, setCategory] = useState('home');
  const setContent = (selectedCategory: string) => {
    setCategory(selectedCategory);
  }

  const { currentUser }: any = useAuth();

  return (
    <AuthProvider>
    <Router>
      <div className="App">
        <Header/>
        {/* {currentUser ? currentUser.uid : <p>Not logged in</p>} */}
        <Routes>
          
          <Route path="/" element={<PrivateRoute/>}>
           <Route path="/" element=
            {
            <>
              <SubMenu setContent={setContent} selectedContent={category}/>
              <MainWrapper selectedContent={category}/>
            </>
            }
            />
          </Route>
    
          <Route path="/login" element={<Login/>}/> 
          <Route path="/signup" element={<Signup/>}/>
        </Routes>
      </div>
    </Router>
  </AuthProvider>
  );
}

export default App;
