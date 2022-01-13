import React from 'react';
import * as PIXI from 'pixi.js';
import Generic from './Generic';
import boy from '../../assets/images/games/shooter/boy.png';

const boyTexture = new PIXI.Texture.from(boy);

const Boy = (props) => {
  const { x, y, direction, ...additional } = props;
  return (<Generic x={x} y={y} scale={{x: 0.3 * direction, y: 0.3}} texture={boyTexture} {...additional} />);
};

export default Boy;