import React from 'react'
import '../componentcss/Channels.css'
import Channel from './Channel'



function Channels() {



    return (
        <div className="Channels">
            <h2>Help Channels</h2>
            <Channel title={'React'}/>
            <Channel title={'JavaScript'}/>
            <Channel title={'NodeJS'}/>
            <Channel title={'PostgreSQL'}/>
            <Channel title={'Python'}/>
            <Channel title={'Data Structures & Algorithms'}/>

        </div>
    )
}

export default Channels
