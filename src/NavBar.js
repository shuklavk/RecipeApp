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
import { BsSun, BsFillCalendarFill } from 'react-icons/bs';
import { Link, useHistory } from 'react-router-dom';

import '@trendmicro/react-sidenav/dist/react-sidenav.css';

export default ({ selection, frideIngred, inSeasonFood }) => {
  const history = useHistory();
  console.log('in :', inSeasonFood);
  return (
    <SideNav
      onSelect={selected => {
        // Add your code here
        if (selected === 'fridge') {
          history.push('/');
        } else {
          history.push(`/${selected}`, { inSeasonFood: inSeasonFood });
        }
      }}
    >
      <SideNav.Toggle />
      <SideNav.Nav defaultSelected={selection}>
        <NavItem eventKey="fridge">
          <NavIcon>
            <RiTempColdLine size={30} />
          </NavIcon>
          <NavText>My Fridge</NavText>
        </NavItem>
        <NavItem eventKey="recipe">
          {/* <Link to="/recipe"> */}
          <NavIcon>
            <FaUtensils size={30} />
          </NavIcon>
          {/* </Link> */}
          <NavText>This Week's Recipe</NavText>
        </NavItem>
        <NavItem eventKey="inseason">
          <NavIcon>
            <BsSun size={30} />
          </NavIcon>
          <NavText>In Season Food</NavText>
        </NavItem>
        <NavItem eventKey="calendar">
          <NavIcon>
            <BsFillCalendarFill size={30} />
          </NavIcon>
          <NavText>Calendar</NavText>
        </NavItem>
      </SideNav.Nav>
    </SideNav>
  );
};
