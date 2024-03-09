"use client"
import Navbar from '@/app/Components/Navbar/Navbar'
import React, { useState } from 'react'
import "./profile.css"
import Image from 'next/image'
import CommunityIcon from "../../../ImageForReddit/community.png"
import Contentpost from "../../Components/SubHome/contentpost"
import Subcat from '@/app/Components/SubHome/Subcat'
import Post from '@/app/Components/SubHome/Post'

export default function page({ params }) {
  const [IsPost, setIsPost] = useState([1]);
  console.log(IsPost.length)
  return (
    <div>
      <div>
        <Navbar />
        <div className='ProfileContainerBanner'></div>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <div className='leftprofileContaier'></div>
          <div className='CenterprofileContaier'>
            <div className='UnderOnePartOfCenterprofileContainer'>
              <Image src={CommunityIcon} className='profileImageForCommunity' alt='image' />
              <div style={{ marginLeft: 13 }}>
                <p className='LogoName'>{params.id}</p>
                <p className='usename'>r/{params.id}</p>
              </div>
              <div style={{ marginLeft: 40, backgroundColor: "white", marginTop: 6, paddingTop: 5, paddingBottom: 5, borderRadius: 30, paddingLeft: 30, paddingRight: 30, color: "black" }}>Join</div>
            </div>
            <div style={{ marginTop: 10, marginLeft: 10 }}>
              <Contentpost />
              <Subcat />
              {IsPost.length == 0 ?
                <div style={{ marginTop: "10%" }}>
                  <p style={{ textAlign: 'center', fontWeight: '500', marginTop: 10, color: "#d7dadc" }}>There are no posts in this subreddit</p>
                  <p style={{ textAlign: 'center', marginTop: 16, fontWeight: '500', color: "#d7dadc" }}>Be the first to till this fertile land</p>
                  <button style={{ backgroundColor: "white", paddingLeft: 30, paddingRight: 30, fontWeight: "600", border: "none", marginTop: 10, borderRadius: 10, paddingTop: 5, paddingBottom: 5, color: "black", marginLeft: "40%" }}>Add a post</button>
                </div>
                : ""}
              {ArticleData.map((item) => (
                <Post item={item} />
              ))}
            </div>
          </div>
          <div className='RightprofileContaier'></div>
        </div>
      </div>
    </div>
  )
}
