import React, { Component } from 'react';
import { Sprite, Stage } from '@inlet/react-pixi';
import { CustomPIXIComponent } from '@inlet/react-pixi';
import pauseButton from '../../assets/images/buttons/pauseButton.png';
import playButton from '../../assets/images/buttons/playButtton.png';
import * as PIXI from 'pixi.js';
import { DisplayObject } from 'pixi.js';

const pauseButtonTexture = new PIXI.Texture.from(pauseButton);
const playButtonTexture = new PIXI.Texture.from(playButton);

const Pause = (props) => {
  const {x, y, texture, ...additional } = props;
  const [isPlaying, setIsPlaying] = React.useState(true);
  const onButtonDown = () => {
    setIsPlaying(isPlaying => !isPlaying);
    isPlaying ? PIXI.Ticker.shared.stop() : PIXI.Ticker.shared.start();
  };

  return (
    <Sprite
      x={props.x}
      y={props.y}
      texture={pauseButtonTexture}
      scale={0.2}
      interactive
      buttonMode
      pointerdown={() => onButtonDown()}
    />
  );
  
};

export default Pause;