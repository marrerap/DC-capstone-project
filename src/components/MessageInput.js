import React, { useState } from 'react'
import { InputGroup, FormControl, Button } from 'react-bootstrap'
import SendIcon from '@material-ui/icons/Send';
import '../componentcss/MessageInput.css'
import { useDispatch, useSelector } from 'react-redux';
import { actionAddMessage } from '../redux/actions/messages';
import { useParams } from 'react-router'
import { doc } from "firebase/firestore";
import { db } from '../firebase'


function MessageInput() {
    const [input, setInput] = useState('');
    const dispatch = useDispatch()
    const user = useSelector( state => state.user)
    const { channelId }  = useParams()

    console.log(channelId)
    console.log("here is the current user", user)
    
    const addMessage = e => {
        e.preventDefault();
        const channelRef = doc(db, "channels", channelId)
        const userRef = doc(db, "users", user.user.refId)

        console.log (channelRef, userRef)
        dispatch(actionAddMessage(
            {
                ChannelId: channelRef,
                UserId: userRef,
                content: input,
                time: new Date()
            }
        ))
        // reset Text field
        setInput('')
    }


    return (
        <div >
            <InputGroup className="mb-3" >
                <FormControl
                    value={input} onChange={e => setInput(e.target.value)}
                    placeholder="Post a message . . ."
                    aria-label="Message Input"
                    aria-describedby="basic-addon2"
                    as="textarea"
                />
                <Button className="button postbutton" onClick={addMessage} id="button-addon2">
                    SEND <SendIcon/>
                </Button>
            </InputGroup>
        </div>
    )
}

export default MessageInput
