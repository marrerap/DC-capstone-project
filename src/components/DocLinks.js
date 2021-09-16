import React from 'react';
import '../componentcss/Channels.css';
import { ListGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../componentcss/Channel.css';
import DescriptionIcon from '@material-ui/icons/Description';
import { useSelector } from 'react-redux';

function Docs() {
    const docLinks = useSelector(state => state.docLinks)
    console.log("Here are the docs", docLinks)
    console.log(docLinks[0].URL)

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