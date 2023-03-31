import { useState } from 'react';
import './App.css';
import Blogs from './Components/Blogs/Blogs';
import Header from './Components/Header/Header';
import Questions from './Components/Questions/Questions';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Blogs></Blogs>
      <Questions></Questions>
    </div>
  );
}

export default App;
