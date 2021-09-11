import React from 'react'
import '../componentcss/Main.css'
import Header from './Header'
import Feed from './Feed'
import MessageInput from './MessageInput'

function Main() {
    return (
        <div className="MainDiv row">
            <div><Header className="Header" /></div>
            <div><Feed className="Feed "/></div>
            <div><MessageInput className="MessageInput "/></div>
        </div>
    )
}

export default Main
