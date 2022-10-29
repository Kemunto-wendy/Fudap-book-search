import React from 'react';
import { Form } from 'react-router-dom';
import './App.css';
import Book from './components/Book/book';
import Display from './components/Display/display';
import Home from './components/Home/home';

function App ( )  {
  return (
      <div className='App'>
          <Home />
          <Display />

      </div>

  )
}
export default App
