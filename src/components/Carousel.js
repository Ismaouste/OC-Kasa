import React from 'react';


function Carousel() {
  return (
    <div className="carousel">
      <div className="carousel__slide" style={{ backgroundImage: `url(${process.env.PUBLIC_URL + '/img/kasa_background.jpeg'})` }}>
        <h1 className="carousel__title">Chez vous, partout et ailleurs</h1>
      </div>
    </div>
  );
}
export default Carousel;