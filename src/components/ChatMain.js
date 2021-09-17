import React from 'react'
import Mentorship2 from '../images/MainSMAC.svg'
import '../componentcss/ChatNav.css'
import OffCanvasChannels from './OffCanvasChannels'

function ChatMain() {
    return (
        <div className="ChatMain__picture">
            <h4>Select A Channel Below</h4>
            <OffCanvasChannels/>
            <br/>
            <img src={Mentorship2} alt="SMAC Overflow Mentorship" className="ChatMain__img img-fluid"></img>
        </div>
    )
}

export default ChatMain
