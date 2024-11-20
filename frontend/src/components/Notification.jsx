import React, { useState } from 'react';
import '../style/Notification.css'; 
import image1 from '../assets/image1.jpg'; 
import axios from 'axios'; // Make sure axios is imported

const Notification = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [flightNumber, setFlightNumber] = useState('');   
  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  // Mock data for flight statuses
  const mockFlightData = [
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

  const handleCheckStatus = async (e) => {
    e.preventDefault();
    setLoading(true);

    // Flight data to be emailed
    const flight = mockFlightData.find((f) => f.flightNumber === flightNumber.toUpperCase());
    const message = flight
      ? `Flight Details: Flight Number: ${flight.flightNumber}, Departure: ${flight.departure}, Destination: ${flight.destination}, Date: ${flight.date}, Time: ${flight.time}, Status: ${flight.status}`
      : 'Flight not found';

    const data = {
      service_id: 'service_ljbon7r',
      template_id: 'template_940uhcr',
      user_id: 'SICJUfBBR9ojCWRhH',
      template_params: {
        from_name: name,
        from_email: email, // Correctly set email here
        to_name: 'Flight Status Notification',
        message: message, // Send flight details in message
      }
    };

    try {
      // Sending email using emailjs
      const res = await axios.post("https://api.emailjs.com/api/v1.0/email/send", data);
      console.log(res.data);
      alert("Email sent successfully!");

      // Clear input fields after successful submission
      setName('');
      setEmail('');
      setFlightNumber('');
      setStatus(flight || 'Flight not found');
    } catch (error) {
      console.error('Error sending email:', error);
      alert("Failed to send email.");
    }

    setLoading(false);
  };

  return (
    <div className="flight-notification-container">
      <img src={image1} className="background fade-in" alt="background" />
      <h2>Send your flight Notification Through Email</h2>
      <form onSubmit={handleCheckStatus}>
        <div>
          <label>Full Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Email ID:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Flight Number:</label>
          <input
            type="text"
            value={flightNumber}
            onChange={(e) => setFlightNumber(e.target.value)}
            required
          />
        </div>
        <button type="submit" disabled={loading}>Check Status</button>
      </form>

      {loading ? (
        <p>Loading...</p>
      ) : status && typeof status === 'object' ? (
        <div>
          <h3>Flight Details:</h3>
          <p><strong>Flight Number:</strong> {status.flightNumber}</p>
          <p><strong>Departure:</strong> {status.departure}</p>
          <p><strong>Destination:</strong> {status.destination}</p>
          <p><strong>Date:</strong> {status.date}</p>
          <p><strong>Time:</strong> {status.time}</p>
          <p><strong>Status:</strong> {status.status}</p>
        </div>
      ) : status ? (
        <p>{status}</p>
      ) : null}
    </div>
  );
};

export default Notification;