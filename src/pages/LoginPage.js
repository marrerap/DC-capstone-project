import React from 'react'
import '../componentcss/LoginPage.css'
import Logo from '../images/LogoSMAC.png'
import Mentorship from '../images/visit-arc.svg'
import { useState } from 'react'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import "../firebase";
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
    function redirect_Main() {
        var tID = setTimeout(function () {
            window.location.href = "/chat";
            window.clearTimeout(tID);
            // clear time out.
        }, 0);
    }


    if (checked && user ){
        return redirect_Main()
    }
    return (
        <div className="login__page ">
            {/* Header */}
            <div className="login__header row">
                <div className='col-3 ' ><a href="/" title="Sign In Page"><img className="header__img img-fluid" src={Logo} alt=""></img></a></div>
                <div className='col-3'><a href="/howitworks" title="ABOUT S.M.A.C.">ABOUT S.M.A.C.</a></div>
                <div className='col-3' ><a href="/register" title="Become A Mentor">BECOME MENTOR</a></div>
                <div className='col-3' ><a href="/register" title="Register A New User"> BECOME MENTEE</a></div>
            </div >

            {/* Login Body */}
            <div className='row'>
                <h1 className='col'>Get Help From<br/>Senior Developers</h1>
                <br/>
                {/* <div className="login__body row" > */}
                    <div className=" ">
                        <img src={Mentorship} alt="SMAC Overflow Mentorship" className="col login__picture login__img img-fluid"></img>
                    {/* </div> */}
                    <form className="form col-12">
                        <legend className=" Register login__text "> Sign In </legend>
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
