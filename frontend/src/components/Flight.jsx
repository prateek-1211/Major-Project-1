// Flight.js
class Flight {
    constructor(flightNumber, departure, destination, date, time, status) {
      this.flightNumber = flightNumber;
      this.departure = departure;
      this.destination = destination;
      this.date = date;
      this.time = time;
      this.status = status;
    }
  
    // Method to get flight details
    getDetails() {
      return `Flight Number: ${this.flightNumber}, Departure: ${this.departure}, Destination: ${this.destination}, Status: ${this.status}`;
    }
  }
  
  export default Flight;
  