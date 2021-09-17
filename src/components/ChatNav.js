import React from 'react'
import '../componentcss/ChatNav.css'
import Logo from '../images/LogoSMAC.png' 
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { signOut, getAuth } from "firebase/auth";
import { useDispatch, useSelector } from 'react-redux'
import { actionCreateUser } from '../redux/actions/user'
import { Redirect } from 'react-router';
import { Dropdown } from 'react-bootstrap';
import { Link } from "react-router-dom"


function ChatNav() {
    const dispatch = useDispatch()
    const auth = getAuth();
    const user = useSelector(state => state.user)
    console.log(user)



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
                    {user?.user&&(

                        <Dropdown.Item><Link style={{color: 'black'}} to={`/profile/${user.user.refId}`}>Edit profile</Link>
                        </Dropdown.Item > 
                    )}
                    <Dropdown.Item onClick={() => {
                            signOut(auth)
                                .then(() => {
                                    // Sign-out successful.
                                    dispatch(actionCreateUser(null));
                                    // Redirect('/')
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
