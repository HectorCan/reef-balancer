import React from 'react';
import { Sprite } from '@inlet/react-pixi';
import { Sepia } from '../../components/Filters';
import Water from '../../assets/images/level/sea_pixel.png';
import * as PIXI from 'pixi.js';

const WaterTexture = new PIXI.Texture.from(Water, {
  scaleMode: PIXI.SCALE_MODES.LINEAR
});

const BackgroundWater = ({ screenWidth, screenHeight, filters }) => {
  return (
    <Sepia matrix={{enabled: true}} apply={({ matrix }) => matrix.sepia() }>
      <Sprite
        texture={WaterTexture}
        width={screenWidth}
        height={screenHeight}
        filters={filters}
      />
    </Sepia>
  );
}

export default BackgroundWater;