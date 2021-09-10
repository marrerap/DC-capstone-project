import React from 'react'
import '../componentcss/TitleBar.css'
import Logo from '../images/LogoSMAC.png' 

function TitleBar() {
    return (
        <div className="TitleBar">
            <img className="Logo" src={Logo} alt='logo' />
            <span>S.M.A.C. Overflow</span>
            <img src="" alt='user' />
        </div>
    )
}

export default TitleBar
