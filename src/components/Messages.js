import  Message  from './Message'
import React from 'react'
import { useSelector } from 'react-redux'
// import { useParams } from 'react-router'


function Messages(props) {
    const channelId = props.channelId
    const messages = useSelector(state => state.messages)
    // console.log(messages)

    

    const filteredMessages = messages.filter((message) => {
        return message.ChannelId.id === channelId;
    });
    // console.log(filteredMessages)



    return (
        <div className="messages">
            {filteredMessages.map((message, index) => {
                return <Message key={index} message={message} time={message.time.toDate()}> </Message>
            })}
        </div>
    )
}

export default Messages
