import React, { useState, useEffect, useRef } from 'react';
import "../../Components/Navbar/navbar.css"
import "../../Components/SubHome/subhome.css"
import Image from 'next/image'
import logo from '../../../ImageForReddit/Logo.png'
import logoname from "../../../ImageForReddit/wordmark.png"
import Homelogo from "../../../ImageForReddit/home.png"
import searchIcon from "../../../ImageForReddit/search.png"
import messageimage from "../../../ImageForReddit/icons8-message-50.png"
import notificantion from "../../../ImageForReddit/icons8-notification-50.png"
import addicon from "../../../ImageForReddit/icons8-plus-24.png"
import ads from "../../../ImageForReddit/ads.png"
import popular from "../../../ImageForReddit/popular.png"
import profileicon from "../../../ImageForReddit/profile.png"
import showmore from "../../../ImageForReddit/down.png"
import DataStructuresImage from "../../../ImageForCommunities/data_structures.jpg"
import Link from 'next/link'
import { images } from '@/next.config'
import AuthButtons from './RightContent/AuthButtons';
import { ArticleData } from '../../Data/ArticleData';
import { useRouter } from 'next/navigation';

export default function Navbar() {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredPosts, setFilteredPosts] = useState(ArticleData);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const router = useRouter();

  const handleSearch = (query) => {
    setSearchQuery(query);

    const filtered = ArticleData.filter((post) =>
      post.title.toLowerCase().includes(query.toLowerCase())
    );

    const image = ArticleData.filter((post) =>
      post.image_url.toLowerCase().includes(query.toLowerCase())
    );

    setFilteredPosts(filtered);
  };

  const handlePostClick = (post) => {
    localStorage.setItem('selectedPost', JSON.stringify(post));
    router.push(`/CommentPage/${post.title}`);
  };


  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };


  return (
    <div className='main'>
      <div className='Rightbar'>

        <Link href={"/"}>
          <div className='logoContainer'>
            <Image
              src={logo}
              className='logostyle'
              alt="Picture of the author"
            />

            <Image
              src={logoname}
              className='logonamestyle'
              alt="Picture of the author"
            />
          </div>
        </Link>

        <Link href={"/"}>
          <div className='homestyle' onClick={toggleDropdown}>
            <Image
              src={Homelogo}
              alt="Home"
              width={20}
              height={20}
            />
            {isDropdownOpen && (
              <div className='postContentMenu'>
                {
                  /*
                  
                  <div className='postCardMenu'>
                    <Image
                      src={DataStructuresImage}
                      width={20}
                      height={20}
                      alt='HomeLogo'
                    />
                    <p>Learn</p>
                  </div>
                  */
                }

              </div>
              
            )}

          </div>
          </Link>



        <div className='homestyle'
          onClick={toggleDropdown}>
          <p style={{ paddingLeft: 6, marginTop: 2, fontSize: 14 }}>Home</p>
        </div>


      </div>

      <div className="Centerbar">

        <div style={{ width: 500, display: 'flex', alignItems: 'center', marginLeft: 20 }}>
          <Image src={searchIcon} className='searchstyle' alt='Search Icon' />
          <input
            placeholder='Search'
            className={"SearchBox"}
            value={searchQuery}
            onChange={(e) => handleSearch(e.target.value)}
          />
        </div>
        {searchQuery && filteredPosts.length > 0 && (
          <div className='postContainer show'>
            {filteredPosts.slice(0, 5).map((post) => (<div
              key={post.id}
              className='postCard'
              onClick={() => handlePostClick(post)}
            >
              <div className='postContent'>
                <img
                  src={post.image_url}
                  className='PostImage'
                  style={{ width: '65px', height: '65px' }}
                />
                <p className='postTitle'>{post.title}</p>
              </div>
            </div>
            ))}
          </div>
        )}
      </div>

      <div className='Leftbar'>
        {/*
              <AuthButtons/>


          <div style={{display:'flex' , alignItems:"center" , justifyContent:'space-between'}}>
          <Image
                  src={popular}
                  className='popularicon'
                  alt="Picture of the author"
              />
          <Image
                  src={messageimage}
                  className='message'
                  alt="Picture of the author"
              />
          <Image
                  src={notificantion}
                  className='notificaiton'
                  alt="Picture of the author"
              />
          <Link href="/CreatePost">
             <Image
                  src={addicon}
                  className='addcontent'
                  alt="Picture of the author"
                  />
            </Link>    
          <Image
                  src={ads}
                  className='ads'
                  alt="Picture of the author"
              />                
         </div>
         <div style={{display:'flex' , alignItems:'center'}}>
         <Image
                  src={profileicon}
                  className='profileIcon'
                  alt="Picture of the author"
              />
          <div style={{marginTop:4}}>
            <p style={{fontSize:11}}>Gradworld</p>
            <p style={{fontSize:11}}>32 karma</p>  
          </div>
          <div>
          <Image
                  src={showmore}
                  className='showmore'
                  alt="Picture of the author"
              />
          </div>    
         </div>
        </div>
          */}
      </div>
    </div>
  )
}
