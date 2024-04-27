import React, { useState, useEffect, useRef } from 'react';
import '../Style/CommonGal.css';
import { useParams } from 'react-router-dom';

function Insidecards({ data }) {
  const { byplace } = useParams();
  const parsedbyplace = parseInt(byplace);
  const byplaceimages = data.filter((photu) => photu.id === parsedbyplace);

  return (
    <div className="container">
      {byplaceimages.map((card, id) => (
        <InsideCard key={id} byplaceImage={card} />
      ))}
    </div>
  );
}

function InsideCard({ byplaceImage }) {
 

  

  const cardBgImage = {
    backgroundImage: `url(${byplaceImage.dataImage})`
  };

  return (
    <div className="card-wrap">
      <div className="card">
        <div className="card-bg" style={{...cardBgImage }}></div>
      </div>
    </div>
  );
}

export default Insidecards;
