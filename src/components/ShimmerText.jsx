import React, { useEffect, useState } from 'react';

const ShimmerText = () => {
  const [texts, setTexts] = useState([
    'CSS is awesome, right?'
  ]);

  const getRandomColor = () => {
    const colors = [
      '#ff6b6b', '#4ecdc4', '#45b7d1', '#96ceb4', '#ffeaa7',
      '#dda0dd', '#98d8c8', '#f7dc6f', '#bb8fce', '#85c1e9'
    ];
    return colors[Math.floor(Math.random() * colors.length)];
  };

  useEffect(() => {
    // Apply default config values (same as original)
    document.documentElement.dataset.theme = 'dark';
    document.documentElement.dataset.debug = 'false';
    document.documentElement.dataset.style = 'classic';
    document.documentElement.style.setProperty('--bg-position', '50');
    document.documentElement.style.setProperty('--bg-spread', '3');
    document.documentElement.style.setProperty('--bg-angle', '295');
    document.documentElement.style.setProperty('--multiplier', '0.12');

    const syncLines = () => {
      const main = document.querySelector('main');
      if (main) {
        [...main.children].forEach((child) => {
          child.style.setProperty('--placeholder-length', child.textContent.length);
        });
      }
    };

    const main = document.querySelector('main');
    if (main) {
      main.addEventListener('input', syncLines);
      syncLines();
    }

    // Set random colors initially and every 3 seconds
    const updateColors = () => {
      const main = document.querySelector('main');
      if (main) {
        [...main.children].forEach((child) => {
          child.style.setProperty('--base-color', getRandomColor());
        });
      }
    };
    
    updateColors();
    const colorInterval = setInterval(updateColors, 3000);

    return () => {
      if (main) {
        main.removeEventListener('input', syncLines);
      }
      clearInterval(colorInterval);
    };
  }, []);

  return (
    <div style={{ 
      display: 'grid', 
      placeItems: 'center', 
      minHeight: '100vh',
      background: '#000',
      fontFamily: "'SF Pro Text', 'SF Pro Icons', 'AOS Icons', 'Helvetica Neue', Helvetica, Arial, sans-serif, system-ui"
    }}>
      <style>{`
        :root {
          --duration: calc(var(--placeholder-length, 10) * 0.2s);
          --place-color: color-mix(in hsl, canvas, canvasText 20%);
          --offset: calc(var(--bg-spread, 6) * 0.5ch);
          --angle: calc(var(--bg-angle) * 1deg);
          --flame: linear-gradient(
            var(--angle),
            #0000 calc(50% - var(--offset)),
            hsl(45 100% 60%) calc(50% - (var(--offset) - 0.5ch)),
            hsl(0 100% 50%),
            #0000 calc(50% + var(--offset))
          );
          --aurora: linear-gradient(
            var(--angle),
            #0000 calc(50% - var(--offset)),
            #a960ee,
            #ff333d,
            #ffcb57,
            #90e0ff,
            #0000 calc(50% + var(--offset))
          );
          --classic: linear-gradient(
            var(--angle),
            #0000 calc(50% - var(--offset)),
            white,
            #0000 calc(50% + var(--offset))
          );
          --bg: var(--chosen) 0 0 / 300% 100% no-repeat;
        }

        [data-style='classic'] {
          --chosen: var(--classic);
        }
        [data-style='flame'] {
          --chosen: var(--flame);
        }
        [data-style='aurora'] {
          --chosen: var(--aurora);
        }

        main {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        main p {
          --font-level: 2;
          --duration: calc((var(--placeholder-length, 10) * var(--multiplier)) * 1s);
          --base-color: #ffffff;
          margin: 0;
          border: 2px solid #0000;
          white-space: nowrap;
          line-height: 1.2;
          outline-offset: 0.1em;
          outline-color: hsl(280 90% 60% / 0.5);
          font-weight: 400;
          display: inline-block;
          align-self: start;
          font-size: 2rem;
          color: var(--base-color);
          position: relative;
          transition: color 0.8s ease;
        }

        main p::after {
          content: attr(data-text);
          position: absolute;
          top: 0;
          left: 0;
          background: var(--bg);
          background-clip: text;
          -webkit-background-clip: text;
          color: transparent;
          animation: shimmer var(--duration) infinite both ease-in-out;
        }

        @keyframes shimmer {
          0% {
            background-position: 100% 0;
          }
          50%,
          100% {
            background-position: 0% 0;
          }
        }

        main p:focus {
          outline: 2px solid #4ecdc4;
          outline-offset: 2px;
        }

        *,
        *:after,
        *:before {
          box-sizing: border-box;
        }
      `}</style>

      <main>
        {texts.map((text, index) => (
          <p
            key={index}
            contentEditable={true}
            onInput={(e) => {
              const newTexts = [...texts];
              newTexts[index] = e.target.textContent;
              setTexts(newTexts);
              e.target.setAttribute('data-text', e.target.textContent);
              e.target.style.setProperty('--placeholder-length', e.target.textContent.length);
            }}
            suppressContentEditableWarning={true}
            data-text={text}
          >
            {text}
          </p>
        ))}

        <p
        contentEditable={true}
         suppressContentEditableWarning={true}

        >this is simmmering simmmmu</p>
      </main>
    </div>
  );
};

export default ShimmerText;