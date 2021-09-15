import React from 'react'
import Mentorship2 from '../images/MainSMAC.svg'
import '../componentcss/ChatNav.css'

function ChatMain() {
    return (
        <div className="ChatMain__picture">
            <p>Please Select A Mentorship Channel From The Left To Get Started</p>
            <br/>
            <img src={Mentorship2} alt="SMAC Overflow Mentorship" className="ChatMain__img"></img>
        </div>
    )
}

export default ChatMain
