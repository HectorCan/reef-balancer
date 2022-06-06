import { Container, withFilters } from '@inlet/react-pixi';
import { ColorOverlayFilter } from '@pixi/filter-color-overlay';

const ColorOverlay = withFilters(Container, {
  colorOverlay: ColorOverlayFilter,
});

export default ColorOverlay;