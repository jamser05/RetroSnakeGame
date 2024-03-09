'use client'

import React, { useEffect, useState } from 'react';
import PostCommentPage from '@/app/Components/SinglePostCommentPage/PostCommentPage';
import { ArticleData } from '@/app/Data/ArticleData';

export default function CommentPage() {
  const [selectedPost, setSelectedPost] = useState(null);

  useEffect(() => {
    const storedPost = localStorage.getItem('selectedPost');

    if (storedPost) {
      const post = JSON.parse(storedPost);

      if (post) {
        setSelectedPost(post);
      } else {
        console.error('Error parsing the stored post.');
      }
    }
  }, []);

  return (
    <div>
      {selectedPost ? <PostCommentPage item={selectedPost} /> : null}
    </div>
  );
}