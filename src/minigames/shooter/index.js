import { useState } from 'react';
import { Movement } from '../../logic/Player/Movement.ts';

const Test = () => {
  const [player, setPlayer] = useState({ x: 0, y: 0 });
  const [inputTrigger, setTrigger] = useState({})
  
  const keyDown = (event) => {
    const newTrigger = {...inputTrigger };
    newTrigger[event.code] = true;

    setTrigger(newTrigger);
    setPlayer(Movement(newTrigger, { ...player }));
  }

  const keyUp = (event) => {
    const newTrigger = { ...inputTrigger };
    delete newTrigger[event.code];
    setTrigger(newTrigger);
  }

  return (
    <div onKeyDown={keyDown} onKeyUp={keyUp} tabIndex="0">
      <h1>Position player</h1>
      <h3>X {player.x}</h3>
      <h3>Y {player.y}</h3>
    </div>
  );
}

export default Test;
