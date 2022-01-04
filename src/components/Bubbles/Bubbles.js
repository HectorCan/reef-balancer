import React from 'react';
import './Bubbles.css';

const bubbleArray = [];

for (let i = 1; i <= 12; i++) {
  bubbleArray.push(i);
}

const Bubbles = () => {
  return (<>
    {bubbleArray.map((bubble) => (<div key={bubble} className={`bubble bubble--${bubble}`} />))}
  </>);
}

export default Bubbles;