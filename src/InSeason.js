import React, { useState } from 'react';
import './InSeason.scss';
import NavBar from './NavBar';
import { useLocation } from 'react-router-dom';
import axios from 'axios';

export default () => {
  const [inSeasonFood, setInSeasonFood] = useState([
    {
      food: 'Apples',
      img:
        'https://i5.walmartimages.ca/images/Enlarge/094/514/6000200094514.jpg'
    },
    {
      food: 'Apricots',
      img:
        'https://draxe.com/wp-content/uploads/2018/01/Apricot_benefits_HEADER.jpg'
    },
    {
      food: 'Asparagus',
      img:
        'https://www.simplyrecipes.com/wp-content/uploads/2018/03/stovetop-asparagus-horiz-a-2000.jpg'
    },
    {
      food: 'Avocados',
      img:
        'https://avocadosfrommexico.com/wp-content/uploads/2016/11/avocado-hub.jpg'
    },
    {
      food: 'Bananas',
      img:
        'https://cdn.mos.cms.futurecdn.net/42E9as7NaTaAi4A6JcuFwG-320-80.jpg '
    },
    {
      food: 'Broccoli',
      img:
        'https://i5.walmartimages.ca/images/Enlarge/094/505/6000200094505.jpg '
    },
    {
      food: 'Cabbage',
      img:
        'https://i5.walmartimages.ca/images/Enlarge/272/109/6000191272109.jpg '
    },
    {
      food: 'Carrots',
      img:
        'https://www.jessicagavin.com/wp-content/uploads/2019/02/carrots-7-1200.jpg '
    },
    {
      food: 'Celery',
      img:
        'https://www.bbcgoodfood.com/sites/default/files/guide/guide-image/2014/01/celery-stalks.jpg '
    },
    {
      food: 'Collard Greens',
      img:
        'https://upload.wikimedia.org/wikipedia/commons/e/e9/Collard-Greens-Bundle.jpg '
    },
    {
      food: 'Garlic',
      img:
        'https://www.verywellfamily.com/thmb/xPbyHn675F8_Tu-JWP6otQD5Uhs=/3995x2996/smart/filters:no_upscale()/GettyImages-149107499MultibitsPhotolibraryGarlic-56a0b9733df78cafdaa461e1.jpg '
    },
    {
      food: 'Kale',
      img:
        'https://i0.wp.com/images-prod.healthline.com/hlcmsresource/images/AN_images/benefits-of-kale-1296x728-feature.jpg?w=1155&h=1528 '
    },
    {
      food: 'Kiwifruit',
      img:
        'https://recipematic.com/wp-content/uploads/2019/07/How-to-Choose-Store-How-to-Use-Kiwi-Fruit-Benefits-of-Kiwi-Fruit-Calories-and-Nutrition-Facts-tips-1200x1253.jpg '
    },
    {
      food: 'Lemons',
      img:
        'https://www.familyhandyman.com/wp-content/uploads/2017/09/dfh17sep001_shutterstock_550013404.jpg '
    },
    {
      food: 'Lettuce',
      img:
        'https://i5.walmartimages.ca/images/Enlarge/006/949/6000196006949.jpg '
    },
    {
      food: 'Limes',
      img:
        'https://www.markon.com/sites/default/files/styles/large/public/pi_photos/Citrus_Limes_Hero.jpg '
    },
    {
      food: 'Mushrooms',
      img:
        'https://cleananddelicious.com/wp-content/uploads/2015/12/Mushroom640-1.jpg '
    },
    {
      food: 'Onions',
      img: 'https://cdn.planetherbs.com/wp-content/uploads/2009/10/onions.jpg '
    },
    {
      food: 'Peas',
      img:
        'https://recipechart.com/wp-content/uploads/2014/04/How-to-Cook-and-Prepare-Peas.jpg '
    },
    {
      food: 'Pineapples',
      img:
        'https://i.dailymail.co.uk/i/newpix/2018/03/08/11/49FF748700000578-5476901-image-a-27_1520507605152.jpg '
    },
    {
      food: 'Radishes',
      img: 'https://producemadesimple.ca/wp-content/uploads/2016/06/radish.jpg'
    },
    {
      food: 'Rhubarb',
      img:
        'https://tweedfruitexchange.com.au/wp-content/uploads/2016/03/rhu-rs.png'
    },
    {
      food: 'Spinach',
      img:
        'https://www.farmflavor.com/wp-content/uploads/2014/01/iStock-916931074-2.jpg '
    },
    {
      food: 'Strawberries',
      img:
        'https://media.daysoftheyear.com/20171223115009/strawberry-day1-scaled.jpg '
    },
    {
      food: 'Swiss Chard',
      img:
        'https://mysecondbreakfast.com/wp-content/uploads/2013/07/DSC_0659-e1374196805192.jpg '
    },
    {
      food: 'Turnips',
      img:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Turnip_2622027.jpg/1200px-Turnip_2622027.jpg '
    }
  ]);

  // axios
  //   .post('http://localhost:3004/inSeasonFood', inSeasonFood)
  //   .then(resp => console.log('in SENT'))
  //   .catch(err => console.log('err inseason', err));

  console.log('in season', inSeasonFood);

  const mappedInSeasonFood = inSeasonFood.map(food => {
    return (
      <div className="col-4">
        <div className="card border">
          <div className="card-body">
            <div className="card-title"></div>
            <img src={food.img} style={{ height: '100px' }} />
            <p className="card-text">{food.food}</p>
          </div>
        </div>
      </div>
    );
  });
  return (
    <div>
      <NavBar selection="inseason" inSeasonFood={inSeasonFood} />
      <div style={{ textAlign: 'center', padding: '30px' }}>
        <h1>IN SEASON HEADER GOES HERE</h1>
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
