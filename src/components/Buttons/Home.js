import React, { Component } from 'react';
import { Sprite, Stage } from '@inlet/react-pixi';
import { CustomPIXIComponent } from '@inlet/react-pixi';
import home from '../../assets/images/buttons/home.png';
import * as PIXI from 'pixi.js';
import { DisplayObject } from 'pixi.js';
import { useNavigate } from "react-router-dom";

const pauseButtonTexture = new PIXI.Texture.from(home);

const Home = (props) => {
    const {x, y, texture, goTo, ...additional } = props;
    const navigate = (prop) => {
      window.location.href = prop;
    };
  
    return (
      <Sprite
        x={props.x}
        y={props.y}
        texture={pauseButtonTexture}
        scale={0.7}
        interactive
        buttonMode
        pointerdown={() => navigate(props.goTo)}
      />
    );
  }
  
  export default Home;