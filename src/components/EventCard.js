import React from 'react';
import { Link } from 'react-router-dom';
import './EventCard.css';

const EventCard = ({ event }) => {
  return (
    <div className="event-card">
      <img src={event.image} alt={event.title} className="event-image" />
      <div className="event-info">
        <h2>{event.title}</h2>
        <p className="event-rating">
          <span className="star">★</span> {event.rating}/10 {event.votes} Votes
        </p>
        <p>{event.genre}</p>
        <Link to={`/booking/${event.id}`} className="book-now">Book Now</Link>
      </div>
    </div>
  );
};

export default EventCard;
