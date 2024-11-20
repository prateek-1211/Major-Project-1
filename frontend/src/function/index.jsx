const functions = require('firebase-functions');
const nodemailer = require('nodemailer');

// Configure the email service (use SendGrid, Gmail, etc.)
const transporter = nodemailer.createTransport({
  service: 'gmail',  // or use SendGrid, etc.
  auth: {
    user: 'your-email@gmail.com',
    pass: 'your-email-password'
  }
});

exports.sendEmailNotification = functions.https.onCall((data, context) => {
  const mailOptions = {
    from: 'your-email@gmail.com',
    to: data.email, // User's email passed from the client
    subject: `Flight Status for Flight ${data.flightNumber}`,
    text: `
      Hi ${data.name},

      Your flight status for flight ${data.flightNumber} is as follows:
      Departure: ${data.departure}
      Destination: ${data.destination}
      Date: ${data.date}
      Time: ${data.time}
      Status: ${data.status}

      Safe travels!
    `,
  };

  // Send email using the configured transporter
  return transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log('Error sending email:', error);
      return { success: false, error };
    } else {
      console.log('Email sent:', info.response);
      return { success: true, info: info.response };
    }
  });
});
