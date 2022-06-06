import { Container, withFilters } from '@inlet/react-pixi';
import * as PIXI from 'pixi.js';

const Sepia = withFilters(Container, {
  matrix: PIXI.filters.ColorMatrixFilter,
});

export default Sepia;