import React from 'react';
import Rotate from 'react-reveal/Rotate';

export class RotateComponent extends React.Component {
  render() {
    return (
      <div>
        <Rotate top left>
          <h1>React Reveal</h1>
        </Rotate>
      </div>
    );
  }
}

export default RotateComponent;