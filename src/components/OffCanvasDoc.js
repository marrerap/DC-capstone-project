import Button from '@restart/ui/esm/Button';
import React, { useState } from 'react'
import { ListGroup, Offcanvas } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import '../componentcss/OffCanvasMain.css'
import DescriptionIcon from '@material-ui/icons/Description';
function OffCanvasDoc() {
    const docLinks = useSelector(state => state.docLinks)
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <div >
            <Button variant="primary" onClick={handleShow}>
                Documents
            </Button>
            <Offcanvas className="OffCanvasMain" placement='end' show={show} onHide={handleClose}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title className="Offcanvas-Title">Documentation</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <div className="Channels">
                        <ListGroup>
                            {docLinks.map((docLink, id) => {
                                return <a key={id} className="Documentation"
                                    href={docLink.URL} target='_blank' rel='noreferrer'>
                                    <p className="DocTitle"><DescriptionIcon className="DescriptionIcon" /> {docLink.Title}</p>
                                </a>
                            })}
                        </ListGroup>
                    </div>
                </Offcanvas.Body>
            </Offcanvas>
        </div>
    )
}

export default OffCanvasDoc