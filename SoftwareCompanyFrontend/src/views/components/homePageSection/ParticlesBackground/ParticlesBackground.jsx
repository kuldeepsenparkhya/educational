import React from 'react';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';

const ParticlesBackground = () => {
  const particlesInit = async (engine) => {
    console.log("enggg",engine)
    await loadFull(engine);
  };

  const particlesLoaded = (container) => {
    console.log("kskassk",container);
  };

  return (
    <Particles
      id="tsparticles"
      // init={particlesInit}
      // loaded={particlesLoaded}
      options={{
        background: {
          color: {
            value: '#ffffff',
          },
        },
        particles: {
          number: {
            value: 100,
            density: {
              enable: true,
              value_area: 800,
            },
          },
          color: {
            value: '#ffffff',
          },
          shape: {
            type: 'circle',
          },
          opacity: {
            value: 0.5,
            random: true,
            anim: {
              enable: true,
              speed: 1,
              opacity_min: 0.1,
              sync: false,
            },
          },
          size: {
            value: 3,
            random: true,
            anim: {
              enable: true,
              speed: 40,
              size_min: 0.1,
              sync: false,
            },
          },
          links: {
            enable: false,
          },
          move: {
            enable: true,
            speed: 1,
            direction: 'none',
            random: true,
            straight: false,
            out_mode: 'out',
            bounce: false,
            attract: {
              enable: false,
              rotateX: 600,
              rotateY: 1200,
            },
          },
        },
        detectRetina: true,
      }}
    />
  );
};

export default ParticlesBackground;
