'use client'

import React, { useEffect, useState } from 'react';
import Navbar from '../Components/Policies/policy-navbar'
import AboutPage from '../Components/Policies/about';
import Footer from '../Components/Policies/policy-footer'
import '../Components/Policies/about.css'

export default function PolicyPage() {
  return (
    <div>
        <Navbar/>
        <AboutPage/>
        <Footer/>
    </div>
  );
}