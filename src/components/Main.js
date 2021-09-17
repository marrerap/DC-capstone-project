import React from 'react'
import '../componentcss/Main.css'
import Header from './Header'
import Feed from './Feed'
import MessageInput from './MessageInput'
import { useParams } from 'react-router'
import OffCanvasDoc from '../components/OffCanvasDoc';
import OffCanvasChannels from '../components/OffCanvasChannels';


function Main() {
    const { channelId } = useParams()
    return (
        <div className="MainDiv ">
            <div className='row'>
                <div className='col-6' >
                    <OffCanvasChannels />
                </div>
                <div className='col-6' >
                    <OffCanvasDoc />
                </div>



            </div>


            <Header className="Header " channelId={channelId} />
            <Feed className="Feed" />
            <MessageInput className=" MessageInput " />
        </div>
    )
}

export default Main
