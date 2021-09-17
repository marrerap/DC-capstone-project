import React from 'react'
import '../componentcss/ChatNav.css'
import Logo from '../images/LogoSMAC.png' 
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { signOut, getAuth } from "firebase/auth";
import { useDispatch, useSelector } from 'react-redux'
import { actionCreateUser } from '../redux/actions/user'
import { Dropdown } from 'react-bootstrap';
import { Link } from "react-router-dom"


function ChatNav() {
    const dispatch = useDispatch()
    const auth = getAuth();
    const user = useSelector(state => state.user)
    // console.log(user)

    function redirect_Main() {
        var tID = setTimeout(function () {
            window.location.href = "/";
            window.clearTimeout(tID);
            // clear time out.
        }, 0);
    }



    return (
        <div className="ChatNav row">
            <div className='col-5' >
                 <a href="/chat"><img className="Logo img-fluid" src={Logo} alt='logo' /></a>
            </div>
           
            <div className='col-2'>
                <a href="/howitworks" title="ABOUT S.M.A.C.">ABOUT S.M.A.C.</a>
            </div>
            
            
            {/* sign out button */}

            <div className='col-5 d-flex justify-content-end' >
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
