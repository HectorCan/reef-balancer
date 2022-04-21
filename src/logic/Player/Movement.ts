import { Position } from "../../interfaces/Position";

const velocityY = 5; const velocityX = 10;

const w = window.innerWidth;
const h = window.innerHeight;

const pressed = (events: any, pos: Position, delta: number) => {
  // Initialize
  const oldDirection = pos.direction;
  pos.stepX = 0; pos.stepY = 0; 

  // Check if Up and Down are pressed
  if ((events.KeyS || events.ArrowDown) && (events.KeyW || events.ArrowUp)) {
    pos.stepY = 0;
  } else {
    // If Up is pressed
    if ((events.KeyW || events.ArrowUp) && pos.y > 400) {
      pos.stepY = -velocityY;
    }
  
    // If Down is pressed
    if ((events.KeyS || events.ArrowDown) && pos.y < h - 150) {
      pos.stepY = velocityY;
    }
  }

  // Check if Left and Right are pressed
  if ((events.KeyA || events.ArrowLeft) && (events.KeyD || events.ArrowRight)) {
    pos.stepX = 0;
  } else {
    // If Left and not on limit
    if ((events.KeyA || events.ArrowLeft) && pos.x > 50) {
      pos.stepX = -velocityX;
      pos.direction = 1;
    }
  
    // If Right and not on limit
    if ((events.KeyD || events.ArrowRight) && pos.x < w - 50) {
      pos.stepX = velocityX;
      pos.direction = -1;
    }
  }

  // calculate position
  pos.x = pos.x + (pos.stepX * delta);
  pos.y = pos.y + (pos.stepY * delta);

  // check direction and fix the position of image.
  if (oldDirection !== pos.direction) {
    pos.x = pos.x + (-70 * pos.direction);   
  }

  return pos;
}

export { pressed as Movement };