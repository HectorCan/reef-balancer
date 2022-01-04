import { useState, useEffect, useRef } from 'react';
import { Sprite, Stage } from '@inlet/react-pixi';
import { Sepia } from '../../components/Filters';
import { Reef } from '../../components/Reef';

import * as PIXI from 'pixi.js';

import { Water, Corals, TextureCloud } from './assets';
import { Bubbles } from '../../components/Bubbles';

const screenWidth  = window.innerWidth;
const screenHeight = window.innerHeight;

const corals = [
  {
    x: screenWidth / 2 - 480,
    y: screenHeight / 2 - 10,
    scale: 0.7,
    texture: new PIXI.Texture.from(Corals.Purple),
    goTo: 'shooter'
  },
  {
    x: screenWidth / 2 - 320,
    y: screenHeight / 2 + 50,
    scale: 0.75,
    texture: new PIXI.Texture.from(Corals.Pink),
    goTo: 'shooter'
  },
  {
    x: screenWidth / 2 + 610,
    y: screenHeight / 2 + 40,
    scale: 0.5,
    texture: new PIXI.Texture.from(Corals.Green),
    goTo: 'hidenseek'
  },
  {
    x: screenWidth / 2 + 450,
    y: screenHeight / 2 + 90,
    scale: 0.75,
    texture: new PIXI.Texture.from(Corals.Orange),
    goTo: 'hidenseek'
  },
  {
    x: -60,
    y: screenHeight / 2 + 50,
    scale: 0.75,
    texture: new PIXI.Texture.from(Corals.Red),
    goTo: 'metal-slug'
  },
];

const ReefOne = () => {
  const [filters, setFilters] = useState([]);
  const displacementRef = useRef(null);
  const reqRef          = useRef(null);

  useEffect(() => {
    const animate = () => {
      displacementRef.current.x += 3;
      displacementRef.current.y += 2;

      reqRef.current = requestAnimationFrame(animate);
    };

    const displacementFilter = new PIXI.filters.DisplacementFilter(
      displacementRef.current
    );
    displacementRef.current.texture.baseTexture.wrapMode = PIXI.WRAP_MODES.REPEAT;
    displacementRef.current.scale.x = 10;
    displacementRef.current.scale.y = 10;

    setFilters((prev) => [...prev, displacementFilter]);

    reqRef.current = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(reqRef.current);
  }, []);

  return (
    <>
      <Stage width={screenWidth} height={screenHeight}>
        <Sepia matrix={{enabled: true}} apply={({matrix}) => matrix.sepia() }>
          <Sprite 
            texture={new PIXI.Texture.from(Water, {
              scaleMode: PIXI.SCALE_MODES.LINEAR,
            })}
            width={screenWidth}
            height={screenHeight}
            filters={filters}
          />
        </Sepia>

        <Sprite
          width={screenWidth}
          height={screenHeight}
          texture={PIXI.Texture.from(
            TextureCloud
          )}
          ref={displacementRef}
          />

        <Reef filters={filters} corals={corals} />
      </Stage>
      <Bubbles />
    </>
  );
};

export default ReefOne;