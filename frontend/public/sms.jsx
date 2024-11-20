const sendSmsNotification = async (to, message) => {
    try {
      const response = await fetch('http://localhost:5173/send-sms', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ to, body: message })
      });
      const data = await response.json();
      console.log('SMS sent with SID:', data.message_sid);
    } catch (error) {
      console.error('Error sending SMS:', error);
    }
  };
  
  // Example usage
  sendSmsNotification('+91-9827649480', 'Your flight status has changed.');