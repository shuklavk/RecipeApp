import React from 'react';
import NavBar from './NavBar';
import FridgeList from './FridgeList';
import styles from './Fridge.module.css';

export default () => {
  return (
    <div>
      <header style={{ textAlign: 'center', padding: '30px' }}>
        <h1>FRIDGE HEADER HERE</h1>
      </header>
      <NavBar selection="fridge" />
      <div className="container">
        <div className={styles.fridge2}>
          <div>
            <FridgeList />
          </div>
        </div>
      </div>
    </div>
  );
};
