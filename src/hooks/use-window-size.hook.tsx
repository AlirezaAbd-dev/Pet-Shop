import { useEffect, useState } from 'react';

const UseWindowSize = () => {
  const [width, setWidth] = useState<number>();
  const [height, setHeaight] = useState<number>();

  useEffect(() => {
    const event = (e: UIEvent) => {
      setWidth(window.innerWidth);
      setHeaight(window.innerHeight);
    };
    window.addEventListener('resize', event);

    return () => {
      window.removeEventListener('resize', event);
    };
  }, []);

  return { width, height };
};

export default UseWindowSize;
