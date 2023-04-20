import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import News from './pages/NewsPage';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<HomePage/>} />
        <Route exact path="/News" element={<News/>} />
        <Route exact path="/login" element={<LoginPage/>} />
      </Routes>
    </Router>
  );
}

export default App;
