import React from 'react'
import { useSelector } from 'react-redux';



function Header(props) {
    const channelId = props.channelId
    const channels = useSelector(state => state.channels)
    
    const filteredChannels = channels.filter((channel) => {        
        return channel.id.includes(channelId);
      });
    console.log(filteredChannels)


    return (
        <div>
            <p>{filteredChannels[0].name}</p>
        </div>
    )
}

export default Header
