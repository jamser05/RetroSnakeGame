"use client"
import React, { useState } from 'react'
import "./createpost.css"
import Navbar from '../Components/Navbar/Navbar'
import Image from 'next/image'
import Circle from "../../ImageForReddit/circle.png"
import PostIcon from "../../ImageForReddit/post.png"
import ImageORvideoIcon from "../../ImageForReddit/icons8-image-50.png"
import LinkIcon from "../../ImageForReddit/link.png"
import VideoIcon from "../../ImageForReddit/video.png"
import PollIcon from "../../ImageForReddit/poll.png"
import SearchIcon from "../../ImageForReddit/search.png"
import ProfileImage from "../../ImageForReddit/profile.png"
import { ArticleData } from '../Data/ArticleData'
import CommunityProfileContainer from '../Components/CommunityProfileComponent/CommunityProfileContainer'

export default function page() {
    const [None, setNone] = useState('block');
    const [option1None, setoption1None] = useState('none');
    const [option2None, setoption2None] = useState('none');
    const [showlinkBox , setshowlinkBox] = useState('none');
    const [showImageandVideoBox , setshowImageandVideoBox] = useState('none')
    const [showTextBox , setshowTextBox] = useState('block')
    const [show , setShow] = useState(false);
    const [Title ,setTitle] = useState('');
    const [optionText , setoptionText] = useState('');
    const [Selectedfile , setSelectedfile] = useState(null);
    const [previewURL , setPreviewURL] = useState(null)
    const [URLL , setURLL] = useState('');

    console.log(URLL , 'URL');
    console.log(Title , 'Title')
    const handleoption =()=>{
        if(None == 'none'){
            setNone('block');
            setshowlinkBox('none');
            setshowImageandVideoBox('none')
            setshowTextBox('block')
            if(option1None == 'block'){
                setoption1None('none')
            }
            if(option2None == 'block'){
                setoption2None('none')
            }
        }else{
            setNone('none')
        }
    }

    const handleUploadClick = ()=>{
        console.log("Console.log")
    }

    const handleoption1 =()=>{
        if(option1None == 'none'){
            setoption1None('block');
            setshowlinkBox('none');
            setshowImageandVideoBox('block')
            setshowTextBox('none')
            if(None == 'block'){
                setNone('none')
            }
            if(option2None == 'block'){
                setoption2None('none')
            }
        }else{
            setoption1None('none')
        }
    }

    const handleshow = ()=>{
        if(show === false){
            setShow(true);
        }else{
            setShow(false)
        }
    }

    const handleFileChange=(e)=>{
        const file = e.target.files[0];
        setSelectedfile(file);
        if(file){
            const fileURL = URL.createObjectURL(file);
            setPreviewURL(fileURL);
        }

    }

    const handleoption2 =()=>{
        if(option2None == 'none'){
            setoption2None('block');
            setshowlinkBox('block');
            setshowImageandVideoBox('none')
            setshowTextBox('none')
            if(option1None == 'block'){
                setoption1None('none')
            }
            if(None == 'block'){
                setNone('none')
            }
        }else{
            setoption2None('none')
        }
    }

    const handleShowCommunity=(item)=>{
        console.log(item)
    }
    const [Search , setSearch] = useState('');
    console.log(Search , "search")
    return (
        <di>
            <Navbar />
            <div style={{ display: 'flex', alignItems: "center", justifyContent: 'space-around' }}>
                <div className='CreatePostLeft'>

                </div>
                <div className='CreatePostCenter'>
                    <div style={{ display: 'flex', marginTop: 50, justifyContent: 'space-between' }}>
                        <p style={{ fontSize: 17, fontWeight: 400, color: "#d7dadc" }}>Create a post</p>
                        <p style={{ color: "#d7dadc", fontSize: 13 }}>DRAFTS</p>
                    </div>
                    
                    {show != false ? "" :
                    <div className='chooseCommunity' onClick={handleshow}>
                        <Image src={Circle} className='CircleIcon' alt='' />
                        <p className='communityText'>Choose a community</p>
                    </div>}

                    {show != false ?
                    <div style={{marginTop:15 , marginLeft:-5}} >
                        <div style={{display:"flex" , alignItems:"center"}}>
                           <Image onClick={handleshow} src={SearchIcon} className='CircleIcon' alt='' />
                           <input style={{height:20 , padding:5 ,border:"none" , backgroundColor:"black", outline:"none"}} onChange={(e)=>setSearch(e.target.value)} placeholder='Search communities'/>
                        </div>
                        <div style={{marginLeft:35  , zIndex:1 , backgroundColor:"black" , padding:10 , marginLeft:0 , position:"absolute" , height:350 , width:300 , overflow:"hidden" , overflowY:"scroll"}}> 
                            <p style={{color:"#808080" , fontSize:11 , marginTop:10}}>YOUR PROFILE</p>
                            <div style={{display:'flex',marginTop:6, alignItems:"center"}}>
                               <Image onClick={handleshow} src={ProfileImage} className='profileIcons' alt='' />
                                <p style={{color:"#dedada"}}>u/Gradworld</p>
                            </div>
                            <p style={{color:"#808080" , fontSize:12 , marginTop:10}}>YOUR COMMUNITIES</p>
                            <div>
                                {ArticleData.map((item)=>(
                                    <div onClick={()=>handleShowCommunity(item)}>
                                        <CommunityProfileContainer item={item}/>
                                    </div>
                                 ))}  
                            </div>
                        </div>
                    </div>:""}
                    <div className='ItemsContainerInCreatePage'>
                        <div onClick={handleoption}>
                            <div style={{ display: "flex", alignItems: 'center' }}>
                                <Image src={PostIcon} className='ItemsContainerInCreatePageIcon' alt='' />
                                <p className='communityText'>Post</p>
                            </div>
                            <div style={{backgroundColor:"white" , width:200 , marginLeft:-40 , height:2 , marginTop:15 ,display:`${None}`}}></div>
                        </div>
                        <div onClick={handleoption1}>
                            <div style={{ display: "flex", alignItems: 'center' }}>
                                <Image src={ImageORvideoIcon} className='ItemsContainerInCreatePageIcon' alt='' />
                                <p className='communityText'>Image & Video</p>
                            </div>
                            <div style={{backgroundColor:"white" , width:200 , marginLeft:-40 , height:2 , marginTop:15 ,display:`${option1None}`}}></div>
                        </div>

                        <div onClick={handleoption2}>
                            <div style={{ display: "flex", alignItems: 'center' }}>
                                <Image src={LinkIcon} className='ItemsContainerInCreatePageIcon' alt='' />
                                <p className='communityText'>Link</p>
                            </div>
                            <div style={{backgroundColor:"white" , width:200 , marginLeft:-40 , height:2 , marginTop:15 , display:`${option2None}`}}></div>
                        </div>
                        <div>
                            <div style={{ display: "flex", alignItems: 'center' }}>
                                <Image src={PollIcon} className='ItemsContainerInCreatePageIcon' alt='' />
                                <p className='communityText'>Poll</p>
                            </div>
                        </div>
                    </div>

                    <div style={{display:`${showTextBox}`}}>
                        <div style={{ marginTop: 10 }}>
                            <input onChange={(e)=>setTitle(e.target.value)} placeholder='Title' className='CreatePostTitle' />
                        </div>

                        <div className='writingContainer'>
                            <div style={{ display: "flex", alignItems: 'center', marginTop: 4, marginBottom: 10 }}>
                                <p style={{ fontWeight: '800', fontSize: 20 }}>B</p>
                                <Image src={VideoIcon} style={{ cursor: 'pointer', marginLeft: 16 }} className='ItemsContainerInCreatePageIcon' alt='' />
                            </div>
                            <textarea onChange={(e)=>setoptionText(e.target.value)} placeholder='Text (option)' className='WriteAContent' />
                        </div>
                    </div>

                    {previewURL != null ?
                    (<div>
                        {Selectedfile.type.startsWith('image') ?
                        (
                        <div>
                            <img src={previewURL} style={{width:"700px" , height:"500px"}} alt='previewsURL'/>
                        </div>    
                        ) :(
                            <div>
                                <video controls style={{maxWidth:"100%" , maxHeight:"300px"}}>
                                   <source src={previewURL} type={Selectedfile.type}/>
                               </video>
                            </div>
                        )}
                    </div>)
                    :<div style={{display:`${showImageandVideoBox}`}}> 
                        
                    <div style={{ display: "flex",marginLeft:280, alignItems: 'center', marginTop: 104, marginBottom: 10 }}>
                        <p style={{ fontSize: 20 }}>Drag and drop image</p>
                        <label htmlFor="file" style={{cursor:'pointer' , padding:5,borderRadius:30,backgroundColor:"black" , border:"1px solid white" , paddingRight:40 , marginLeft:30}}>Upload</label>
                        <input id="file" type="file" style={{display:"none"}} onChange={handleFileChange}/>
                        <button style={{cursor:'pointer' , paddingTop:5 , paddingBottom:5, marginLeft:30 , paddingLeft:40 ,borderRadius:30 , backgroundColor:"black" , border:"1 solid white", paddingRight:40 , display:"none"}} onClick={handleUploadClick}>Upload</button>
                    </div>

                </div>}

                    <div style={{display:`${showlinkBox}`}}>
                        <div style={{ marginTop: 10 }}>
                            <input placeholder='Title' onChange={(e)=>setTitle(e.target.value)} className='CreatePostTitle' />
                        </div>

                        <div className='writingContainer' style={{marginTop:10}}>
                            <textarea onChange={(e)=>setURLL(e.target.value)} placeholder='URL' className='WriteAURL' />
                        </div>
                    </div>
                    <div>
                        <button style={{paddingLeft:40 , paddingRight:40 , paddingTop:4 , paddingBottom:4}} onClick={handleUploadClick}>Post</button>
                    </div>
                </div>
                <div className='CreatePostRight'>

                </div>
            </div>
        </di>
    )
}
