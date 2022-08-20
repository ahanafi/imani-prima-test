import React from 'react';
import { Route, Routes } from 'react-router';
import Header from './components/Header';
import Home from './components/Home';
import Movie from './components/Movie';
import './styles/App.css';

const App = () => {
  return (
    <div className='App'>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} exact />
        <Route path='/movie' element={<Movie />} exact />
      </Routes>
    </div>
  );
}

export default App;
