import React, { useState } from 'react';
import Gallery from './components/Gallery';
import DestinationSelector from './components/DestinationSelector';

function App() {
  const [tours, setTours] = useState([]);
  const [selectedDestination, setSelectedDestination] = useState('');

  const removeTour = (id) => {
    setTours((prevTours) => prevTours.filter((tour) => tour.id !== id));
  };

  const handleSelectDestination = (destination) => {
    setSelectedDestination(destination);
  };

  const filteredTours = selectedDestination
    ? tours.filter((tour) => tour.name === selectedDestination)
    : tours;

  return (
    <main>
      <h1>Our Tours</h1>
      <DestinationSelector
        tours={tours}
        onSelectDestination={handleSelectDestination}
      />
      <Gallery tours={filteredTours} setTours={setTours} onRemove={removeTour} />
    </main>
  );
}

export default App;