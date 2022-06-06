import React from 'react';
import * as PIXI from 'pixi.js';
import { Sprite } from '@inlet/react-pixi';
import Cloud from '../../../assets/images/textures/texture-clouds.jpg';

const textureCloud = new PIXI.Texture.from(Cloud)

const TextureCloud = ({ screenWidth, screenHeight, displacementRef }) => {
  return (
    <Sprite
      width={screenWidth}
      height={screenHeight}
      texture={textureCloud}
      ref={displacementRef}
      />
  );
}

export default TextureCloud;