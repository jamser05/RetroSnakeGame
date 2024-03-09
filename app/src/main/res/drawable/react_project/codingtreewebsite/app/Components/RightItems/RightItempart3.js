import React, { useLayoutEffect, useRef, useState } from 'react';
import './rightitem.css';

export default function RightItempart3() {
  const [showScrollButton, setShowScrollButton] = useState(false);

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
    });
  };

  const handleScroll = () => {
    const scrolledToTop = window.scrollY === 0;
    setShowScrollButton(!scrolledToTop);
  };

  useLayoutEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <button
      className={`scrollToTop ${showScrollButton ? 'show' : 'hide'}`}
      onClick={handleScrollToTop}
    >
      Back to Top
    </button>
  );
}
