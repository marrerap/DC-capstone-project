import React from 'react'
import '../componentcss/Channel.css'
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle';

function Channel({title}) {
    return (
        <div className="Channel">
            <p className="ChannelName"><SupervisedUserCircleIcon className="SupervisedUserCircleIcon"/> {title}</p>
        </div>
    )
}

export default Channel
