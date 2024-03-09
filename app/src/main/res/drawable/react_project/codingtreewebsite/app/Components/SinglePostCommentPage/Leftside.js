import React from 'react'
import "./leftside.css"
import Profile from "../../../ImageForReddit/profile.png"
import Coverimage from "../../../ImageForReddit/home-banner.png"
import Image from 'next/image'
import { ArticleData } from '@/app/Data/ArticleData'
import Link from 'next/link';

export default function leftside({ item }) {
    const relatedArticles = ArticleData.filter(article => article.categoryName === item.categoryName);

    const handlePostClick = (post) => {
        localStorage.setItem('selectedPost', JSON.stringify(post));
        window.location.href = `/CommentPage/${post.title}`;
    };

    return (
        <div>
            <div className='RightbarItemForCommentPage'>
                <p style={{ color: "#808080" }}>About Article Category</p>
                <div style={{ display: 'flex', alignItems: "center" }}>
                </div>

                <p className='communityTextContainerComment'>{item.categoryName}</p>
                <p style={{ color: "#D7DADC", marginTop: 10 }}>{item.about_article}</p>

                <div style={{ display: 'flex', alignItems: 'center', marginTop: 39, justifyContent: "space-around" }}>
                    {
                        /*
                        <div>
                        <p>61.5K</p>
                        <p style={{fontSize:11 , color:"#808080"}}>Curses</p>
                    </div>
                    <div>
                        <p>3.6k</p>
                        <p style={{fontSize:11 , color:"#808080"}}>Causing Troble</p>
                    </div>
                    <div>
                        <p>Top 5%</p>
                        <p style={{fontSize:11 , color:"#808080"}}>Ranked by Size</p>
                    </div>
                        */
                    }


                </div>
                {
                    /*
                    <button className='CreatePostBtn'>Join</button>
                                <p style={{fontSize:"13px" , marginLeft:20 , marginTop:35 , paddingBottom:20 , cursor:'pointer'}}>COMMUNITY OPTIONS</p>
        
                    */
                }

                <div>
                </div>
            </div>


            <div className='RightbarItemForCommentPage' style={{ marginTop: 20 }}>
                <p style={{ color: "#808080" }}>Related Articles</p>
                {relatedArticles.map(relatedArticle => (
                    <Link key={relatedArticle.id} href={`/CommentPage/${relatedArticle.title}`}>
                        <div className="postContent" onClick={() => handlePostClick(relatedArticle)}>
                            {relatedArticle?.image_url !== "" ?
                                <img
                                    src={relatedArticle?.image_url}
                                    className='PostImage'
                                    alt="Picture of the author"
                                    style={{ width: '50px', height: '50px' }}
                                /> : ""
                            }
                            <p className='postTitle'>{relatedArticle.title}</p>
                        </div>
                    </Link>
                ))}

                {
                    /*
                    <div>
                    <p className='textPoints'>1. Be nice</p>
                    <p className='textPoints'>2. JJK related content only</p>
                    <p className='textPoints'>3. Regrading leaks</p>
                    <p className='textPoints'>4. Source your ars unless it's OC</p>
                    <p className='textPoints'>5. No reposts</p>
                </div>
                    */
                }


            </div>
        </div>
    )
}
