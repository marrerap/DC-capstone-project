import React from 'react'
import '../componentcss/ChatNav.css'
import Logo from '../images/LogoSMAC.png' 
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

function ChatNav() {
    return (
        <div className="ChatNav">
            <img className="Logo" src={Logo} alt='logo' />
            <AccountCircleIcon className="AccountCircleIcon"/>
        </div>
    )
}

export default ChatNav
