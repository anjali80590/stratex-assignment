import React from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import Home from './pages/Home';
import Favorites from './pages/Favorites';

const App = () => {
  return (
    <div className="container mx-auto p-4">
      <nav className="mb-4">
        <Link to="/" className="mr-4">Home</Link>
        <Link to="/favorites">Favorites</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
    </div>
  );
};

export default App;

