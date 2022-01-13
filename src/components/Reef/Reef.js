import React from 'react';
import { Container } from '@inlet/react-pixi';
import { ColorOverlay } from '../Filters';
import { Coral } from '../Coral';

class Reef extends React.Component {
  render() {
    return (
      <Container filters={this.props.filters}>
        <ColorOverlay colorOverlay={{ color: 0x3e2a06, alpha: 0.7 }}>
          {this.props.corals.map((coral, k) => (<Coral key={k} coral={coral} />))}
        </ColorOverlay>
      </Container>
    );
  }
}

export default Reef;