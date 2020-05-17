import React from 'react';
import NavBar from './NavBar';
import FridgeList from './FridgeList';
import styles from './Fridge.module.css';
import { useState } from 'react';
import { bottom } from '@popperjs/core';

export default () => {
  const [frideIngred, setFridgeIng] = useState([]);
  console.log(frideIngred);
  return (
    <div>
      <header style={{ textAlign: 'center', padding: '30px' }}>
        <h1>FRIDGE HEADER HERE</h1>
      </header>
      <NavBar selection="fridge" frideIngred={frideIngred} />
      <div className="container">
        <div className={styles.fridge2}>
          <div>
            <FridgeList setFridgeIng={setFridgeIng} />
          </div>
        </div>
      </div>
    </div>
  );
};
