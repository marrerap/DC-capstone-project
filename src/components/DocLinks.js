import React from 'react';
import '../componentcss/Channels.css';
import { ListGroup } from 'react-bootstrap';
import '../componentcss/Channel.css';
import DescriptionIcon from '@material-ui/icons/Description';
import { useSelector } from 'react-redux';

function Docs() {
    const docLinks = useSelector(state => state.docLinks)
    

    return (
        <div >
            <ListGroup className="Documentation">
                {docLinks.map((docLink, id) => {
                    return  <a key={id} className="Documentation"
                                href={docLink.URL} target='_blank' rel='noreferrer'>
                    <p className="DocTitle"><DescriptionIcon className="DescriptionIcon"/> {docLink.Title}</p>
                </a>
                })}
            </ListGroup>
        </div>
    )
}

export default Docs;