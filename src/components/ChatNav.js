import React from 'react'
import '../componentcss/ChatNav.css'
import Logo from '../images/LogoSMAC.png' 
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { signOut, getAuth } from "firebase/auth";
import { useDispatch } from 'react-redux'
import { actionCreateUser } from '../redux/actions/user'
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
        <div className="ChatNav row">
            <div className='col-5' >
                 <a href="/chat"><img className="Logo img-fluid" src={Logo} alt='logo' /></a>
            </div>
           
            <div className='col-2'>
                <a href="/howitworks" title="How It Works">HOW IT WORKS</a>
            </div>
            
            
            {/* sign out button */}

            <div className='col-5' >
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
            

        </div>
    )
}

export default ChatNav
