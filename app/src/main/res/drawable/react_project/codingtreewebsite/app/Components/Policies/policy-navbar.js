import React from 'react';
import "../../Components/Policies/policy-navbar.css";
import Image from 'next/image';
import logo from '../../../ImageForReddit/Logo.png';
import logoname from "../../../ImageForReddit/wordmark_policy.png";
import Link from 'next/link';

export default function Navbar() {
  return (
    <div className='content'>
      <div className="frontPageLogoContainer">
        <Link href={"/"}>
          <div className='logo-container'>
            <div className="img-container">
              <Image
                src={logo}
                className='site-title-logo'
                alt="CodingTree Logo"
              />
              <Image
                src={logoname}
                className='word-mark'
                alt="CodingTree Wordmark"
              />
              <div className="logoBar"></div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  )
}
