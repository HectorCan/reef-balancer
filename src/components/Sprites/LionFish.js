import React from 'react';
import * as PIXI from 'pixi.js';
import Generic from './Generic';
import fish from '../../assets/images/games/shooter/pezLeon_pixel.png';

const fishTexture = new PIXI.Texture.from(fish);

const LionFish = (props) => {
  const { x, y, direction, ...additional } = props;
  return (
    <Generic 
      x={x} 
      y={y} 
      texture={fishTexture} 
      scale={{ x: 0.2 * direction, y: 0.2}}
      {...additional}
    />
  );
};

export default LionFish;