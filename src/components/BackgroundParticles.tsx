import Particles from "react-tsparticles";
import type { Engine } from "tsparticles-engine";
import { loadSlim } from "tsparticles-slim";

const BackgroundParticles = () => {
  const particlesInit = async (engine: Engine) => {
    await loadSlim(engine);
  };

  return (
    <Particles
      init={particlesInit}
      options={{
        fullScreen: {
          enable: true,
          zIndex: -1,
        },
        background: {
          color: "#0f172a",
        },
        particles: {
          number: {
            value: 60,
            density: {
              enable: true,
              area: 800,
            },
          },
          color: {
            value: "#ffffff",
          },
          links: {
            enable: true,
            distance: 150,
            opacity: 0.2,
          },
          move: {
            enable: true,
            speed: 0.6,
          },
          opacity: {
            value: 0.5,
          },
          size: {
            value: 2,
          },
        },
      }}
    />
  );
};

export default BackgroundParticles;
