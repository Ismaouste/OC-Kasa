import React from 'react';

import Carousel from '../components/Carousel';
import cardData from '../logements.json';
import { Card,CardList } from '../components/Card';
import '../styles/pages/HomePage.scss';

function HomePage() {
  return (
    <div>
      <Carousel />
      <div className="locations-list">
      <CardList cardData={cardData} /> {}
      </div>
    </div>
  );
}

export default HomePage;
