import React from 'react';
import EventList from './EventList';
import { movies } from '../data/events';

const Movies = () => {
  return (
    <div>
      
      <EventList events={movies} />
    </div>
  );
};

export default Movies;
