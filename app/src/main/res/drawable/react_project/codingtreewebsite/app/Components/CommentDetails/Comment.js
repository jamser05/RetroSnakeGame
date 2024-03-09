"use client"
import React ,{useState} from 'react'
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
export default function Comment({item}) {
    console.log(item,"item")
    const [count , setCount] = useState(11)
    const [like , setlike] = useState(upIcon);
    const [Dislike , setDislike] = useState(down)
    const [Show , setShow] = useState(false);
    const [Text , SetText] = useState('');
    const [Comments , setComments] = useState([]);
    console.log(item , "item.reply")
    const handleShow=()=>{
        if(Show === false){
            setShow(true)
        }else{
            setShow(false)
        }
    }
    const handleLike=()=>{
        if(like == upIcon){
            setlike(Upvote);
            setDislike(down);
            setCount(count+1)
        }else{
            setlike(upIcon);
            setCount(count-1) 
        }
    }
    const handleDislike = ()=>{
        if(Dislike == down){
            setDislike(Downvote)
            setlike(upIcon)
            setCount(count-1)
        }else{
            setDislike(down);
            setCount(count+1);
        }
    }

    const addComment = async()=>{
        const comment={
            "postid":"44444",
            "username":"Suman",
            "comment":`${Text}`,
            "profile":`${Profile}`,
            "reply":[],
        }
        item?.reply?.push(comment);
    }

    console.log(Comments , 'SDFAS')

    const handleComment=()=>{
        addComment();
    }
  return (
    <div style={{marginTop:30}}>
                <div style={{display:"flex" , alignItems:'center' }}>
                       <Image
                            src={Profile}
                            style={{width:40 , height:40 , borderRadius:"50%"}}
                            alt="Picture of the author"
                        />
                        <div>
                            <p style={{fontSize:14 , marginTop:5 , marginLeft:-3}}>{item.username}</p>
                        </div> 
                </div>
                <div>
                    <p style={{marginLeft:40}}>{item.comment}</p>
                </div>
                <div style={{display:'flex', marginTop:10 , alignItems:'center'}}>
                    <Image onClick={handleLike}
                        src={like}
                        className='profile'
                        style={{cursor:"pointer"}}
                        alt="Picture of the author"
                    />
                    <p style={{marginLeft:5}}>{count}</p>
                    <Image onClick={handleDislike}
                        src={Dislike}
                        style={{marginLeft:5 , cursor:"pointer"}}
                        className='profile'
                        alt="Picture of the author"/>
                    <div style={{display:'flex' ,alignItems:'center' , cursor:"pointer"}}>
                       <Image 
                           src={CommentIcon}
                           style={{marginLeft:5}}
                           className='profile'
                           alt="Picture of the author"/>
                        <p style={{color:"#808080" , marginLeft:5}} onClick={handleShow}>Reply</p>   
                    </div>
                    
                            
                   <p style={{marginLeft:5, paddingLeft: 3, paddingRight: 29, color: "#808080", fontSize: 14 }}>Share</p>
    

                </div>
                {Show == true ?
                <div>
                   <textarea placeholder='What are your thoughts?' onChange={(e)=>SetText(e.target.value)} style={{width:"90%" , height:"15vh" , fontSize:14 , fontFamily:"sans-serif" , padding:5 , marginTop:10 , borderRadius:10}}/>
                   <button style={{paddingTop:4 , paddingBottom:4 , marginRight:30 , paddingRight:5 , paddingLeft:5 , cursor:'pointer'}} onClick={handleComment}>Comment</button>
               </div>
                :""}
            </div>
  )
}
