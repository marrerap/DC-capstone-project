import React from 'react'
import '../componentcss/Main.css'
import Header from './Header'
import Feed from './Feed'
import MessageInput from './MessageInput'
import { useParams } from 'react-router'

function Main() {
    const { channelId }  = useParams()
    return (
        <div className="MainDiv row">
            <div ><Header className="Header " channelId={channelId} /></div>
            <div className='FeedBody'><Feed className="Feed col"/></div>
            <div><MessageInput className=" MessageInput "/></div>
        </div>
    )
}

export default Main
