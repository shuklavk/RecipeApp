import React from 'react';
import './InSeason.scss';
import NavBar from './NavBar';

export default () => {
  const inSeasonFood = [
    'Apples',
    'Apricots',
    'Asparagus',
    'Avocados',
    'Bananas',
    'Broccoli',
    'Cabbage',
    'Carrots',
    'Celery',
    'Collard Greens',
    'Garlic',
    'Kale',
    'Kiwifruit',
    'Lemons',
    'Lettuce',
    'Limes',
    'Mushrooms',
    'Onions',
    'Peas',
    'Pineapples',
    'Radishes',
    'Rhubarb',
    'Spinach',
    'Strawberries',
    'Swiss Chard',
    'Turnips'
  ];

  const mappedInSeasonFood = inSeasonFood.map(food => {
    return (
      <div className="col-4">
        <div className="card border">
          <div className="card-body">
            <div className="card-title"></div>
            <p className="card-text">{food}</p>
          </div>
        </div>
      </div>
    );
  });
  return (
    <div>
      <NavBar selection="inseason" />
      <div style={{ textAlign: 'center', padding: '30px' }}>
        <h1>LOGO GOES HERE</h1>
      </div>
      <section>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="row card-animate">{mappedInSeasonFood}</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
