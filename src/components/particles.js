import React from 'react';

import Particles from 'react-particles-js';

export class IndexParticles extends React.Component {
  render() {
    return (
      <div className="vueparticles home-particles">
        <Particles
          params={{
            particles: {
              color: '#F49342',
              line_linked: {
                color: '#F49342',
                distance: 150,
              },
              number: 90,
              size: 4,
              move: {
                speed: 3,
              },
              shape: {
                type: 'polygon',
              }
            }
          }}
        />
      </div>
    )
  }
}
