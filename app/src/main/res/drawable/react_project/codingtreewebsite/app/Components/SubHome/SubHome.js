import React, { useState, useEffect } from 'react';
import "./subhome.css";
import Contentpost from './contentpost';
import Post from './Post';
import Subcat from './Subcat';
import RightItempart1 from '../RightItems/RightItempart1';
import RightItempart2 from '../RightItems/RightItempart2';
import RightItempart3 from '../RightItems/RightItempart3';
import FrontPagePrivacyTerms from '../RightItems/frontpage-privacy-terms'
import { ArticleData } from '../../Data/ArticleData';
import Centerpost from '../SinglePostCommentPage/Centerpost';
import PostCommentPage from '../SinglePostCommentPage/PostCommentPage';
import CommentPage from '@/app/CommentPage/[id]/page';
import { FadeLoader } from "react-spinners";
import Link from 'next/link';
import Navbar from '../Navbar/Navbar';

export default function SubHome() {
  const [recentPosts, setRecentPosts] = useState([]);
  const [sortOption, setSortOption] = useState('old');
  const [displayedPosts, setDisplayedPosts] = useState(5);
  const [loadingMore, setLoadingMore] = useState(false);

  const handleSortChange = (option) => {
    setSortOption(option);
  };

  const sortedPosts = ArticleData.slice().sort((a, b) => {
    if (sortOption === 'new') {
      return new Date(b.date) - new Date(a.date);
    } else if (sortOption === 'old') {
      return new Date(a.date) - new Date(b.date);
    }
    return 0;
  });

  const handlePostClick = (post) => {
    try {
      let clickedPosts = JSON.parse(localStorage.getItem('clickedPosts')) || [];

      const existingIndex = clickedPosts.findIndex((clickedPost) => clickedPost.id === post.id);

      if (existingIndex !== -1) {
        clickedPosts.splice(existingIndex, 1);
      }

      clickedPosts.unshift(post);
      clickedPosts = clickedPosts.slice(0, 5);

      localStorage.setItem('clickedPosts', JSON.stringify(clickedPosts));
      localStorage.setItem('selectedPost', JSON.stringify(post));

      setRecentPosts(clickedPosts);
    } catch (error) {
      console.error("Error saving post to localStorage:", error);
    }
  };

  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop >=
      document.documentElement.offsetHeight - 200
    ) {
      setLoadingMore(true);

      setTimeout(() => {
        setDisplayedPosts((prevCount) => {
          const newCount = prevCount + 4;
          setLoadingMore(newCount < sortedPosts.length);

          if (!loadingMore) {
            return newCount;
          }

          return prevCount;
        });
      }, 1000);
    }
  };

  useEffect(() => {
    document.documentElement.scrollTop = 0;

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className='MainSubhome'>
      <div className='subhomeLeft'>
      </div>
      <div className='MainSubhomeCenter'>
        <Contentpost />
        <Subcat onSortChange={handleSortChange} />
        {sortedPosts.slice(0, displayedPosts).map((item) => (
          <Link href={`/CommentPage/${item.title}`} key={item.id} onClick={() => handlePostClick(item)}>
            <Post item={item} />
          </Link>
        ))}
        {loadingMore && (
          <div className="loading-spinner-wrapper">
            <FadeLoader color="white" loading={true} />
          </div>
        )}
      </div>
      <div className='subhomeright'>
        <RightItempart1/>
        <RightItempart2/>
        <FrontPagePrivacyTerms/>
        <RightItempart3/>
      </div>
    </div>
  );
}