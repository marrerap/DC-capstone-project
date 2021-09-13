import React from 'react'
import '../componentcss/ChatNav.css'
import Logo from '../images/LogoSMAC.png' 
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { signOut, getAuth } from "firebase/auth";
import { useDispatch } from 'react-redux'
import { actionCreateUser } from '../redux/actions/user'

function ChatNav() {
    const dispatch = useDispatch()
    const auth = getAuth();



    return (
        <div className="ChatNav">
            <img className="Logo" src={Logo} alt='logo' />
            {/* sign out button */}
            <button className="logout__button" title="Log Out User"
                        
                        onClick={() => {
                            signOut(auth)
                                .then(() => {
                                    // Sign-out successful.
                                    dispatch(actionCreateUser(null));
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