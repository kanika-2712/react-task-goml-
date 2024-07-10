import React from 'react';
import EventList from './EventList';
import { concerts } from '../data/events';

const Concerts = () => {
  return (
    <div>
      
      <EventList events={concerts} />
    </div>
  );
};

export default Concerts;
