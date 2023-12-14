import React from 'react';
import './App.css';

function App() {
  const vehicleOne = {
    brand: 'Ford',
    model: 'Mustang',
    type: 'car',
    year: 2021, 
    color: 'red',
    registration: {
      city: 'Houston',
      state: 'Texas',
      country: 'USA'
    }
  }
 
    function myVehicle({model, registration: {state}}) {
      return 'My ' + model + ' is registered in ' + state + '.';
    }
    const message = myVehicle(vehicleOne);
  
  return (
    <div className="App">
      <h1>{message}</h1>
    </div>
  );
}
export default App;