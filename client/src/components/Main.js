import React from 'react'
import '../componentcss/Main.css'
import Header from './Header'
import Feed from './Feed'
import MessageInput from './MessageInput'

function Main() {
    return (
        <div>
            <Header className="Header" />
            <Feed className="Feed"/>
            <MessageInput className="MessageInput"/>
        </div>
    )
}

export default Main
