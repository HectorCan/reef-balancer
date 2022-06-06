import React from 'react';
import { Sprite } from '@inlet/react-pixi';

const Coral = (props) => {
  const navigate = (prop) => {
    window.location.href += '/' + prop;
  };

  return (
    <Sprite
      x={props.coral.x}
      y={props.coral.y}
      scale={props.coral.scale}
      texture={props.coral.texture}
      interactive
      buttonMode
      click={() => navigate(props.coral.goTo)}
    />
  );
}

export default Coral;