import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import QRCode from 'qrcode.react';

const EventBooking = () => {
  const { eventId } = useParams();
  const [selectedSlot, setSelectedSlot] = useState('');
  const [ticketCategory, setTicketCategory] = useState('');
  const [paymentDone, setPaymentDone] = useState(false);

  const handleSlotChange = (e) => setSelectedSlot(e.target.value);
  const handleCategoryChange = (e) => setTicketCategory(e.target.value);

  const handlePayment = () => setPaymentDone(true);

  const getPrice = () => {
    switch (ticketCategory) {
      case 'Gold':
        return 100;
      case 'Silver':
        return 70;
      case 'Platinum':
        return 150;
      default:
        return 0;
    }
  };

  return (
    <div>
      <h2>Booking for Event ID: {eventId}</h2>
      <div>
        <label>Select Time Slot:</label>
        <select value={selectedSlot} onChange={handleSlotChange}>
          <option value="">Select a slot</option>
          <option value="10AM-12PM">10AM-12PM</option>
          <option value="2PM-4PM">2PM-4PM</option>
          <option value="6PM-8PM">6PM-8PM</option>
        </select>
      </div>
      <div>
        <label>Select Ticket Category:</label>
        <select value={ticketCategory} onChange={handleCategoryChange}>
          <option value="">Select a category</option>
          <option value="Gold">Gold</option>
          <option value="Silver">Silver</option>
          <option value="Platinum">Platinum</option>
        </select>
      </div>
      <div>
        <p>Price: ${getPrice()}</p>
        <button onClick={handlePayment}>Proceed to Payment</button>
      </div>
      {paymentDone && (
        <div>
          <h3>Payment Successful</h3>
          <QRCode value={`Event ID: ${eventId}, Slot: ${selectedSlot}, Category: ${ticketCategory}`} />
        </div>
      )}
    </div>
  );
};

export default EventBooking;
