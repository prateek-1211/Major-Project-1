import React, { useState } from 'react';
import axios from 'axios'; // Import axios for making API requests
import '../style/Book.css';

const Book = () => {
  const [departure, setDeparture] = useState('');
  const [destination, setDestination] = useState('');
  const [date, setDate] = useState('');
  const [name, setName] = useState('');
  const [seatNumber, setSeatNumber] = useState('');
  const [email, setEmail] = useState(''); // Add email state for the user
  const [availableFlights, setAvailableFlights] = useState([]);
  const [selectedFlight, setSelectedFlight] = useState(null);
  const [bookingConfirmed, setBookingConfirmed] = useState(false);

  // Mock flight data based on departure, destination, and date
  const mockFlights = [
    {
      flightNumber: 'AI101',
      departure: 'Delhi',
      destination: 'New York',
      date: '2024-10-10',
      time: '10:30 AM',
      status: 'On Time',
    },
    {
      flightNumber: 'BA202',
      departure: 'London',
      destination: 'Los Angeles',
      date: '2024-10-12',
      time: '2:00 PM',
      status: 'Delayed',
    },
    {
      flightNumber: 'IX304',
      departure: 'Gwalior',
      destination: 'Delhi',
      date: '2024-10-14',
      time: '9:30 AM',
      status: 'On Time',
    },
    {
      flightNumber: 'SG901',
      departure: 'Bangalore',
      destination: 'Mumbai',
      date: '2024-10-16',
      time: '7:15 AM',
      status: 'On Time',
    },
    {
      flightNumber: '6E123',
      departure: 'Hyderabad',
      destination: 'Varanasi',
      date: '2024-10-18',
      time: '6:00 PM',
      status: 'Delayed',
    },
  ];

  const handleSearchFlights = () => {
    const flights = mockFlights.filter(
      (flight) =>
        flight.departure.toLowerCase() === departure.toLowerCase() &&
        flight.destination.toLowerCase() === destination.toLowerCase() &&
        flight.date === date
    );
    setAvailableFlights(flights);
    setSelectedFlight(null); // Reset selected flight if new search
    setBookingConfirmed(false); // Reset booking confirmation
  };

  const handleSelectFlight = (flight) => {
    setSelectedFlight(flight);
  };

  const handleConfirmBooking = async () => {
    if (selectedFlight && name && seatNumber && email) {
      // Confirm booking first
      setBookingConfirmed(true);

      // Prepare the email data
      const serviceId = 'service_ljbon7r';
      const templateId = 'template_940uhcr';
      const publicKey = 'SICJUfBBR9ojCWRhH';

      const data = {
        service_id: serviceId,
        template_id: templateId,
        user_id: publicKey,
        template_params: {
          from_name: name,
          from_email: email,
          to_name: 'Flight Booking',
          message: `Flight Number: ${selectedFlight.flightNumber}\nDeparture: ${selectedFlight.departure}\nDestination: ${selectedFlight.destination}\nDate: ${selectedFlight.date}\nTime: ${selectedFlight.time}\nSeat Number: ${seatNumber}`, // Fixed message syntax
        },
      };

      try {
        const res = await axios.post("https://api.emailjs.com/api/v1.0/email/send", data);
        console.log(res.data);
        alert("Booking confirmed and email sent successfully!");

        // Reset form fields
        setName('');
        setEmail('');
        setDeparture('');
        setDestination('');
        setDate('');
        setSeatNumber('');
        setSelectedFlight(null);
      } catch (error) {
        console.error('Error sending email:', error);
        alert("Booking confirmed, but failed to send email.");
      }
    } else {
      alert("Please fill in all fields before confirming the booking.");
    }
  };

  return (
    <div className="flight-booking-container">
      <br />
      <br />
      <br />
      <br />
      <br />
      <h1>Flight Booking</h1>

      {/* Booking Form */}
      <div className="booking-form">
        <input
          type="text"
          placeholder="Departure (From)"
          value={departure}
          onChange={(e) => setDeparture(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Destination (To)"
          value={destination}
          onChange={(e) => setDestination(e.target.value)}
          required
        />
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Seat Number"
          value={seatNumber}
          onChange={(e) => setSeatNumber(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button onClick={handleSearchFlights}>Search Flights</button>
      </div>

      {/* Available Flights */}
      {availableFlights.length > 0 && (
        <div className="available-flights">
          <h3>Available Flights on {date}</h3>
          <ul>
            {availableFlights.map((flight) => (
              <li key={flight.flightNumber}>
                <div>
                  <strong>{flight.flightNumber}</strong> - {flight.departure} to {flight.destination} at {flight.time} ({flight.status})
                </div>
                <button onClick={() => handleSelectFlight(flight)}>Select</button>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Selected Flight */}
      {selectedFlight && (
        <div className="selected-flight">
          <h3>Selected Flight</h3>
          <p>
            Flight: <strong>{selectedFlight.flightNumber}</strong><br />
            Departure: {selectedFlight.departure} to {selectedFlight.destination}<br />
            Time: {selectedFlight.time}<br />
            Status: {selectedFlight.status}
          </p>
          <button onClick={handleConfirmBooking}>Confirm Booking</button>
        </div>
      )}

      {/* Booking Confirmation */}
      {bookingConfirmed && selectedFlight && (
        <div className="booking-confirmation">
          <h3>Booking Confirmed!</h3>
          <p>
            Thank you, {name}. Your flight {selectedFlight.flightNumber} from {selectedFlight.departure} to {selectedFlight.destination} is confirmed.<br />
            Seat Number: {seatNumber}
          </p>
        </div>
      )}
    </div>
  );
};

export default Book;