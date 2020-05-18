import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import RecipePage from './RecipePage';
import InSeason from './InSeason';
import Fridge from './Fridge';
import FridgeList from './FridgeList';
import Calendar from './Calendar';
import { BrowserRouter, Route } from 'react-router-dom';

ReactDOM.render(
  <BrowserRouter>
    <div>
      <Route exact path="/" component={Fridge} />
      <Route path="/recipe">
        <RecipePage />
      </Route>
      <Route path="/inseason">
        <InSeason />
      </Route>
      <Route path="/calendar">
        <Calendar />
      </Route>
    </div>
  </BrowserRouter>,
  document.getElementById('root')
);
