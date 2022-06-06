import { Sprite } from '@inlet/react-pixi';
import home from '../../assets/images/buttons/home.png';
import * as PIXI from 'pixi.js';

const pauseButtonTexture = new PIXI.Texture.from(home);

const Home = (props) => {
  
    return (
      <Sprite
        x={props.x}
        y={props.y}
        texture={pauseButtonTexture}
        scale={0.42}
        interactive
        buttonMode
        pointerdown={() => props.goTo()}
      />
    );
  }
  
  export default Home;