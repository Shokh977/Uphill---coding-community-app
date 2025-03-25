import React, { useCallback, useEffect, useState } from 'react';
import Particles from 'react-particles';
import { loadSlim } from "tsparticles-slim";

const ParticleBackground = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  
  useEffect(() => {
    // Check if dark mode is active from HTML class
    const checkDarkMode = () => {
      const isDark = document.documentElement.classList.contains('dark');
      setIsDarkMode(isDark);
    };
    
    // Check initially
    checkDarkMode();
    
    // Set up a MutationObserver to watch for class changes on the html element
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === 'class') {
          checkDarkMode();
        }
      });
    });
    
    observer.observe(document.documentElement, { attributes: true });
    
    return () => {
      observer.disconnect();
    };
  }, []);
  
  const particlesInit = useCallback(async engine => {
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(async container => {
    // console.log(container);
  }, []);

  return (
    <div className="particle-container">
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          background: {
            color: {
              value: "transparent",
            },
          },
          fpsLimit: 60,
          interactivity: {
            events: {
              onClick: {
                enable: true,
                mode: "push",
              },
              onHover: {
                enable: true,
                mode: "repulse",
              },
              resize: true,
            },
            modes: {
              push: {
                quantity: 4,
              },
              repulse: {
                distance: 100,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: isDarkMode ? "#d8b4fe" : "#8b5cf6", // Lighter violet for dark mode
            },
            links: {
              color: isDarkMode ? "#d8b4fe" : "#8b5cf6", // Lighter violet for dark mode
              distance: 150,
              enable: true,
              opacity: isDarkMode ? 0.6 : 0.2, // Higher opacity for dark mode
              width: isDarkMode ? 1.5 : 1, // Slightly wider lines for dark mode
            },
            move: {
              direction: "none",
              enable: true,
              outModes: {
                default: "bounce",
              },
              random: false,
              speed: 1,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 800,
              },
              value: 60,
            },
            opacity: {
              value: isDarkMode ? 0.7 : 0.3, // Higher opacity for dark mode
            },
            shape: {
              type: "circle",
            },
            size: {
              value: { min: isDarkMode ? 1.5 : 1, max: isDarkMode ? 4 : 3 }, // Slightly larger particles for dark mode
            },
          },
          detectRetina: true,
        }}
      />
    </div>
  );
};

export default ParticleBackground;