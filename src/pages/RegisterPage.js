import React from 'react'
import { useState } from 'react'
import Logo from '../images/LogoSMAC.png'
import '../componentcss/LoginPage.css'
import { useDispatch } from 'react-redux'
import { actionCreateUser } from '../redux/actions/user'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import "../firebase";
import { db } from "../firebase";
import { collection, addDoc } from "firebase/firestore";
import '../componentcss/RegisterPage.css'
import { Modal, Button, Form } from 'react-bootstrap'


const auth = getAuth();



function RegisterPage() {
    const [fname, setFname] = useState('')
    const [lname, setLname] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [mentor, setMentor] = useState(false)
    const [user, setUser] = useState({})
    const dispatch = useDispatch()
    function redirect_Login() {
        var tID = setTimeout(function () {
            window.location.href = "/login";
            window.clearTimeout(tID);
            // clear time out.
        }, 1000);
    }

    // Modal Popup on registration
    const [show, setShow] = useState(false);
    const [showFail, setShowFail] = useState(false);
    const handleShow = () => setShow(true);
    const handleShowFail = () => setShowFail(true)
    const handleClose = () => {
        setShow(false);
        redirect_Login()
    }

    const handleCloseFail = () => {
        setFname('')
        setLname('')
        setEmail('')
        setPassword('')
        setShowFail(false);
        
    }


    async function handleRegister(e) {
        e.preventDefault();

        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in

                addDoc(collection(db, 'users'), {
                    id: userCredential.user.uid,
                    fname: fname,
                    lname: lname,
                    name: fname + ' ' + lname,
                    email: email,
                    mentor: mentor
                })
                setUser({
                    id: userCredential.user.uid,
                    fname: fname,
                    lname: lname,
                    name: fname + ' ' + lname,
                    email: email,
                    mentor: mentor
                })

                dispatch(actionCreateUser(user))
                handleShow()

            })
            .catch((error) => {
                console.log(error);
                handleShowFail()
            });
    }



    return (
        <div className="register__page">
            {/* Logo Image Centered */}
            {/* Header */}
            <div className="register__header text-center">
                <a href="/" ><img className="header__img" src={Logo} alt="" title="Sign In Page"></img></a>
            </div >
            <br />
            <div>
                <h2 className="mb-4 Register register__text text-center">Mentorship. <br /> For Devs. By Devs. <br /> Become A S.M.A.C.'er </h2>
            </div>
            {/* Register Body Form */}
            <div className="profile__body row" >
                <div className="spacerdiv">

                </div>
                <div className="main__panel">
                    
                        <form className="form row">
                            {/* <div className="form-row"> */}
                                <div className=" form-row col  ">
                                    <label className="input__label">First Name</label>
                                    <input type="text" className="form-control" id="validationDefault01" value={fname} onChange={(e) => setFname(e.target.value)} required />
                                </div>
                                <div className="form-row col">
                                    <label className="input__label">Last Name</label>
                                    <input type="text" className="form-control" id="validationDefault02" value={lname} onChange={(e) => setLname(e.target.value)} required />
                                </div>
                            {/* </div> */}

                            {/* <div className="form-row"> */}
                                <div className="form-row col">
                                    <label className="input__label">E-Mail</label>
                                    <input type="email" className="form-control" id="validationDefault04" value={email} onChange={(e) => setEmail(e.target.value)} required />
                                </div>
                            {/* </div> */}
                            <div className="form-row">
                                <div className="form-row col">
                                    <label className="input__label">Password (6 or more characters)</label>
                                    <input type="password" className="form-control" id="validationDefault05" minLength="6" value={password}onChange={(e) => setPassword(e.target.value)} required />
                                </div>
                            </div>
                            <div className="form-row d-flex">
                                {/* <div className="form-row col"> */}
                                    <Form.Select onChange={(e) => setMentor(e.target.value)} aria-label="Default select example" className="Dropdown form-row col">
                                        <option>Account Status</option>
                                        <option value="true">Register As A Mentor - I Want To Help </option>
                                        <option value="false">Register As A Mentee - I Need Help</option>
                                    </Form.Select>
                                {/* </div> */}
                            </div>

                            <br />
                            <label className="input__label text-center mb-3">By clicking Register, you agree to abide by the Terms & Conditions of S.M.A.C. Overflow</label>


                            <button className="btn register__button col-md-12 mb-3" type="submit" onClick={(e) => { handleRegister(e) }} title="Register New User">Register</button>
                            {/* Success Modal */}

                            <Modal className="modal" size="md" show={show} onHide={handleClose}>
                                <Modal.Header className="modal__header" closeButton>
                                    <Modal.Title className="text-center modal__title">Your account has been created successfully! </Modal.Title>
                                    <br/>
                                    <Modal.Title className="text-center modal__title">Welcome, {user.name} </Modal.Title>
                                    <br/>
                                    <Button className="modal__button" variant="secondary" onClick={handleClose}>
                                        Exit
                                    </Button>
                                </Modal.Header>

                            </Modal>


                            {/* Fail Modal */}
                            <Modal className="modal" size="md" show={showFail} onHide={handleCloseFail}>
                                <Modal.Header className="modal__header" closeButton>
                                    <Modal.Title className="text-center modal__title">This E-Mail Is  Already In Use! </Modal.Title>
                                    <br/>
                                    <br/>
                                    <Button className="modal__button" variant="secondary" onClick={handleCloseFail}>
                                        Exit
                                    </Button>
                                </Modal.Header>

                            </Modal>
                            <p className="input__label text-center">Already on S.M.A.C.? <a className="Sign__In__link" href="/login" title="Sign In Page">Sign In</a></p>
                        </form>
             
                </div>

                <div className="spacerdiv">

                </div>

            </div>
            <div className="footer">
                <p className="footer__text">2021 &#169; Suvd T, McKenna L, Andrew M, Chris H -- Overflow </p>
            </div>

        </div>
    )
}

export default RegisterPage

