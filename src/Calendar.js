import React from 'react';
import NavBar from './NavBar';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import styles from './Calendar.module.css';
import 'react-big-calendar/lib/css/react-big-calendar.css';

export default () => {
  const localizer = momentLocalizer(moment);
  const events = [
    {
      start: moment().toDate(),
      end: moment()
        .add(2, 'days')
        .toDate(),
      title: 'Eat my first vegan meal and share it on instagram for likes'
    }
  ];
  return (
    <div>
      <header style={{ textAlign: 'center' }}>
        <h1>CALENDAR</h1>
      </header>
      <NavBar selection={'calendar'} />
      <div className={`container ${styles.cal}`}>
        <Calendar
          localizer={localizer}
          defaultDate={new Date()}
          defaultView="month"
          events={events}
          style={{ height: '100vh', marginBottom: '30px' }}
        />
      </div>
    </div>
  );
};
