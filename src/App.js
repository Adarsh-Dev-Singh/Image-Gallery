import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom'; // Import useParams and useNavigate
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
  const navigate = useNavigate(); // Get navigate function from react-router-dom

  // Scroll to the top of the page whenever route changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [byplace]);

  // Pass the byplace parameter to the Cards component
  return <Insidecards data={cardData} byplace={byplace} />;
}

export default App;
