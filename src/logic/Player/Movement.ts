import { Position } from "../../interfaces/Position";

const pressed = (events: any, pos: Position) => {
  if (events.KeyW || events.ArrowUp) {
    pos = updateMovement(pos, 10, false, false);
  }

  if (events.KeyS || events.ArrowDown) {
    pos = updateMovement(pos, 10, true, false);
  }

  if (events.KeyA || events.ArrowLeft) {
    pos = updateMovement(pos, 10, false, true);
  }

  if (events.KeyD || events.ArrowRight) {
    pos = updateMovement(pos, 10, true, true);
  }

  return pos;
}

const updateMovement = (pos: Position, val: number, add: boolean, axis: boolean) => {
  if (!add) {
    val = val * -1;
  }

  if (axis) {
    pos.x = pos.x + val;
  } else {
    pos.y = pos.y + val;
  }

  return pos;
}

export { pressed as Movement };