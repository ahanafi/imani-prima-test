import React from 'react';
import { Route, Routes } from 'react-router';
import Home from './components/Home';
import Movie from './components/Movie';
import './styles/App.css';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} exact />
      <Route path='/movie' element={<Movie />} exact />
    </Routes>
  );
}

export default App;
