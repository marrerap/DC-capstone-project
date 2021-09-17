import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import React, { useState } from 'react';
import { ListGroup, Offcanvas } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle';
import '../componentcss/OffCanvasMain.css';

function OffCanvasChannels() {
    const channels = useSelector(state => state.channels)
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <div className='OffCanvasChannels'>
            <Button className='LaunchBtn' style={{ backgroundColor: 'rgba(255, 255, 255, 0.357)'}} varient='light' onClick={handleShow}>
                Launch
            </Button>

            <Offcanvas className="OffCanvasMain" show={show} onHide={handleClose}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title className="Offcanvas-Title">Channels</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                <div className="Channels">
            <ListGroup>
                {channels.map((channel, id) => {
                    return  <Link key={id} className="Channel"
                    
                    to={`/chat/${channel.id}`}>
                    <p className="ChannelName"><SupervisedUserCircleIcon className="SupervisedUserCircleIcon"/> {channel.name}</p>
                </Link>
                })}
            </ListGroup>
            </div>
                </Offcanvas.Body>
            </Offcanvas>
        </div>
    )
}

export default OffCanvasChannels
