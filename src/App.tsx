import React, { useState } from 'react';

import './App.scss';

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Header from './containers/header/Header';
import MainWrapper from './containers/main/MainWrapper';
import SubMenu from './containers/submenu/SubMenu';
import Login from './pages/Login';
import Signup from './pages/Signup';
import MyProfile from './pages/user-pages/MyProfile';
import Settings from './pages/user-pages/Settings';

import { AuthProvider } from './context/AuthContext';
import PrivateRoute from './components/PrivateRoute';
import NewPostPage from './pages/content-pages/NewPostPage';


export const LogInContext = React.createContext<Boolean>(false);


const App = () => {

  // Submenu functionality
  const [category, setCategory] = useState('home');
  const setContent = (selectedCategory: string) => {
    setCategory(selectedCategory);
  }

  return (
    <AuthProvider>
    <Router>
      <div className="App">
        <Header/>
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
            <Route path="/myprofile" element={<MyProfile/>}/>
            <Route path="/settings" element={<Settings/>}/>
            <Route path="/newpost" element={<NewPostPage/>}/>
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
