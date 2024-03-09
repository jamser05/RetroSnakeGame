import React from 'react'
import "./post.css"
import Image from 'next/image'
import BestIcon from "../../../ImageForReddit/icons8-rocket-64.png"
import HotIcon from "../../../ImageForReddit/icons8-hot-30.png"
import Newicon from "../../../ImageForReddit/icons8-new-50.png"
import Topicon from "../../../ImageForReddit/icons8-up-80.png"
import showmore from "../../../ImageForReddit/icons8-dot-67.png"
import Card from "../../../ImageForReddit/card.png"

export default function Subcat({ onSortChange }) {
    const handleSortChange = (option) => {
        onSortChange(option);
    };

    return (
        <div className="Icons">
            <div style={{ display: 'flex' }}>
                <div className='PostTopItemsContainer' onClick={() => handleSortChange('new')}>
                    <p style={{ marginTop: 7, marginLeft: 15, fontSize: 13 }}>Latest</p>
                </div>
                <div className='PostTopItemsContainer' onClick={() => handleSortChange('old')}>

                    <p style={{ marginTop: 7, paddingLeft: 15, fontSize: 13 }}>Oldest</p>
                </div>

                {
                    /*
                    <Image
                    src={showmore}
                    className='moreIcons'
                    alt="Picture of the author"
                />

                </div>
                <div>
                    {/*
                    <Image
                        src={Card}
                        className='Cardicons'
                        alt="Picture of the author"
                    />
                    */
                }
            </div>
        </div>
    )
}
