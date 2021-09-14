import React from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router'


function Messages(props) {
    const channelId = props.channelId
    const messages = useSelector(state => state.messages)
    // console.log(messages)
    
    console.log(channelId)
    
    const filteredMessages = messages.filter((message) => {        
        return message.ChannelId.includes(channelId);
      });
    // console.log(filteredMessages)


    
    return (
        <div>
           {filteredMessages.map((message) => {       
       
        return <div>{message.content}</div>
        
    })}
        </div>
    )
}

export default Messages
