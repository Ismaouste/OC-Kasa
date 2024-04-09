import React from 'react';
import { Link } from 'react-router-dom';
import slugify from 'slugify';

function CardList({ cardData }) {
  return (
    <section className="locations">
      <div className="locations-container">
      {cardData.map((card, index) => (
        <Card key={index} title={card.title} cover={card.cover} id={card.id} />
      ))}
      </div>
    </section>
  );
}

function Card({ title, cover, id }) {
  const slug = slugify(title, { lower: true }); // Convert the title to a slug
  return (
    <div className="card-location" style={{ backgroundImage: `url(${cover})`, backgroundSize: 'cover' }}>
      <Link to={`/location/${slug}`}>
                <h3>{title}</h3>
      </Link>
    </div>

  );
}


export { Card, CardList };
