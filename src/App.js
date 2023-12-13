import React from 'react';
import './App.css';

function App() {
  const vehicleOne = {
      brand: 'Ford',
      model: 'Mustang',
      type: 'car',
      year: 2021, 
      color: 'red'
    }
 
    function myVehicle({type, color, brand, model}) {
      return 'My ' + type + ' is a ' + color + ' ' + brand + ' ' + model + '.';
    }
    const message = myVehicle(vehicleOne);
  
  return (
    <div className="App">
      <h1>{message}</h1>
    </div>
  );
}
export default App;