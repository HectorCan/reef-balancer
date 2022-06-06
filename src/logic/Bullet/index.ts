import { Position } from '../../interfaces/Position';

const pressed = (events: any, bullets: Array<Position>, player: Position, delta: number, canCreate: boolean, setCan: (s:boolean) => void) => {
  // Create new Bullet
  if (events.Space && canCreate) {
    if (bullets.length < 5) {
      setCan(false);
      setTimeout(() => {
        setCan(true);
      }, 1000);
      
      bullets.push({ ...player, direction: 1, stepX: 0, stepY: 5 });
    }
  }

  const newBullets: Position[] = [];

  bullets.forEach(bullet => {
    bullet.y = bullet.y - (bullet.stepY * delta);

    if (bullet.y > -100) {
      newBullets.push(bullet)
    }
  });

  return newBullets;
};

const collition = (fish: any, bullets: Array<Position>) => {
  const bondaries = {
    minX: fish.x - (fish.direction === 1 ? 40 : 120),
    maxX: fish.x + (fish.direction === 1 ? 70 : -20),
    minY: fish.y - 40,
    maxY: fish.y + 60
  };

  let bulletCollition = -1;

  bullets.forEach((bullet, key) => {
    if (bullet.y > bondaries.minY && bullet.y < bondaries.maxY &&
      bullet.x > bondaries.minX && bullet.x < bondaries.maxX) {
        bulletCollition = key;
        return false;
    }
  });

  return bulletCollition;
};

export { pressed as BulletCreator, collition as BulletCollition};