import React from 'react'
import '../componentcss/Main.css'
import Feed from './Feed'
import MessageInput from './MessageInput'
import { useParams } from 'react-router'
import HeaderDashboard from './HeaderDashboard'

function MainDashboard() {
    const { channelId }  = useParams()
    return (
        <div className="MainDiv row">
            <div><HeaderDashboard className="Header" channelId={channelId} /></div>
            
        </div>
    )
}

export default MainDashboard
