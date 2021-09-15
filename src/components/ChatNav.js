import React from 'react'
import '../componentcss/ChatNav.css'
import Logo from '../images/LogoSMAC.png' 
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { signOut, getAuth } from "firebase/auth";
import { useDispatch } from 'react-redux'
import { actionCreateUser } from '../redux/actions/user'
import { Redirect } from 'react-router';

function ChatNav() {
    const dispatch = useDispatch()
    const auth = getAuth();



    return (
        <div className="ChatNav">
            <a href="/chat"><img className="Logo" src={Logo} alt='logo' /></a>
            <a href="/howitworks" title="How It Works">HOW IT WORKS</a>
            {/* sign out button */}
            <button className="logout__button" title="Log Out User"
                        
                        onClick={() => {
                            signOut(auth)
                                .then(() => {
                                    // Sign-out successful.
                                    dispatch(actionCreateUser(null));
                                    // Redirect('/')
                                })
                                .catch((error) => {
                                    console.log(error);
                                });
                            
                            
                        }}
                    >
                        Log Out
                    </button>
            <AccountCircleIcon className="AccountCircleIcon"/>
        </div>
    )
}

export default ChatNav
