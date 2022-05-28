import React from "react";
import './_sideBar.scss';
import { useDispatch } from 'react-redux';
import { MdSubscriptions, MdExitToApp, MdHome } from 'react-icons/md'
import { logout } from "../../redux/action/authaction";
import { Link } from "react-router-dom";
//side navigation bar design
export function Sidebar ({sidebar, handleToggleSidebar}) {
    const dispatch = useDispatch();
    
    const handleLogOut = () => {
        dispatch(logout())
    }
    
    return (
        <nav className={sidebar? 'sidebar open':'sidebar'} onClick={() => handleToggleSidebar(false)}>
            <Link to="/">
                <li>
                    <MdHome size={23} />
                    <span> Home </span>
                </li>
            </Link>
            <Link to="/subscriptions">
                <li>
                    <MdSubscriptions size={23} />
                    <span> Subscriptions </span>
                </li> 
            </Link>
            <hr />
            <li onClick={handleLogOut}>
                <MdExitToApp size={23} />
                <span> Log Out </span>
            </li>
            <hr />
        </nav>
    );
}