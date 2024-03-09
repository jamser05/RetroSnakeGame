"use client"
import "./rightitem.css"
import Image from 'next/image'
import Modal from 'react-modal';
import Profile from "../../../ImageForReddit/profile.png"
import Coverimage from "../../../ImageForReddit/home-banner.png"
import KotlinIcon from "../../../ImageForReddit/kotlin-icon.png"  // Add the path to your Kotlin icon
import { useState } from "react";
import { useEffect } from "react";
import { useRouter } from 'next/navigation';
import Homelogo from "../../../ImageForReddit/home.png"
import "../SinglePostCommentPage/leftside.css"
import "../SubHome/post.css"
import "../Navbar/navbar.css"
import { Button } from "@chakra-ui/react";
import Link from "next/link";

export default function RightItempart2() {
  const [modelIsOpen, setModelIsOpen] = useState(false);
  const [recentPosts, setRecentPosts] = useState([]);

  const router = useRouter();

  const handleCreate = () => {
    setModelIsOpen(!modelIsOpen);
  }

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY || document.documentElement.scrollTop;
      const fixedSection = document.getElementById("fixedSection");

      if (scrollPosition > 100) {
        fixedSection.style.top = "0px";
      } else {
        fixedSection.style.top = "135px";
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const clickedPosts = JSON.parse(localStorage.getItem('clickedPosts')) || [];
    setRecentPosts(clickedPosts);
  }, []);

  const handlePostClick = (post) => {
    localStorage.setItem('selectedPost', JSON.stringify(post));
    window.location.href = `/CommentPage/${post.title}`;
  };

  const uniqueRecentPosts = recentPosts.reduce((acc, post) => {
    if (!acc.find((p) => p.id === post.id)) {
      acc.push(post);
    }
    return acc;
  }, []);

  const reversedRecentPosts = [...uniqueRecentPosts].reverse();

  return (
    <div className='RightbarItemPart2' id="fixedSection">
      <Modal
        style={{ overlay: { backgroundColor: "rgb(12 12 12 / 49%)" } }}
        isOpen={modelIsOpen}
        className="modelclassNameForCommunity"
        onRequestClose={() => setModelIsOpen(false)}>
      </Modal>

      <div className="RecentSection">
        <h2>Recent</h2>
        {uniqueRecentPosts.slice(0, 5).map((post) => (
          <Link key={post.id} href={`/CommentPage/${encodeURIComponent(post.title)}`}>
            <div style={{ padding: '0' }} className='postContent' onClick={() => handlePostClick(post)}>
              {post.image_url && (
                <img
                  src={post.image_url}
                  className='PostImage'
                  alt='PostImage'
                  style={{ width: '50px', height: '50px' }}
                />
              )}
              <p className='postTitle'>{post.title}</p>
            </div>
          </Link>
        ))}
      </div>
      {
        /*
        <div className="bottomRight">
        <button className='CreatePostBtn'>Back to Top</button>
        <button className='CreateCommunityBtn' onClick={handleCreate}>Create Community</button>
      </div>
        */
      }
    </div>
  )
}
