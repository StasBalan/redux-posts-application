import React from 'react';

import logo from '../logo.svg';
import './App.css';

import PostForm from '../components/Postform';
import Posts from '../components/Posts';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>welcome to react</p>
      </header>
        <PostForm />
        <hr />
        <Posts />
    </div>
  );
}

export default App;
