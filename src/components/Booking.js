import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import QRCode from 'qrcode.react';
import { events, movies, concerts } from '../data/events';
import './Booking.css';

const findEventById = (id) => {
  return events.find(event => event.id === parseInt(id)) ||
         movies.find(event => event.id === parseInt(id)) ||
         concerts.find(event => event.id === parseInt(id));
};

const Booking = () => {
  const { id } = useParams();
  const event = findEventById(id);
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [selectedTime, setSelectedTime] = useState('');
  const [ticketConfirmed, setTicketConfirmed] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState('');
  const seatCost = 100; // Assume each seat costs $10

  if (!event) {
    return <div>Event not found</div>;
  }

  const handleSeatClick = (seat) => {
    setSelectedSeats(prevSeats => 
      prevSeats.includes(seat) ? prevSeats.filter(s => s !== seat) : [...prevSeats, seat]
    );
  };

  const handleProceedToPayment = () => {
    if (selectedSeats.length > 0 && selectedTime && paymentMethod) {
      setTicketConfirmed(true);
    } else {
      alert('Please select seats, a time slot, and a payment method.');
    }
  };

  const totalCost = selectedSeats.length * seatCost;

  return (
    <div className="booking-container">
      <h1>Booking for {event.title}</h1>
      <p>{event.description}</p>
      <p>Date: {event.date}</p>

      <div className="time-slot-selection">
        <h3>Select Time Slot</h3>
        {['10:00 AM', '02:00 PM', '06:00 PM', '10:00 PM'].map(time => (
          <button 
            key={time} 
            className={`time-slot ${selectedTime === time ? 'selected' : ''}`}
            onClick={() => setSelectedTime(time)}
          >
            {time}
          </button>
        ))}
      </div>

      <div className="seat-selection">
        <h3>Select Seats</h3>
        {['A', 'B', 'C', 'D', 'E', 'F'].map(row => (
          <div key={row} className="seat-row">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(num => (
              <button 
                key={`${row}${num}`} 
                className={`seat ${selectedSeats.includes(`${row}${num}`) ? 'selected' : ''}`}
                onClick={() => handleSeatClick(`${row}${num}`)}
              >
                {`${row}${num}`}
              </button>
            ))}
          </div>
        ))}
      </div>

      <div className="payment-selection">
        <h3>Select Payment Method</h3>
        <select value={paymentMethod} onChange={(e) => setPaymentMethod(e.target.value)}>
          <option value="">Select Payment Method</option>
          <option value="Credit Card">Credit Card</option>
          <option value="Debit Card">Debit Card</option>
          <option value="PayPal">PayPal</option>
        </select>
      </div>

      <div className="cost-summary">
        <h3>Total Cost: {totalCost}</h3>
      </div>

      <button className="proceed-button" onClick={handleProceedToPayment}>Proceed to Payment</button>

      {ticketConfirmed && (
        <div className="ticket-confirmation">
          <h3>Ticket Confirmed!</h3>
          <p>Seats: {selectedSeats.join(', ')}</p>
          <p>Time: {selectedTime}</p>
          <p>Payment Method: {paymentMethod}</p>
          <p>Total Cost: {totalCost}</p>
          <QRCode value={`Event: ${event.title}, Seats: ${selectedSeats.join(', ')}, Time: ${selectedTime}, Payment: ${paymentMethod}, Cost: ${totalCost}`} />
        </div>
      )}
    </div>
  );
};

export default Booking;
