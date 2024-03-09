import React from 'react';
import '../Policies/about.css';
import Logo from '../../../ImageForReddit/Logo.png'
import Image from 'next/image';

export default function AboutPage() {
  return (
    <div className='flexible-column-section'>
      <div className='AboutPostContainer'>

        <Image
          src={Logo}
          className='frontPageLogo'
          alt="CodingTree Logo"
        />

        <p className="banner-headline">About CodingTree</p>

        <p className="banner-subheadline">
          CodingTree is a platform dedicated to spreading various engineering disciplines to individuals worldwide. 
        </p>

        <p className="banner-headline-two">Vision</p>

        <p className="banner-subheadline">
          Our vision is to create a supportive and inclusive community where aspiring programmers
          can grow and thrive. We believe in the transformative power of coding education
          and strive to make it accessible to everyone, regardless of background or experience.
        </p>

        <p className="banner-headline-two">Mission</p>

        <p className="banner-subheadline">
          CodingTree's mission: spread engineering knowledge through an inclusive community of collaborative engineers.
        </p>

        <p className="banner-headline-two">About Us</p>

        <p className="banner-subheadline">
          Whether you're just starting your coding journey or looking to advance your skills,
          we invite you to join our community and explore all that CodingTree has to offer.
        </p>

      </div>
    </div>
  );
}
