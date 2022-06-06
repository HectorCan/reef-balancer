import { useState, useEffect, useRef } from 'react';
import { Stage, Container } from '@inlet/react-pixi';
import { Boy, LionFish, Net, BackgroundWater, Bubbles, TextureCloud, Pause, Home} from './assets'
import { Movement } from '../../logic/Player/Movement';
import { BulletCreator, BulletCollition } from '../../logic/Bullet';
import * as PIXI from 'pixi.js';
import { Howl, Howler } from 'howler';
import BgSound1 from '../../assets/music/bg-sea-1.mp3';
import { useHistory } from 'react-router-dom';

const screenWidth = window.innerWidth;
const screenHeight = window.innerHeight;

let volume = 30; let timeout = null;

function initializeMock(maxFishes = 10) {
  let mock = [];

  for (let i = 0; i < maxFishes; i++) {
    let directionX = Math.random() * 10 > 5 ? -1 : 1;
    let directionY = Math.random() * 10 > 5 ? -1 : 1;

    mock.push({
      x: Math.floor(Math.random() * screenWidth - 400 + 200),
      y: Math.floor(Math.random() * 200 ),
      stepX: (Math.random() * 1 + 0.3) * directionX,
      stepY: (Math.random() * 1 + 0.2) * directionY,
      caught: false,
      direction: directionX
    });
  }

  return mock;
}

const Sound = new Howl({
  src: BgSound1,
  autoplay: false,
  loop: true,
  volume: volume / 100,
});

const Shooter = () => {
  const mock = initializeMock(8);
  const history = useHistory();

  const [fishes, setFishes] = useState(mock);
  const [nets, setNets]     = useState([]);
  const [player, setPlayer] = useState({ x: screenWidth / 2, y: screenHeight / 3 * 2, stepX: 0, stepY: 0, direction: 1 });
  const [filters, setFilters] = useState([]);
  const [inputs, setInputs]   = useState({});
  const [canShoot, setCan] = useState(true);

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
    const animate = async (delta) => {
      // Player movement
      const currentInputs = inputs;
      const newMoves = Movement(currentInputs, player, delta);
      const updatedFishes = [];
      let newNets = BulletCreator(currentInputs, nets, player, delta, canShoot, setCan);
      
      fishes.forEach((fish) => {
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

        const removeNetIndex = BulletCollition(fish, newNets);

        if (removeNetIndex !== -1) {
          newNets.splice(removeNetIndex, 1);
        } else {
          updatedFishes.push({ ...fish, x: Math.abs(x), y: Math.abs(y), stepX, stepY, direction: newDirection });
        }
      });

      setPlayer(newMoves);
      setNets(newNets);
      setFishes(updatedFishes);
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

  useEffect(() => {
    Sound.play();

    return () => {
      Sound.stop();
    }
  }, []);

  const volumeChange = (evt) => {
    volume = parseInt(evt.target.value);

    clearTimeout(timeout);

    timeout = setTimeout(() => {
      Howler.volume(volume / 100);
    }, 1000)
  };

  return (
    <div>
      <div id='ui'></div>
      <Stage onKeyDown={keyDown} tabIndex="0" onKeyUp={keyUp} width={screenWidth} height={screenHeight}>
        <BackgroundWater screenWidth={screenWidth} screenHeight={screenHeight} filters={filters} />
        <TextureCloud screenWidth={screenWidth} screenHeight={screenHeight} displacementRef={displacementRef} />
        <Container filters={filters}>
          {fishes.map((fish, k) => <LionFish key={k} x={fish.x} y={fish.y} direction={fish.direction} />)}

          {nets.map((bull, k) => <Net key={k} x={bull.x} y={bull.y} />)}
          <Boy x={player.x} y={player.y} direction={player.direction} />
        </Container>

        {<Pause x={50} y={10}/>}
        {<Home x={130} y={10} goTo={() => {
          history.push('/reef-balancer')
        }}/>}
      </Stage>
      <input type="number" name="volume" min="1" max="100" value={volume} onChange={volumeChange} 
        style={{position: 'absolute', top: 10, left: 200}}
      />
      <Bubbles />
    </div>
  );
};

export default Shooter;