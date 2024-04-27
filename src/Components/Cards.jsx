import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import '../Style/CommonGal.css';

function Cards({ data }) {
  // Filter the data to get only unique items based on the ID
  const uniqueData = data.reduce((acc, current) => {
    const x = acc.find(item => item.id === current.id);
    if (!x) {
      return acc.concat([current]);
    } else {
      return acc;
    }
  }, []);

  return (
    <div className="container">
      {uniqueData.map((card, index) => (
        <Card key={index} data={card} />
      ))}
    </div>
  );
}

function Card({ data }) {
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);
  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);
  const [mouseLeaveDelay, setMouseLeaveDelay] = useState(null);
  const cardRef = useRef(null);

  useEffect(() => {
    if (cardRef.current) {
      setWidth(cardRef.current.offsetWidth);
      setHeight(cardRef.current.offsetHeight);
    }
  }, []);

  const handleMouseMove = (e) => {
    if (cardRef.current) {
      setMouseX(e.pageX - cardRef.current.offsetLeft - width / 2);
      setMouseY(e.pageY - cardRef.current.offsetTop - height / 2);
    }
  };

  const handleMouseEnter = () => {
    clearTimeout(mouseLeaveDelay);
  };

  const handleMouseLeave = () => {
    const delay = setTimeout(() => {
      setMouseX(0);
      setMouseY(0);
    }, 1000);
    setMouseLeaveDelay(delay);
  };

  const cardStyle = {
    transform: `rotateY(${mouseX / width * 30}deg) rotateX(${mouseY / height * -30}deg)`
  };

  const cardBgTransform = {
    transform: `translateX(${mouseX / width * -40}px) translateY(${mouseY / height * -40}px)`
  };

  const cardBgImage = {
    backgroundImage: `url(${data.dataImage})`
  };

  return (
    <Link to={`/${data.id}`}>
      <div
        className="card-wrap"
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        ref={cardRef}
      >
        <div className="card" style={cardStyle}>
          <div className="card-bg" style={{ ...cardBgTransform, ...cardBgImage }}></div>
          <div className="card-info">
            <h1>{data.header}</h1>
            <p>{data.content}</p>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default Cards;
