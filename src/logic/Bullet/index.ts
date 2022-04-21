import { Position } from '../../interfaces/Position';


const w = window.innerWidth;
const h = window.innerHeight;

const pressed = (events: any, bullets: Array<Position>, player: Position, delta: number, canCreate: boolean, setCan: (s:boolean) => void) => {
  // Create new Bullet
  if (events.Space && canCreate) {
    if (bullets.length < 20) {
      setCan(false);
      setTimeout(() => {
        setCan(true);
      }, 1000);
      
      bullets.push({ ...player, direction: 1, stepX: 0, stepY: 5 });
    }
  }

  const newBullets = bullets.map((bullet) => {
    bullet.y = bullet.y - (bullet.stepY * delta);
    return bullet;
  });

  return newBullets.filter((bullet) => {
    if (bullet.y < -100 || bullet.stepY === 0) {
      return false
    }

    return true;
  });
};

const collition = (fishes: Array<any>, bullets: Array<Position>) => {
  return fishes.map((fish) => {
    const bondaries = {
      minX: fish.x - 60,
      maxX: fish.x + 60,
      minY: fish.y - 10,
      maxY: fish.y + 10
    };
    
    bullets.forEach((bullet) => {
      if (bullet.y > bondaries.minY && bullet.y < bondaries.maxY &&
        bullet.x > bondaries.minX && bullet.x < bondaries.maxX) {
          fish.caught = true;
          fish.stepX = 0;
          fish.stepY = 0;
          bullet.stepY = 0;
      }
    });

    return fish;
  }).filter((fish) => {
    return !fish.caught;
  });
};

export { pressed as BulletCreator, collition as BulletCollition};