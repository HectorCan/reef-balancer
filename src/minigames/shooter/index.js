import { useState, useEffect, useRef } from 'react';
import { Stage, Container } from '@inlet/react-pixi';
import { Boy, LionFish, Net, BackgroundWater, Bubbles, TextureCloud } from './assets'
import { Movement } from '../../logic/Player/Movement';
import * as PIXI from 'pixi.js';

const screenWidth = window.innerWidth;
const screenHeight = window.innerHeight;

function initializeMock(maxFishes = 10) {
  let mock = [];

  for (let i = 0; i < maxFishes; i++) {
    let directionX = Math.random() * 10 > 5 ? -1 : 1;
    let directionY = Math.random() * 10 > 5 ? -1 : 1;

    mock.push({
      x: Math.floor(Math.random() * screenWidth - 400 + 200),
      y: Math.floor(Math.random() * 200 ),
      stepX: (Math.random() * 0.3 + 0.3) * directionX,
      stepY: (Math.random() * 0.4 + 0.2) * directionY,
      caught: false,
      direction: directionX
    });
  }

  return mock;
}

const Shooter = () => {
  const mock = initializeMock(10);

  const [fishes, setFishes] = useState(mock);
  const [nets, setNets]     = useState([]);
  const [player, setPlayer] = useState({ x: 950, y: 750, stepX: 0, stepY: 0, direction: 1 });
  const [filters, setFilters] = useState([]);
  const [inputs, setInputs]   = useState({});

  // Wave Effect - PT 1
  const displacementRef    = useRef(null);
  const reqRef             = useRef(null);

  const keyDown = (event) => {
    const trigger = { ...inputs };
    trigger[event.code] = true;

    setInputs(trigger);
  };

  const keyUp = (event) => {
    const trigger = { ...inputs };
    delete trigger[event.code];

    setInputs(trigger);
  };

  // Game animation
  useEffect(() => {
    const animate = (delta) => {
      // Player movement
      const currentInputs = { ...inputs };
      const newMoves = Movement(currentInputs, { ...player }, delta);
      setPlayer(newMoves);

      // Fishes movement
      const updatedFishes = fishes.map((fish) => {
        let { stepX, stepY, x, y } = fish;
        
        // check rebound in x
        if ((fish.x < 200 && fish.stepX < 0) || (fish.x > (screenWidth - 200) && fish.stepX > 0)) {
          stepX *= -1;
        }

        // check rebound in y
        if ((fish.y < 10 && fish.stepY < 0) || (fish.y > 300 && fish.stepY > 0)) {
          stepY *= -1;
        }

        // new position
        x = fish.x + (fish.stepX * 5 * delta);
        y = fish.y + (fish.stepY * delta);

        // If direction has changed
        const newDirection = stepX > 0 ? 1 : -1;
        if (fish.direction !== newDirection) {
          x = x + (-120 * newDirection);
        }

        return { ...fish, x: Math.abs(x), y: Math.abs(y), stepX, stepY, direction: newDirection};
      });

      setFishes([...updatedFishes]);
    };

    PIXI.Ticker.shared.add(animate, this);

    return () => {
      PIXI.Ticker.shared.remove(animate, this);
    };
  });

  // Wave Effect - PT 2
  useEffect(() => {
    const animate = () => {
      displacementRef.current.x += 2;
      displacementRef.current.y += 1;
      reqRef.current = requestAnimationFrame(animate);
    };
    const displacementFilter = new PIXI.filters.DisplacementFilter(
      displacementRef.current
    );
    displacementRef.current.texture.baseTexture.wrapMode =
      PIXI.WRAP_MODES.REPEAT;
    displacementRef.current.scale.x = 10;
    displacementRef.current.scale.y = 10;
    setFilters(prev => [...prev, displacementFilter]);
    reqRef.current = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(reqRef.current);
  }, []);

  return (
    <div>
      <Stage onKeyDown={keyDown} tabIndex="0" onKeyUp={keyUp} width={screenWidth} height={screenHeight}>
        <BackgroundWater screenWidth={screenWidth} screenHeight={screenHeight} filters={filters} />
        <TextureCloud screenWidth={screenWidth} screenHeight={screenHeight} displacementRef={displacementRef} />
      
        <Container filters={filters}>
          {fishes.map((fish, k) => <LionFish key={k} x={fish.x} y={fish.y} direction={fish.direction} />)}
          
          <Boy x={player.x} y={player.y} direction={player.direction} />
        </Container>
      </Stage>
      <Bubbles />
    </div>
  );
};

export default Shooter;