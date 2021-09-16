import React from 'react'
import { useSelector } from 'react-redux';



function Header(props) {
    const channelId = props.channelId
    const channels = useSelector(state => state.channels)

    const user = useSelector(state => state.user);
    
    const filteredChannels = channels.filter((channel) => {        
        return channel.id.includes(channelId);
    });
    // console.log(filteredChannels)
    if(!channelId){
    return <div>Welcome, {user.user.name} <br/> Please select a channel from the left!</div>

    }

    return (
        <div className='row'>
            <span className="Header col">{ filteredChannels[0]?.name } Help Channel</span>
        </div>
    )
}

export default Header
