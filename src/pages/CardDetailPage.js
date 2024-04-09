import React from 'react';
import { useParams } from 'react-router-dom';
import slugify from 'slugify';

import cardData from '../logements.json'; 

function CardDetailPage() {
  const { title } = useParams();

  const card = cardData.find(card => slugify(card.title, { lower: true }) === slugify(title, { lower: true }));
  if (!card) {
    return <h2>Card not found</h2>;
  }

  return (
    <div>
      <img src={card.cover} alt={`${card.title}`} />
      <h3>{card.title}</h3>
      {/* Display other details of the card here */}
    </div>
  );
}

export default CardDetailPage;