import React from 'react'
import '../componentcss/ChatNav.css'
import Logo from '../images/LogoSMAC.png' 
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { signOut, getAuth } from "firebase/auth";
import { useDispatch } from 'react-redux'
import { actionCreateUser } from '../redux/actions/user'
import { Redirect } from 'react-router';
import { Dropdown } from 'react-bootstrap';


function ChatNav() {
    const dispatch = useDispatch()
    const auth = getAuth();

    function redirect_Main() {
        var tID = setTimeout(function () {
            window.location.href = "/";
            window.clearTimeout(tID);
            // clear time out.
        }, 500);
    }



    return (
        <div className="ChatNav">
            <a href="/chat"><img className="Logo" src={Logo} alt='logo' /></a>
            <a href="/howitworks" title="How It Works">HOW IT WORKS</a>
            {/* sign out button */}


            <Dropdown className="DropdownIcon">
                <Dropdown.Toggle className="DropdownToggle" id="dropdown-basic">
                    <AccountCircleIcon className="AccountCircleIcon"/>
                </Dropdown.Toggle>
                <Dropdown.Menu>
                    <Dropdown.Item onClick={() => {
                            signOut(auth)
                                .then(() => {
                                    // Sign-out successful.
                                    dispatch(actionCreateUser(null));
                                    redirect_Main();
                                })
                                .catch((error) => {
                                    console.log(error);
                                });                           
                            
                        }} >
                            Log Out
                        </Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>

        </div>
    )
}

export default ChatNav
