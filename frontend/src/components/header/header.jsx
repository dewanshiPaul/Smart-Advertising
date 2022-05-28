import React, { useState } from "react";
import './_header.scss';

import { FaBars } from 'react-icons/fa';
import { AiOutlineSearch } from 'react-icons/ai';
import { MdNotifications, MdApps } from 'react-icons/md';
import YOUTUBELOGO from './youtube_logo.jpg'; 
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
//design of header section
//props for side bar to close and open on click
export function Header({handleToggleSidebar}) {
    const[input,setInput] = useState('');

    const handleInput = (e) => {
        setInput(e.target.value);
    }

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate(`/search/${input}`)
    }

    const user = useSelector(state => state.auth.user);

    return (
        <div className="header">
            <FaBars className="header_menu" size={26} onClick={()=>handleToggleSidebar()}/>
            <img src={YOUTUBELOGO} alt='logo' className="header_logo" />
            <form onSubmit={handleSubmit}>
                <input type='text' placeholder='Search' value={input} onChange={handleInput}/>
                <button type='submit'>
                    <AiOutlineSearch size={22}/>
                </button>
            </form>
            <div className="header_icons">
                <MdNotifications size={28}/>
                <MdApps/>
                <img src={ user?.displayPic } alt='avatar' />
                {/* <img src={ user.profile.displayPic } alt='avatar' /> */}
            </div>
        </div>
    );
}