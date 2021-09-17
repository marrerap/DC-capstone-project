import React from 'react'
import { useParams } from 'react-router'
import '../componentcss/Feed.css'
import Messages from './Messages'


function Feed() {
    const { channelId }  = useParams()
    // console.log(id)
    // map function for messages beneath header
    return (
        <Messages  channelId={channelId} />
    )
}

export default Feed
