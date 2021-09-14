import React from 'react'
import { useSelector } from 'react-redux';



function Header(props) {
    const channelId = props.channelId
    const channels = useSelector(state => state.channels)
    
    const filteredChannels = channels.filter((channel) => {        
        return channel.id.includes(channelId);
      });
    console.log(filteredChannels)
      if(!channelId){
          return <div>Welcome,<br/> Please select a channel from the left!</div>
      }

    return (
        <div>
            <p>{ filteredChannels[0].name }</p>
        </div>
    )
}

export default Header
