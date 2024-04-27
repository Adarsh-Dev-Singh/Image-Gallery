import React, { useState } from 'react';
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
  const [isEnlarged, setIsEnlarged] = useState(false);
  const cardBgImage = {
    backgroundImage: `url(${byplaceImage.dataImage})`
  };

  const handleDoubleClick = () => {
    setIsEnlarged(!isEnlarged);
  };

  return (
    <div className={`card-wrap ${isEnlarged ? 'enlarged' : ''}`} style={{ zIndex: isEnlarged ? 1 : 'auto' }} onDoubleClick={handleDoubleClick}>
      <div className={`card ${isEnlarged ? 'enlarged' : ''}`}>
        <div className="card-bg" style={{ ...cardBgImage }}></div>
        {isEnlarged && <img src={byplaceImage.dataImage} alt={byplaceImage.content} />}
        <div className="card-info">
          <p>{byplaceImage.content}</p>
        </div>
      </div>
    </div>
  );
}

export default Insidecards;
