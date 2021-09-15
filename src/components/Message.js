import React from 'react'
import '../componentcss/Message.css'
import { Avatar } from '@material-ui/core'
import RelativeTime from "./RelativeTime"
import { useSelector } from 'react-redux';



function Message({message, time}) {
    const user = useSelector(state => state.user);
    console.log(user)
    console.log(message)
    let cssClass = 'message';
    if (user.user.id === message.user.id ) {
        cssClass += " message__outgoing"
    }




    return ( 
        
        <div className={cssClass}>
            <div className="message__header">
                <Avatar className="Avatar message__avatar" />
                <div className="message__info">
                    <p className="message__name">{user.user.name} </p>
                    <p className="message__time">{user.user.mentor? 'Mentor': 'Mentee'}  &#8226;  Posted <RelativeTime date={time}/></p>
                </div>
            </div>
            <br/>
            <div className="message__body">
                <p className="message__body">{message.content}</p>
            </div>
        </div>
    )
}

export default Message