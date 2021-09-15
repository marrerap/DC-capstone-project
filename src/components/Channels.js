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
        <div >
            <ListGroup className="Channels">
                {channels.map((channel, id) => {
                    return  <Link key={id} className="Channel"
                                to={`/chat/${channel.id}`}>
                    <p className="ChannelName"><SupervisedUserCircleIcon className="SupervisedUserCircleIcon"/> {channel.name}</p>
                </Link>
                })}
            </ListGroup>
        </div>
    )
}

export default Channels



