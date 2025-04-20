import React, { useState } from 'react';

const DestinationSelector = ({ tours, onSelectDestination }) => { //This component receives the tours and a callback function to handle destination selection
  const [selectedDestination, setSelectedDestination] = useState(''); //State to keep track of the selected destination

  const handleChange = (event) => { //Function to handle the change event when a new destination is selected
    const destination = event.target.value; //Get the selected value from the event
    setSelectedDestination(destination); //Update the state with the selected destination
    onSelectDestination(destination); // Pass the selected destination up to App.jsx
  };

  return (
    <div>
      <label htmlFor="destination-select">Select a Destination: </label>
      <select
        id="destination-select"
        value={selectedDestination}
        onChange={handleChange}
      >
        <option value="">--All Destinations--</option>
        {tours.map((tour) => (
          <option key={tour.id} value={tour.name}>
            {tour.name}
          </option>
        ))}
      </select>
    </div> //This is the dropdown menu for selecting a destination
  );
};

export default DestinationSelector;