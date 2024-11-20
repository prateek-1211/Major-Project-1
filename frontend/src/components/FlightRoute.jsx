// FlightRoute.js
import React, { useState } from 'react';
import { MapContainer, TileLayer, Polyline, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import image4 from '../assets/image4.jpg';
import mockFlights from './mockFlight'; // Import the modified mock flight data

// Coordinates for cities (departure and destination)
const airportCoordinates = {
  'Delhi': [28.6139, 77.2090],
  'New York': [40.7128, -74.0060],
  'London': [51.5074, -0.1278],
  'Los Angeles': [34.0522, -118.2437],
  'Gwalior': [26.2183, 78.1828],
  'Mumbai': [19.0760, 72.8777],
  'Bangalore': [12.9716, 77.5946],
  'Hyderabad': [17.3850, 78.4867],
  'Varanasi': [25.3176, 82.9739],
};

const FlightRoute = () => {
  // State to store user-selected departure and destination
  const [departure, setDeparture] = useState('');
  const [destination, setDestination] = useState('');

  // Function to find flights matching the selected route
  const filteredFlights = mockFlights.filter(
    flight => flight.departure === departure && flight.destination === destination
  );

  return (
    <div>
      <img src={image4} className="background fade-in" alt="background" />
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      {/* Form for selecting departure and destination */}
      <div style={{ marginBottom: '20px', textAlign: 'center'}}>
        <label>
          Departure:
          <select value={departure} onChange={(e) => setDeparture(e.target.value)}>
            <option value="">Select Departure</option>
            {Object.keys(airportCoordinates).map(city => (
              <option key={city} value={city}>{city}</option>
            ))}
          </select>
        </label>
        <label style={{ marginLeft: '20px' }}>
          Destination:
          <select value={destination} onChange={(e) => setDestination(e.target.value)}>
            <option value="">Select Destination</option>
            {Object.keys(airportCoordinates).map(city => (
              <option key={city} value={city}>{city}</option>
            ))}
          </select>
        </label>
      </div>

      {/* Map showing filtered flights */}
      <MapContainer center={[20.5937, 78.9629]} zoom={4} style={{ height: '500px', width: '50%', display: 'flex', margin: '10px 350px' }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="&copy; OpenStreetMap contributors"
        />
        {filteredFlights.length > 0 ? (
          filteredFlights.map((flight, index) => {
            const departureCoords = airportCoordinates[flight.departure];
            const destinationCoords = airportCoordinates[flight.destination];

            if (!departureCoords || !destinationCoords) return null;

            return (
              <Polyline key={index} positions={[departureCoords, destinationCoords]} color="blue">
                <Marker position={departureCoords}>
                  <Popup>
                    {flight.getDetails()}
                  </Popup>
                </Marker>
                <Marker position={destinationCoords}>
                  <Popup>
                    {flight.getDetails()}
                  </Popup>
                </Marker>
              </Polyline>
            );
          })
        ) : (
          <p>No flights found for the selected route.</p>
        )}
      </MapContainer>
    </div>
  );
};

export default FlightRoute;