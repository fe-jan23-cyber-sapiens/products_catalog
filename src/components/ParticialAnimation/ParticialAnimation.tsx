import { FC, useState, useEffect } from 'react';
import './ParticialAnimation.scss';

export const ParticialAnimation: FC = () => {
  const [bubbles, setBubbles] = useState<
  { id: number; x: number; y: number }[]
  >([]);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      const { clientX, clientY } = event;
      const bubble = {
        id: Date.now(),
        x: clientX,
        y: clientY,
      };

      setBubbles((prevBubbles) => [...prevBubbles, bubble]);
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  useEffect(() => {
    if (bubbles.length > 10) {
      const timer = setTimeout(() => {
        setBubbles((prevBubbles) => prevBubbles.slice(1));
      }, 1000);

      return () => clearTimeout(timer);
    }

    return undefined;
  }, [bubbles]);

  const getRandomColor = () => {
    return [
      '#f13666',
      '#3899c7',
      '#f1d70e',
      '#fff',
    ][Math.floor(Math.random() * 3)];
  };

  return (
    <div className="cursor-animation">
      {bubbles.map(({ id, x, y }) => (
        <div
          key={id}
          className="bubble"
          style={{ left: x, top: y, backgroundColor: getRandomColor() }}
        />
      ))}
    </div>
  );
};
