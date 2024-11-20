import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Background from './components/Background';
import Notification from './components/Notification';
import Book from './components/Book';
import Status from './components/Status';
import Trips from './components/Trips';
import FlightRoute from './components/FlightRoute';
import { messaging } from './function/firebase';
import { getToken } from 'firebase/messaging';

function App() {
  async function requestPermission() {
    try {
      const permission = await Notification.requestPermission();
      if (permission === 'granted') {
        // Generate Token
        const token = await getToken(messaging, {
          vapidKey: 'BDG2j4w3O0pEJVnt1FkwPQCKYh_DkrA1IQ_gKWlddMBnad0q876d3pF-KmuC1SkgxGPFZs8qwjSHJzYV3VCTFFY',
        });
        if (token) {
          console.log('Token generated:', token);
        } else {
          console.log('No token received. You may have disabled notifications.');
        }
      } else if (permission === 'denied') {
        alert('You denied the notification permission.');
      }
    } catch (error) {
      console.error('An error occurred while requesting permission or generating the token:', error);
    }
  }

  useEffect(() => {
    // Request user for notification permission
    requestPermission();
  }, []);

  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/home" element={<Background playStatus={true} heroCount={0} />} />
          <Route path="/notification" element={<Notification />} />
          <Route path="/book" element={<Book />} />
          <Route path="/status" element={<Status />} />
          <Route path="/trips" element={<Trips />} />
          <Route path="/flightRoute" element={<FlightRoute />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;