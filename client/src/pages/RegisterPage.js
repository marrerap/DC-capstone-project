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
import { Modal, Button, Dropdown } from 'react-bootstrap'


const auth = getAuth();



function RegisterPage() {
    const [fname, setFname] = useState('')
    const [lname, setLname] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [user, setUser] = useState({})
    const dispatch = useDispatch()
    function redirect_Login() {
        var tID = setTimeout(function () {
            window.location.href = "/";
            window.clearTimeout(tID);
            // clear time out.
        }, 1000);
    }

    const [show, setShow] = useState(false);
    const handleShow = () => setShow(true);
    const handleClose = () => {
        setShow(false);
        redirect_Login()
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
                })
                setUser({
                    id: userCredential.user.uid,
                    fname: fname,
                    lname: lname,
                    name: fname + ' ' + lname,
                    email: email,
                })

                dispatch(actionCreateUser(user))
                handleShow()

            })
            .catch((error) => {
                console.log(error);
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
                <h2 className="mb-4 Register register__text text-center">Mentorship. <br /> For Devs. By Devs. </h2>
            </div>
            {/* Register Body Form */}
            <div className="profile__body" >
                <div className="spacerdiv">

                </div>
                <div className="main__panel">
                    <div className="form__div">
                        <form className="form">
                            <div className="form-row">
                                <div className="col-md-12 mb-3">
                                    <label className="input__label">First Name</label>
                                    <input type="text" className="form-control" id="validationDefault01" onChange={(e) => setFname(e.target.value)} required />
                                </div>
                                <div className="col-md-12 mb-3">
                                    <label className="input__label">Last Name</label>
                                    <input type="text" className="form-control" id="validationDefault02" onChange={(e) => setLname(e.target.value)} required />
                                </div>
                            </div>
                            
                            <div className="form-row">
                                <div className="col-md-12 mb-3">
                                    <label className="input__label">E-Mail</label>
                                    <input type="email" className="form-control" id="validationDefault04" onChange={(e) => setEmail(e.target.value)} required />
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="col-md-12 mb-3">
                                    <label className="input__label">Password (6 or more characters)</label>
                                    <input type="password" className="form-control" id="validationDefault05" minLength="6" onChange={(e) => setPassword(e.target.value)} required />
                                </div>
                            </div>
                            <Dropdown className="Dropdown">
                                <Dropdown.Toggle className="Dropdown" id="dropdown-basic">
                                    Choose An Account Status
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <Dropdown.Item href="#/action-1">Register As A Mentor</Dropdown.Item>
                                    <Dropdown.Item href="#/action-2">Register As A Mentee</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                            <br />
                            <label className="input__label text-center mb-3">By clicking Register, you agree to abide by the Terms & Conditions of S.M.A.C. Overflow</label>

                            <button className="btn register__button col-md-12 mb-3" type="submit" onClick={(e) => { handleRegister(e) }} title="Register New User">Register</button>
                            <Modal className="modal" size="md" show={show} onHide={handleClose}>
                                <Modal.Header className="modal__header" closeButton>
                                    <Modal.Title className="text-center modal__title">Your account has been created successfully! </Modal.Title>
                                </Modal.Header>

                                <Modal.Body className="text-center modal__body">Welcome, {user.name} </Modal.Body>
                                <Modal.Footer className="modal__footer">
                                    <Button className="modal__button" variant="secondary" onClick={handleClose}>
                                        Exit
                                    </Button>
                                </Modal.Footer>
                            </Modal>
                            <p className="input__label text-center">Already on S.M.A.C.? <a className="Sign__In__link" href="/login" title="Sign In Page">Sign In</a></p>
                        </form>
                    </div>
                </div>

                <div className="spacerdiv">

                </div>

            </div>
            <div className="footer">
                <p className="footer__text">2021 &#169; S.M.A.C. Overflow </p>
            </div>

        </div>
    )
}

export default RegisterPage

