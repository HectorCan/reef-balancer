import React from 'react';
import { Sprite } from '@inlet/react-pixi';

const Coral = (props) => {

  return (
    <Sprite
      x={props.coral.x}
      y={props.coral.y}
      scale={props.coral.scale}
      texture={props.coral.texture}
      interactive
      buttonMode
      click={() => props.coral.goTo()}
    />
  );
}

export default Coral;