import React from 'react'
import { useParams } from 'react-router'
import '../componentcss/Feed.css'
import FeedHeader from './FeedHeader'
import Messages from './Messages'


function Feed() {
    const { channelId }  = useParams()
    // console.log(id)
    return (
        <div>
     
            <FeedHeader />
            {/* map function for messages beneath header */}
            <Messages channelId={channelId} />

        </div>
    )
}

export default Feed
