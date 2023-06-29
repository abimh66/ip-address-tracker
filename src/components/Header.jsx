import { useState, useEffect } from 'react';
import bgMobile from '../assets/images/pattern-bg-mobile.png';
import bgDesktop from '../assets/images/pattern-bg-desktop.png';

const Header = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const handleResize = () => setWindowWidth(window.innerWidth);
  useEffect(() => {
    window.addEventListener('resize', handleResize);
  });
  return (
    <header>
      <img
        src={windowWidth > 768 ? bgDesktop : bgMobile}
        alt="Background Pattern"
        className="w-full h-auto"
      />
    </header>
  );
};

export default Header;
