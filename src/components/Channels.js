import React from 'react'
import '../componentcss/Channels.css'
import { ListGroup } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import '../componentcss/Channel.css'
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle';
import { useSelector } from 'react-redux'

function Channels() {
    const channels = useSelector(state => state.channels)
    // console.log(channels)

    return (
        <div className='row'>
            <ListGroup className="Channels">
                {channels.map((channel, id) => {
                    return  <Link key={id} className="Channel col"
                                to={`/chat/${channel.id}`}>
                    <span className="ChannelName"><SupervisedUserCircleIcon className="SupervisedUserCircleIcon"/> {channel.name}</span>
                </Link>
                })}
            </ListGroup>
        </div>
    )
}

export default Channels



