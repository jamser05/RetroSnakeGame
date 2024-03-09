'use client'

import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import "./profile.css"
import Image from 'next/image'
import PinIcon from "../../ImageForReddit/pin.png"
import BestIcon from "../../ImageForReddit/icons8-rocket-64.png"
import HotIcon from "../../ImageForReddit/icons8-hot-30.png"
import Newicon from "../../ImageForReddit/icons8-new-50.png"
import Topicon from "../../ImageForReddit/icons8-up-80.png"
import showmore from "../../ImageForReddit/icons8-dot-67.png"
import Post from '../Components/SubHome/Post'
import { ArticleData } from '../Data/ArticleData'

export default function page() {
  return (
    <div>
        <Navbar/>
        <div style={{display:'flex' , alignItems:'center' , justifyContent:"space-between"}}>
            <div className='leftblank'>
                p
            </div>
            <div className='Centerpart' style={{marginLeft:10 , marginTop:17}}>
                <div style={{display:"flex" , justifyContent:"space-between"}}>
                    <p className='ProfileNavparttext'>OVERVIEW</p>
                    <p className='ProfileNavparttext'>POSTS</p>
                    <p className='ProfileNavparttext'>COMMENTS</p>
                    <p className='ProfileNavparttext'>HISTORY</p>
                    <p className='ProfileNavparttext'>SAVED</p>
                    <p className='ProfileNavparttext'>HIDDEN</p>
                    <p className='ProfileNavparttext'>UPVOTED</p>
                    <p className='ProfileNavparttext'>DOWNVOTED</p>

                </div>
                <div style={{marginTop:20 }}>
                    <p>Pinned Posts</p>
                    <div style={{marginLeft:100}}>
                       <Image src={PinIcon} alt='' style={{width:40 , height:40 , marginTop:40 , marginLeft:50}}/>
                       <p style={{marginTop:10 , marginBottom:10 ,color:"#808080" , fontWeight:"800" , fontSize:17}}>Show off that karma!</p>
                       <p style={{width:250 , marginBottom:10 , marginLeft:-30 , color:"#808080"}}>Pin a post from your feed using the "..." at the bottom of each post</p>
                       <p style={{color:"skyblue" , fontWeight:600 , marginLeft:30 , cursor:"pointer"}}>OK, I GOT IT</p>
                    </div>
                </div>
                <div>
                <div style={{ display: 'flex' , marginTop:20 , marginLeft:-16 }}>

                <div className='PostTopItemsContainer'>
                        <Image
                            src={Newicon}
                            className='linkIcons'
                            alt="Picture of the author"
                        />
                        <p style={{ marginTop: 7, marginLeft: 4, fontSize: 13 }}>New</p>
                    </div>

                    <div className='PostTopItemsContainer'>
                        <Image
                            src={HotIcon}
                            className='linkIcons'
                            alt="Picture of the author"
                        />
                        <p style={{ marginTop: 7, fontSize: 13 }}>Hot</p>
                    </div>                    
                   
                    <div className='PostTopItemsContainer'>
                        <Image
                            src={Topicon}
                            className='linkIcons'
                            alt="Picture of the author"
                        />
                        <p style={{ marginTop: 12, marginLeft: 4, fontSize: 13 }}>Top</p>
                    </div>
                    
                </div>
                <div>
                {ArticleData.map((item)=>(
                  <Post item={item}/>
                ))}
                </div>
                </div>
            </div>
            <div className='rightPart'></div>
        </div>
    </div>
  )
}
