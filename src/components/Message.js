import React from 'react'
import '../componentcss/Post.css'
import { Avatar } from '@material-ui/core'
import RelativeTime from "./RelativeTime"
import PublicIcon from '@material-ui/icons/Public';



function Message({ChannelId, UserId, content, time}) {
    return ( 
        
        <div className="post">
            <div className="post__header">
                <Avatar className="post__avatar" />
                <div className="post__info">
                    <p className="post__time text-muted"><RelativeTime date={time}/> &#8226; <PublicIcon style={{ fontSize: 16 }}/></p>
                </div>
            </div>
            <div className="post__body">
                <p className="post__body">{content}</p>
            </div>
        </div>
    )
}

export default Message