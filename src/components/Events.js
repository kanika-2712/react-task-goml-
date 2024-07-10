// import React from 'react';
// import EventList from './EventList';
// import { events } from '../data/events';

// const Events = () => {
//   return (
//     <div>
//       <h1>Events</h1>
//       <EventList events={events} />
//     </div>
//   );
// };

// export default Events;
// import React from 'react';
// import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
// import EventList from './EventList';
// import { events } from '../data/events';
// import EventBooking from './EventBooking';

// const Events = () => {
//   return (
//     <Router>
//       <div>
//         <h1>Events</h1>
//         <EventList events={events} />
//       </div>
//       <Route path="/book/:eventId" component={EventBooking} />
//     </Router>
//   );
// };

// const EventList = ({ events }) => {
//   return (
//     <div>
//       {events.map(event => (
//         <div key={event.id}>
//           <h2>{event.title}</h2>
//           <p>{event.description}</p>
//           <p>Date: {event.date}</p>
//           <Link to={`/book/${event.id}`}>Book Now</Link>
//         </div>
//       ))}
//     </div>
//   );
// };

import React from 'react';
import { Route, Link } from 'react-router-dom';
import { events } from '../data/events';
import EventBooking from './EventBooking';

const Events = () => {
  return (
    <div>
      <h1>Events</h1>
      <EventList events={events} />
      <Route path="/book/:eventId" component={EventBooking} />
    </div>
  );
};

const EventList = ({ events }) => {
  return (
    <div>
      {events.map(event => (
        <div key={event.id}>
          <h2>{event.title}</h2>
          <p>{event.description}</p>
          <p>Date: {event.date}</p>
          <Link to={`/book/${event.id}`}>Book Now</Link>
        </div>
      ))}
    </div>
  );
};

export default Events;




