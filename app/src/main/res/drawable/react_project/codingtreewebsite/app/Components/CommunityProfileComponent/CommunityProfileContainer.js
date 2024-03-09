import React from 'react'
import ProfileImage from "../../../ImageForReddit/profile.png"
import Image from 'next/image'
export default function CommunityProfileContainer({item}) {
  return (
    <div>
        <div style={{display:'flex',cursor:'pointer',marginTop:6, alignItems:"center"}}>
            <img src={item.image_url} className='profileIcons'style={{borderRadius:"50%" , margin:5}} alt='' />
            <p style={{color:"#dedada"}}>r/{item.username}</p>
        </div>
    </div>
  )
}
