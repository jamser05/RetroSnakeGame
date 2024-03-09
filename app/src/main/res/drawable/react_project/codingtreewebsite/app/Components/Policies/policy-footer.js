import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import '../Policies/footer.css'
import LogoImage from '../../../ImageForReddit/Logo.png';
import LogoNameImage from '../../../ImageForReddit/wordmark_policy.png';
import { color } from '@chakra-ui/react';

export default function Footer() {
  return (
    <footer className="linkedin-footer">
      <div className="container">
        <div className="footer-links">
          <ul className="footer-legal-items">
            <li><a href="#">About</a></li>
          </ul>
        </div>
        <div className="footer-logo">
          <Link href="/">
              <Image src={LogoImage} className="logo-img" alt="LinkedIn Logo" /><span className="footer-legal-copyright">© CodingTree 2024</span>
          </Link>
        </div>
      </div>
    </footer>
  );
}
