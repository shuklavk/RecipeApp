import React from 'react';
import { Navbar } from 'react-bootstrap';
import styles from './NavBar.module.css';

export default () => {
  return (
    <Navbar>
      <div class="navbar navbar-fixed-top navbar-inverse tabs paper-shadow-bottom-z-2">
        <div class="container-fluid">
          <ul class="navbar-body list-inline">
            <li class="active">
              <a class="active">Home</a>
            </li>
            <li>
              <a>Potion Lab</a>
            </li>
            <li>
              <a>Stats</a>
            </li>
            <li>
              <a>System Log Feed</a>
            </li>
          </ul>
          <div class="tab-highlighter"></div>
        </div>
      </div>
    </Navbar>
  );
};
