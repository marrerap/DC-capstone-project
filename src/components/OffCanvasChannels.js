import { Link } from '@material-ui/core';
import Button from '@restart/ui/esm/Button';
import React, { useState } from 'react'
import { ListGroup, Offcanvas } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle';

function OffCanvasChannels() {
    const channels = useSelector(state => state.channels)
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <div>
            <Button variant="primary" onClick={handleShow}>
                Launch
            </Button>

            <Offcanvas show={show} onHide={handleClose}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Channels</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                <div className="Channels">
            {/* <ListGroup> */}
                {channels.map((channel, id) => {
                    return  <Link key={id} className="Channel"
                    // as={Link} 
                    href={`/chat/${channel.id}`}>
                    <p className="ChannelName"><SupervisedUserCircleIcon className="SupervisedUserCircleIcon"/> {channel.name}</p>
                </Link>
                })}
            {/* </ListGroup> */}
            </div>
                </Offcanvas.Body>
            </Offcanvas>
        </div>
    )
}

export default OffCanvasChannels
