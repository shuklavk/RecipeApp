import React from 'react';
import { TiTick } from 'react-icons/ti';

export default ({ imgURL, ingredientName }) => {
  return (
    <li>
      {' '}
      <TiTick size={25} style={{ marginRight: '10px' }} />
      <img src={imgURL} className="rounded-circle col-md-2" alt="ingredient" />
      <span className="col-md-1">{ingredientName} </span>
    </li>
  );
};
