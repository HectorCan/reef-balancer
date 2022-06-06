import React from 'react';
import { Sprite } from '@inlet/react-pixi';

const Generic = (props) => {
  const { x, y, texture, ...additional } = props;
  return (
    <Sprite
      x={x}
      y={y}
      {...additional}
      texture={texture}
    />
  );
};

export default Generic;