import { useState } from 'react';

import './App.scss';

import Header from './containers/header/Header';
import MainWrapper from './containers/main/MainWrapper';
import SubMenu from './containers/submenu/SubMenu';

import Login from './pages/Login';

const App = () => {

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  
  // Submenu functionality
  const [category, setCategory] = useState('home');

  const setContent = (selectedCategory) => {
    setCategory(selectedCategory);
  }


  return (
    <div className="App">
      {
      isLoggedIn ? 
      <>
        <Header />
        <SubMenu setContent={setContent} selectedContent={category}/>
        <MainWrapper loggedIn={isLoggedIn} selectedContent={category}/>
      </>
        :
      <>
        <Header/>
        <Login/>
      </>
      }
    </div>
  );
}

export default App;
