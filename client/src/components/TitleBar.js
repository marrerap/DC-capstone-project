import React from 'react'
import '../componentcss/TitleBar.css'
import Logo from '../images/LogoSMAC.png' 
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

function TitleBar() {
    return (
        <div className="TitleBar">
            <img className="Logo" src={Logo} alt='logo' />
            <AccountCircleIcon className="AccountCircleIcon"/>
        </div>
    )
}

export default TitleBar
