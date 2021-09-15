import React from 'react'
import { useParams } from 'react-router'
import '../componentcss/Feed.css'
import Messages from './Messages'


function Feed() {
    const { channelId }  = useParams()
    // console.log(id)
    return (
        <div className='messagesFeed'>
            {/* map function for messages beneath header */}
            <Messages channelId={channelId} />

        </div>
    )
}

export default Feed
