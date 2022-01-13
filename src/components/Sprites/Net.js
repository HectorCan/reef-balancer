import React from 'react';
import * as PIXI from 'pixi.js';
import Generic from './Generic';
import net from '../../assets/images/games/shooter/red_pixel.png';

const netTexture = new PIXI.Texture.from(net);

const Net = ({ x, y, ...props}) => {
  return (<Generic 
      x={x} 
      y={y} 
      texture={netTexture}
      width={30}
      height={30}
      scale={0.2}
    />);
};

export default Net;