'use-client'

import { format, parse } from 'date-fns';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import "./post.css"
import Image from 'next/image'
import StackImage from "../../../ImageForPosts/stack.png"
import DataStructuresImage from "../../../ImageForCommunities/data_structures.jpg"
import showmore from "../../../ImageForReddit/icons8-dot-67.png"
import Profile from "../../../ImageForReddit/profile.png"
import upIcon from "../../../ImageForReddit/icons8-up-80.png"
import down from "../../../ImageForReddit/icons8-down-80.png"
import Commenticons from "../../../ImageForReddit/icons8-comment-50.png"
import shareicon from "../../../ImageForReddit/icons8-share-50.png"
import saveicon from "../../../ImageForReddit/icons8-save-50.png"
import Upvote from "../../../ImageForReddit/Upvote.png"
import Downvote from "../../../ImageForReddit/downVote.png"
import Link from 'next/link'
import { ArticleData } from '../../Data/ArticleData';
import PostCommentPage from '../SinglePostCommentPage/PostCommentPage';
import CommentPage from '@/app/CommentPage/[id]/page';

export default function Post({ item, onClick }) {
    const categoryName = item.categoryName; 
    const postedBy = item.author;
    const parsedDate = item.date ? new Date(item.date) : new Date(2023, 11, 4); 

    function extractYouTubeVideoId(url) {
        const match = url.match(/(?:\?|&)v=([^&]+)/);
        if (match) {
            return match[1];
        }

        const regularYouTubeMatch = url.match(/(?:\/(?:embed|v|vi|watch))?(?:\?v=)?([^&]+)/);
        if (regularYouTubeMatch) {
            return regularYouTubeMatch[1];
        }

        return null;
    }

    const YoutubeVideoId = extractYouTubeVideoId("https://www.youtube.com/watch?v=itVwVVKS2c8&t=25s");
    const YoutubeURL = `https://www.youtube.com/embed/${YoutubeVideoId}`;
    //const parsedDate = item.date ? new Date(item.date) : new Date(2023, 11, 4); // Month is 0-indexed, so 11 is December

    return (
        <div>
            <div className='PostContainer'>
                {
                    /*
                    <div className='postContainerLeftbar'>
                    <Image onClick={handleLike}
                        src={like}
                        className='profile'
                        alt="Picture of the author"
                    />
                    <p style={{ marginLeft: 9 }}>{count}</p>
                    <Image onClick={handleDislike}
                        src={Dislike}
                        className='profile'
                        alt="Picture of the author"
                    />  
                </div>
                    */

                }
                {
                    /*
                    `/CommentPage/${item.id}`
                    */
                }
                    <div className="postContainerRightbar" onClick={() => onClick && onClick()}>
                        <div style={{ display: "flex", alignItems: "center" }}>
                            <Image
                                src={item.categoryImage}
                                className='profile'
                                alt="Picture of the author"
                                width={150}
                                height={150}
                            />
                            <p style={{ marginLeft: 10, fontSize: 12, color: "#808080" }}>
                                <span style={{ color: "#ffffff" }}>{categoryName}</span> • Posted by {postedBy} on {format(parsedDate, 'MM/dd/yyyy')}
                            </p>
                        </div>
                        <p style={{ paddingTop: 15, fontSize: 15 }}>{item.title}</p>
                        {item?.image_url !== "" ?
                            <img
                                src={item?.image_url}
                                className='PostImage'
                                alt="Picture of the author"
                            /> : ""
                        }

                        {
                            /*
                            <div style={{ display: 'flex', alignItems: 'center' }}>
                            <div style={{ display: 'flex', alignItems: 'center', marginLeft: -10 }}>
                                <Image
                                    src={Commenticons}
                                    className='profile'
                                    alt="Picture of the author"
                                />
                                <p style={{ paddingLeft: 6, paddingRight: 29, color: "#808080", fontSize: 14 }}>63 Comments</p>
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                <Image
                                    src={shareicon}
                                    className='profile'
                                    alt="Picture of the author"
                                />
                                <p style={{ paddingLeft: 3, paddingRight: 29, color: "#808080", fontSize: 14 }}>Share</p>
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                <Image
                                    src={saveicon}
                                    className='profile'
                                    alt="Picture of the author"
                                />
                                <p style={{ paddingLeft: 3, paddingRight: 29, color: "#808080", fontSize: 14 }}>Save</p>
                            </div>
                            <Image
                                src={showmore}
                                className='profile'
                                alt="Picture of the author"
                            />
                        </div>
                            */
                        }
                    </div>
            </div>
        </div>
    )
}

