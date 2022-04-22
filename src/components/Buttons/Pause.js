import React, { Component } from 'react';
import { Sprite } from '@inlet/react-pixi';
import { CustomPIXIComponent } from '@inlet/react-pixi';
import pauseButton from '../../assets/images/buttons/pauseButton.png';
import playButton from '../../assets/images/buttons/playButtton.png';
import Generic from '../Sprites/Generic';
import * as PIXI from 'pixi.js';

const pauseButtonTexture = new PIXI.Texture.from(pauseButton);
const playButtonTexture = new PIXI.Texture.from(playButton);

/*const Button = new PIXI.Sprite(pauseButtonTexture);

Button.anchor.set(0.5);
Button.x = 500;
Button.y = 600;

Button.interactive = true;
Button.buttonMode = true;

Button.on('pointerDown', onButtonDown);

function onButtonDown() {
  this.isDown = true;
  this.texture = playButtonTexture;
  this.alpha = 1;
}*/

/*const onButtonDown = () => {
  this.isDown = true;
  Pause.texture = playButtonTexture;
}*/

/*const Pause = (props) => {
  const { x, y, ...additional} = props;

  return (<Generic x={500} y={500} texture={pauseButtonTexture} interactive buttonMode onClick = {onButtonDown}/>);
};*/

class Pause extends Component {
  constructor(props) {
    super(props);
    const { x, y, texture, interactive, buttonMode, ...additional } = props;
    this.onButtonDown = this.onButtonDown.bind(this);
  }

  /*pointerDown = (event) => {
    const [inputs, setInputs]   = useState({});
    const trigger = { ...inputs };
    trigger[event.code] = true;

    setInputs(trigger);
  };*/

  onButtonDown() {
    console.log("click");
  }

  render() {
    /*var pause = <Sprite x={500} y={500} texture={pauseButtonTexture} interactive buttonMode/>;
    return <pause/>;*/
    return <Sprite x={window.width} y={window.height} texture={pauseButtonTexture} interactive buttonMode scale={0.2}/>;
  }
}

export default Pause;