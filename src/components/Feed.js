import React from 'react'
import '../componentcss/Feed.css'
import FeedHeader from './FeedHeader'
import Messages from './Messages'


function Feed() {
    return (
        <div>
            Feed
            <FeedHeader />
            {/* map function for messages beneath header */}
            <Messages content="hey guys whats up" />
            <Messages content="hey guys whats up" />
            <Messages content="hey guys whats up" />

        </div>
    )
}

export default Feed
