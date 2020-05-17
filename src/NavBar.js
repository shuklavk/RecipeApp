import React from 'react';
import { Navbar } from 'react-bootstrap';
import SideNav, {
  Toggle,
  Nav,
  NavItem,
  NavIcon,
  NavText
} from '@trendmicro/react-sidenav';
import { RiTempColdLine } from 'react-icons/ri';
import { FaUtensils } from 'react-icons/fa';
import { BsSun } from 'react-icons/bs';
import { Link, useHistory } from 'react-router-dom';

import '@trendmicro/react-sidenav/dist/react-sidenav.css';

export default ({ selection }) => {
  const history = useHistory();
  return (
    <SideNav
      onSelect={selected => {
        // Add your code here
        if (selected === 'fridge') {
          history.push('/');
        } else {
          history.push(`/${selected}`);
        }
      }}
    >
      <SideNav.Toggle />
      <SideNav.Nav defaultSelected={selection}>
        <NavItem eventKey="recipe">
          {/* <Link to="/recipe"> */}
          <NavIcon>
            <FaUtensils size={30} />
          </NavIcon>
          {/* </Link> */}
          <NavText>This Week's Recipe</NavText>
        </NavItem>
        <NavItem eventKey="fridge">
          <NavIcon>
            <RiTempColdLine size={30} />
          </NavIcon>
          <NavText>My Fridge</NavText>
        </NavItem>
        <NavItem eventKey="inseason">
          <NavIcon>
            <BsSun size={30} />
          </NavIcon>
          <NavText>In Season Food</NavText>
        </NavItem>
      </SideNav.Nav>
    </SideNav>
  );
};
