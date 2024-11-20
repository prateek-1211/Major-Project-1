import React, { useState } from 'react';
import '../style/Status.css';
import image2 from '../assets/image1.jpg'; 

function Status() {
  const [flightNumber, setFlightNumber] = useState('');
  const [flightInfo, setFlightInfo] = useState(null);
  const [error, setError] = useState('');

  const handleSearch = () => {
    // Mock fetching flight info based on flight number
    if (flightNumber === 'AI101') {
      setFlightInfo({
        flightNumber: 'AI101',
        status: 'On Time',
        departure: {
          airport: 'Indira Gandhi International Airport, Delhi',
          scheduled: '2024-10-10T10:30:00Z',
          actual: '2024-10-10T10:45:00Z',
          terminal: 'T3',
          gate: 'A12',
          delay: 15
        },
        arrival: {
          airport: 'John F. Kennedy International Airport, New York',
          scheduled: '2024-10-10T12:45:00Z',
          actual: '2024-10-10T12:55:00Z',
          terminal: 'T4',
          gate: 'B34',
          delay: 10
        }
      });
      setError('');
    } else if (flightNumber === 'BA202') {
      setFlightInfo({
        flightNumber: 'BA202',
        status: 'Delayed',
        departure: {
          airport: 'London Heathrow Airport, London',
          scheduled: '2024-10-12T14:00:00Z',
          actual: '2024-10-12T14:30:00Z',
          terminal: 'T5',
          gate: 'C12',
          delay: 30
        },
        arrival: {
          airport: 'Los Angeles International Airport, Los Angeles',
          scheduled: '2024-10-12T16:30:00Z',
          actual: '2024-10-12T17:00:00Z',
          terminal: 'T6',
          gate: 'D22',
          delay: 30
        }
      });
      setError('');
    } else if (flightNumber === 'IX304') {
      setFlightInfo({
        flightNumber: 'IX304',
        status: 'On Time',
        departure: {
          airport: 'Rajmata Vijaya Raje Scindia International Airport, Gwalior',
          scheduled: '2024-10-14T09:30:00Z',
          actual: '2024-10-14T09:35:00Z',
          terminal: 'T1',
          gate: 'A3',
          delay: 5
        },
        arrival: {
          airport: 'Indira Gandhi International Airport, Delhi',
          scheduled: '2024-10-14T10:45:00Z',
          actual: '2024-10-14T10:50:00Z',
          terminal: 'T3',
          gate: 'B12',
          delay: 5
        }
      });
      setError('');
    } else if (flightNumber === 'SG901') {
      setFlightInfo({
        flightNumber: 'SG901',
        status: 'On Time',
        departure: {
          airport: 'Kempegowda International Airport, Bangalore',
          scheduled: '2024-10-16T07:15:00Z',
          actual: '2024-10-16T07:20:00Z',
          terminal: 'T2',
          gate: 'D10',
          delay: 5
        },
        arrival: {
          airport: 'Chhatrapati Shivaji Maharaj International Airport, Mumbai',
          scheduled: '2024-10-16T09:00:00Z',
          actual: '2024-10-16T09:05:00Z',
          terminal: 'T2',
          gate: 'C15',
          delay: 5
        }
      });
      setError('');
    } else if (flightNumber === '6E123') {
      setFlightInfo({
        flightNumber: '6E123',
        status: 'Delayed',
        departure: {
          airport: 'Lal Bahadur Shastri International Airport (Varanasi)',
          scheduled: '2024-10-18T18:00:00Z',
          actual: '2024-10-18T18:30:00Z',
          terminal: 'T1',
          gate: 'E12',
          delay: 30
        },
        arrival: {
          airport: 'Rajiv Gandhi International Airport (Hyderabad)',
          scheduled: '2024-10-18T20:30:00Z',
          actual: '2024-10-18T21:00:00Z',
          terminal: 'T4',
          gate: 'F6',
          delay: 30
        }
      });
      setError('');
    } else {
      setFlightInfo(null);
      setError('Flight not found');
    }
  };
  return (
    <div className="flight-status-container">
    <img src={image2} className="background fade-in" alt="background" />
      <br />
      <br />
      <br />
      <br />
      <h1>Flight Status</h1>
      <input
        type="text"
        value={flightNumber}
        onChange={(e) => setFlightNumber(e.target.value)}
        placeholder="Enter flight number"
      />
      <button onClick={handleSearch}>Search</button>
      {error && <p className="error">{error}</p>}
      {flightInfo && (
        <div className="flight-card">
          <div className='heading'>
            <span>{flightInfo.departure.airport}</span> &nbsp;
            <span> &#8594; </span> &nbsp;
            <span>{flightInfo.arrival.airport}</span>
          </div>
          <div className='status'>
            <strong>Flight Status: </strong> {flightInfo.status}
          </div>
          <div className="flight-details">
            <div className="departure">
              <h3>Departure</h3>
              <strong>Airport: </strong> {flightInfo.departure.airport}<br />
              <strong>Scheduled Departure: </strong> {new Date(flightInfo.departure.scheduled).toLocaleString()}<br />
              <strong>Actual Departure: </strong> {new Date(flightInfo.departure.actual).toLocaleString()}<br />
              <strong>Terminal: </strong> {flightInfo.departure.terminal}<br />
              <strong>Gate: </strong> {flightInfo.departure.gate}<br />
              <strong>Delay in Departure: </strong>
              <span style={{ color: 'red', fontWeight: 'bold' }}>
                {flightInfo.departure.delay}
              </span>
              <span> Min</span>
            </div>
            <div className="arrival">
              <h3>Arrival</h3>
              <strong>Airport: </strong> {flightInfo.arrival.airport}<br />
              <strong>Scheduled Arrival: </strong> {new Date(flightInfo.arrival.scheduled).toLocaleString()}<br />
              <strong>Actual Arrival: </strong> {new Date(flightInfo.arrival.actual).toLocaleString()}<br />
              <strong>Terminal: </strong> {flightInfo.arrival.terminal}<br />
              <strong>Gate: </strong> {flightInfo.arrival.gate}<br />
              <strong>Delay in Arrival: </strong>
              <span style={{ color: 'red', fontWeight: 'bold' }}>
                {flightInfo.arrival.delay}
              </span>
              <span> Min</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Status;
