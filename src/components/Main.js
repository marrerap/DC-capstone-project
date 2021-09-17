import React from 'react'
import '../componentcss/Main.css'
import Header from './Header'
import Feed from './Feed'
import MessageInput from './MessageInput'
import { useParams } from 'react-router'
import OffCanvasDoc from '../components/OffCanvasDoc';
import OffCanvasChannels from '../components/OffCanvasChannels';


function Main() {
    const { channelId }  = useParams()
    return (
        <div className="MainDiv row justify-content-center">
            <div className='d-flex flex-row justify-content-around'>
                <OffCanvasChannels className='col-6'/>
            
                <OffCanvasDoc className='col-6' />
            </div>
            <div ><Header className="Header " channelId={channelId} /></div>
            <div className='FeedBody col-10'><Feed className="Feed"/></div>
            <div className=' col-9' ><MessageInput  className=" MessageInput "/></div>
        </div>
    )
}

export default Main
