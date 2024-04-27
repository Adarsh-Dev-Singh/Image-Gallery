import React from 'react';
import { useParams } from 'react-router-dom'; // Import useParams
import Cards from './Components/Cards';
import cardData from './Data/cardData.json';
import Navbar from './Components/Navbar';
import { Route, Routes } from 'react-router-dom';
import Insidecards from './Components/Insidecards';

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        {/* Render Cards component for the root route */}
        <Route path="/" element={<Cards data={cardData} />} />
        {/* Render Cards component for the route with byplace parameter */}
        <Route path="/:byplace" element={<CardsWithData />} />
      </Routes>
    </>
  );
}

// Create a separate component to handle passing the byplace parameter
const CardsWithData = () => {
  // Extract the byplace parameter from the URL
  const { byplace } = useParams();
  
  // Pass the byplace parameter to the Cards component
  return <Insidecards data={cardData} byplace={byplace} />;
}

export default App;
