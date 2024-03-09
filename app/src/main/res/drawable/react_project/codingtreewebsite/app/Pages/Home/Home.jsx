'use-client'

import React, { useEffect, useState } from 'react';

import Navbar from '@/app/Components/Navbar/Navbar'
import SubHome from '@/app/Components/SubHome/SubHome'
import Post from '@/app/Components/SubHome/Post';

export default function Home() {
  return (
    <div>
        <Navbar/>
        <SubHome/>
    </div>
  )
}
