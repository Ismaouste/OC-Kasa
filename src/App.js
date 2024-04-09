import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import slugify from 'slugify';

import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import HomePage from './pages/HomePage';
import CardDetailPage from './pages/CardDetailPage';
import AboutPage from './pages/AboutPage'

import cards from './logements.json';



function App() {
  cards.map(card => (
    <Link to={`/location/${slugify(card.title, { lower: true })}`}>{card.title}</Link>
  ))
  return (
    <Router>
      <div className="App">
        <Header />
        <div className="content">
          <Routes>
            <Route path="/" element={<HomePage />} /> {/* Route pour la homepage */}
            <Route path="/card/:title" element={<CardDetailPage />} /> {/* Route for the card detail page */}
            <Route path="*" element={<h2>404 Not Found</h2>} />
            <Route path="/about" element={<AboutPage />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
