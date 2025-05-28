import React, { useEffect, useState } from 'react';
import Compliance from '../assets/1.png';
import DATA from '../assets/2.png';
import YourAgent from '../assets/3.png';
import Legal from '../assets/4.png';
import Marketing from '../assets/5.png';

const ScalingSection = ({ children }) => {
  const [scale, setScale] = useState(1);

  const handleScroll = () => {
    const scrollTop = window.scrollY;
    const maxScroll = 1000; // adjust threshold
    const newScale = Math.max(0.9, 1 - scrollTop / maxScroll * 0.1);
    setScale(newScale);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      style={{
        transform: `scale(${scale})`,
        transition: 'transform 0.1s ease-out',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {children}
    </div>
  );
};

const Page = () => {
  return (
    <div className='flex items-center justify-center'>
       <ScalingSection><img src={Compliance} alt="" /></ScalingSection>
      <ScalingSection><img src={DATA} alt="" /></ScalingSection>
      <ScalingSection><img src={YourAgent} alt="" /></ScalingSection>
      <ScalingSection><img src={Legal} alt="" /></ScalingSection>      
      <ScalingSection><img src={Marketing} alt="" /></ScalingSection>
    </div>
  );
};

export default Page;
