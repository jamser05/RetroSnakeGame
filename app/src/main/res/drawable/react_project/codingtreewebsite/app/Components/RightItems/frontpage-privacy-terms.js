import React, { useLayoutEffect, useState, useEffect } from 'react';
import PrivacyTerms from '../Policies/privacy-terms';
import policies from '../../policies/page';
import Link from 'next/link';
import './rightitem.css';

export default function FrontPagePrivacyTerms() {
  const [showPolicies, setShowPolicies] = useState(false);
  const [topPosition, setTopPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const rightbarItemPart2 = document.querySelector('.RightbarItemPart2');
      
      if (rightbarItemPart2) {
        const { top, height } = rightbarItemPart2.getBoundingClientRect();
        setTopPosition(top + height + 10);
        
        if (top <= 135) {
          setShowPolicies(true);
        } else {
          setShowPolicies(false);
        }
      }
    };

    handleScroll(); 
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  return (
    <div className={`privacyTerms ${showPolicies ? 'visible' : ''}`} style={{ top: `${topPosition}px`}}>
        <div className='section'>
          <Link href="/policies/">
            <p className='postTitle'>About</p>
          </Link>
        </div>
      {
        /*
         <div className='section'>
        <Link href='/privacy-terms'>
          <p className='postTitle'>Privacy & Terms</p>
        </Link>
      </div>

      <div className='section'>
        <Link href='/user-agreement'>
          <p className='postTitle'>User Agreement</p>
        </Link>
      </div>

        */
      }
    </div>
  );
}