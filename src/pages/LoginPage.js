import React from 'react'
import '../componentcss/LoginPage.css'
import Logo from '../images/LogoSMAC.png'
import Mentorship from '../images/visit-arc.svg'
import { useState } from 'react'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import "../firebase";
import { Redirect } from 'react-router'
import { useSelector } from 'react-redux'

import { Modal, Button } from 'react-bootstrap'


const auth = getAuth();


function LoginPage(props) {
    
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const {user, checked } = useSelector(state => state.user)

    // modal
    const [show, setShow] = useState(false);
    const handleShow = () => setShow(true);
    const handleClose = () => {
        setEmail('')
        setPassword('')
        setShow(false);

        
    }



    async function handleLogin(e) {
        e.preventDefault();
        
        signInWithEmailAndPassword(auth, email, password)
            
        .catch((error)=>{
            handleShow()
            console.log(error)
        })
    }

    if (checked && user ){
        return <Redirect to="/chat" />
    }
    return (
        <div className="login__page">
            {/* Header */}
            <div className="login__header">
                <div><a href="/" title="Sign In Page"><img className="header__img" src={Logo} alt=""></img></a></div>
                <div><a href="/howitworks" title="How It Works">HOW IT WORKS</a></div>
                <div><a href="/register" title="Become A Mentor">BECOME A MENTOR</a></div>
                <div><a href="/register" title="Register A New User"><button className="register__btn" >BECOME A MENTEE</button></a></div>
            </div >

            {/* Login Body */}
            <div>
                <h1>Get Help From<br/>Senior Developers</h1>
                <br/>
                <div className="login__body" >
                    <div className="login__picture">
                        <img src={Mentorship} alt="SMAC Overflow Mentorship" className="login__img"></img>
                    </div>
                    <form className="form">
                        <legend className="col-md-12 mb-3 Register login__text "> Sign In </legend>
                        <div className="form-row">
                            <div className="col-md-12 mb-3">
                                <input type="email" className="login__form-control" id="validationDefault01" title="Please Enter Your E-Mail" value={email} placeholder=" E-Mail" onChange={(e) => setEmail(e.target.value)} required />
                            </div>
                            <div className="col-md-12 mb-3">
                                <input type="password" className="login__form-control" id="validationDefault02" title="Please Enter Your Password"  value={password} placeholder=" Password" onChange={(e) => setPassword(e.target.value)} required />
                            </div>
                            <a className="forgot__password"  href="/register"><p className="forgot__password" title="Register A New User">Forgot Password?</p></a>
                            <button className="btn login__button col-md-12 mb-3" type="submit" onClick={(e) => { handleLogin(e) }} title="Sign In" > Sign In </button>
                            <Modal className="modal" size="md" show={show} onHide={handleClose}>
                                <Modal.Header className="modal__header" closeButton>
                                    <Modal.Title className="text-center modal__title">Incorrect E-Mail or Password</Modal.Title>
                                    <br/>
                                    <Modal.Title className="text-center modal__title">Please try again.</Modal.Title>
                                    <br/>
                                    <Button className="modal__button" variant="secondary" onClick={handleClose}>
                                        Exit
                                    </Button>
                                </Modal.Header>


                                
                            </Modal>
                        </div>
                    </form>
                </div>
            </div>
            <h4>Need Help?  You've Found The Right Place.</h4>
        </div>
    )
}

export default LoginPage
