import React from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router'

function Messages() {
    const messages = useSelector(state => state.messages)
    // console.log(messages)
    

    return (
        <div>
           {messages.map((message) => {
               const channelMessage = message.ChannelId._key.path.segments[6]
        // if( channelMessage === id){
        //     return message
        // }
        return <div>{message.content}</div>
    })}
        </div>
    )
}

export default Messages
