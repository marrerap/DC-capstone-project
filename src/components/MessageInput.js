import React from 'react'
import { InputGroup, FormControl, Button } from 'react-bootstrap'
import SendIcon from '@material-ui/icons/Send';
import '../componentcss/MessageInput.css'

function MessageInput() {
    return (
        <div >
            <InputGroup className="mb-3" >
                <FormControl
                    placeholder="Post a message . . ."
                    aria-label="Message Input"
                    aria-describedby="basic-addon2"
                    as="textarea"
                />
                <Button className="button postbutton" id="button-addon2">
                    SEND <SendIcon/>
                </Button>
            </InputGroup>
        </div>
    )
}

export default MessageInput
