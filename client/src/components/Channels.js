import React from 'react'
import '../componentcss/Channels.css'
import Channel from './Channel'

function Channels() {
    return (
        <div className="Channels">
            Channels
            <Channel title={'Capstone Project'}/>
            <Channel title={'Full Stack'}/>
            <Channel title={'backend'}/>
            <Channel title={'frontend'}/>
            <Channel title={'Developer'}/>
            <Channel title={'engineer'}/>
            <Channel title={'React'}/>

        </div>
    )
}

export default Channels
