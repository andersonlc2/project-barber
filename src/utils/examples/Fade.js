import React from 'react';
import Fade from 'react-reveal/Fade';

class FadeExample extends React.Component {
  render() {
    return (
      <h1>
        <Fade left cascade>
          { this.props.text }
        </Fade>
      </h1>
    );
  }
}

export default FadeExample;