"use client"

import "./leftside.css"
import DataStructuresImage from "../../../ImageForCommunities/data_structures.jpg"
import { format, parse } from 'date-fns';
import GraphImage from '../../../ImageForPosts/graphs.png'
import Image from 'next/image'
import showmore from "../../../ImageForReddit/icons8-dot-67.png"
import Profile from "../../../ImageForReddit/profile.png"
import upIcon from "../../../ImageForReddit/icons8-up-80.png"
import down from "../../../ImageForReddit/icons8-down-80.png"
import postImage from "../../../ImageForReddit/image.jpg"
import Upvote from "../../../ImageForReddit/Upvote.png"
import Downvote from "../../../ImageForReddit/downVote.png"
import Commenticons from "../../../ImageForReddit/icons8-comment-50.png"
import shareicon from "../../../ImageForReddit/icons8-share-50.png"
import saveicon from "../../../ImageForReddit/icons8-save-50.png"
import CommentIcon from "../../../ImageForReddit/icons8-comment-50.png"
import "../../Components/SubHome/post.css"
import { useState } from 'react'
import Comment from '../CommentDetails/Comment'
import ArticleData from '../../Data/ArticleData'
import Clipboard from 'clipboard'
import CodeSnippet from "./code-display";

export default function Centerpost({ item }) {
    const [count, setCount] = useState(11);
    const [like, setlike] = useState(upIcon);
    const [Dislike, setDislike] = useState(down);
    const [Text, SetText] = useState('');
    const [Comments, setComments] = useState([]);

    const postedBy = item && item.author ? item.author : 'Unknown Author';
    const content = item && item.content ? item.content : 'Unknown Author';
    const title = item && item.title ? item.title : 'Unknown Author';
    const parsedDate = item && item.date ? new Date(item.date) : new Date(2023, 11, 4);
    //const subredditName = 'r/DataStructures';

    const handleLike = () => {
        if (like == upIcon) {
            setlike(Upvote);
            setDislike(down);
            setCount(count + 1)
        } else {
            setlike(upIcon);
            setCount(count - 1)
        }
    }

    const handleDislike = () => {
        if (Dislike == down) {
            setDislike(Downvote)
            setlike(upIcon)
            setCount(count - 1)
        } else {
            setDislike(down);
            setCount(count + 1);
        }
    }

    const addComment = async () => {
        const comment = {
            "postid": "318312",
            "username": "Suman",
            "comment": `${Text}`,
            "profile": `${Profile}`,
            "reply": [],
        }
        setComments(Comments.concat(comment));
    }


    const handleComment = () => {
        addComment();
    }

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
                    <p style={{marginLeft:4}}>{count}</p>
                    <Image onClick={handleDislike}
                        src={Dislike}
                        className='profile'
                        alt="Picture of the author"
                    />
                </div>
                    */
                }

                <div className='postContainerRightbar'>
                    <div style={{ display: "flex", alignItems: "center" }}>
                        <h2 className="textStyle">
                            {title}
                        </h2>
                        <p style={{ marginLeft: 10, fontSize: 12, color: "#808080" }}>
                            <span style={{ color: "#ffffff" }}></span> Posted by {postedBy} on {format(parsedDate, 'MM/dd/yyyy')}
                        </p>
                    </div>

                    {item?.image_url !== "" ?
                        <img
                            src={item?.image_url}
                            className='PostImage'
                            alt="Picture of the author"
                        /> : ""
                    }

                    {item.introduction && (
                        <p className="textStyle">{item.introduction}</p>
                    )}

                    {item.subtopic1 && (
                        <>
                            <h3 className="textStyle">{item.subtopic1}</h3>
                            {item.subtopic1_description && (
                                <h2 className="textStyle">{item.subtopic1_description}</h2>
                            )}
                            <div>
                                {item.subtopic1_bullet_point1 && <p className='textPoints'>{item.subtopic1_bullet_point1}</p>}
                                {item.subtopic1_bullet_point2 && <p className='textPoints'>{item.subtopic1_bullet_point2}</p>}
                                {item.subtopic1_bullet_point3 && <p className='textPoints'>{item.subtopic1_bullet_point3}</p>}
                            </div>
                        </>
                    )}

                    {item.subtopic2 && (
                        <>
                            <h3 className="textStyle">{item.subtopic2}</h3>
                            {item.subtopic2_description && (
                                <h2 className="textStyle">{item.subtopic2_description}</h2>
                            )}
                            <div>
                                {item.subtopic2_bullet_point1 && <p className='textPoints'>{item.subtopic2_bullet_point1}</p>}
                                {item.subtopic2_bullet_point2 && <p className='textPoints'>{item.subtopic2_bullet_point2}</p>}
                                {item.subtopic2_bullet_point3 && <p className='textPoints'>{item.subtopic2_bullet_point3}</p>}
                                {item.subtopic2_bullet_point4 && <p className='textPoints'>{item.subtopic2_bullet_point4}</p>}
                            </div>
                        </>
                    )}

                    {item.code_visualization !== "" && (
                        <>
                            <h3 className="textStyle">{item.implementation || ""}</h3>
                            <CodeSnippet code_snippet={item} />
                        </>
                    )}

                    {item.subtopic3 && (
                        <>
                            <h3 className="textStyle">{item.subtopic3}</h3>
                            {item.subtopic3_description && (
                                <h2 className="textStyle" style={{ fontWeight: 'normal' }}>{item.subtopic3_description}</h2>
                            )}
                            <div>
                                <div>
                                    {item.subtopic3_bullet_point1 && <p className='textPoints'>{item.subtopic3_bullet_point1}</p>}
                                    {item.subtopic3_bullet_point2 && <p className='textPoints'>{item.subtopic3_bullet_point2}</p>}
                                    {item.subtopic3_bullet_point3 && <p className='textPoints'>{item.subtopic3_bullet_point3}</p>}
                                    {item.subtopic3_bullet_point4 && <p className='textPoints'>{item.subtopic3_bullet_point4}</p>}
                                    {item.subtopic3_bullet_point5 && <p className='textPoints'>{item.subtopic3_bullet_point5}</p>}
                                    {item.subtopic3_bullet_point6 && <p className='textPoints'>{item.subtopic3_bullet_point6}</p>}
                                </div>
                            </div>
                        </>
                    )}

                    {item.title_summary && (
                        <h3 className="textStyle">{item.title_summary}</h3>
                    )}

                    {item.summary && (
                        <p className="textStyle">{item.summary}</p>
                    )}
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
            </div>
                        */
                    }

                </div>
            </div>
            {
                /*
                <div>
                <p style={{marginTop:10 , color:"white"}}>Commnet as Gradword</p>
                <textarea placeholder='What are your thoughts?' onChange={(e)=>SetText(e.target.value)} style={{width:"90%" , height:"15vh" , fontSize:14 , fontFamily:"sans-serif" , padding:5 , marginTop:10 , borderRadius:10}}/>
                <button style={{paddingTop:4 , paddingBottom:4 , marginRight:30 , paddingRight:5 , paddingLeft:5 , cursor:'pointer'}} onClick={handleComment}>Comment</button>
            </div>
            {Comments.length !=0 ? 
            Comments.map((item)=>(
                <div>
                    <Comment item={item}/>
                    {item?.reply?.length != 0 ? 
                    <div style={{marginLeft:40}}>
                        {item?.reply?.map((item)=>(
                            <Comment item={item}/>
                        ))}
                    </div>
                    :""}
                </div>
                ))
            :""}
            <div>

            </div>
                */
            }
        </div>
    )
}
