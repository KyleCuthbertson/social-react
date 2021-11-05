import { useState } from 'react';

import './App.scss';

import Header from './containers/header/Header';
import MainWrapper from './containers/main/MainWrapper';
import SubMenu from './containers/submenu/SubMenu';

const App = () => {

  const [isLoggedIn, setIsLoggedIn] = useState(true);
  // Submenu functionality
  const [category, setCategory] = useState('home');

  const setContent = (selectedCategory) => {
    setCategory(selectedCategory);
  }


  return (
    <div className="App">
      <Header />
      <SubMenu setContent={setContent} selectedContent={category}/>
      <MainWrapper loggedIn={isLoggedIn} selectedContent={category}/>
    </div>
  );
}

export default App;
