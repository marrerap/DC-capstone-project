import React, { useState } from 'react'
import { Form } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { actionUpdateUser } from '../redux/actions/user'
import Logo from '../images/LogoSMAC.png'
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../firebase";
import "../firebase";

function Profile() {
    const dispatch = useDispatch()
    const user = useSelector(state => state.user)
    console.log('here is', user)
    const [userFirstName, setUserFirstName] = useState(`${user.user.fname}`)
    const [userLastName, setUserLastName] = useState(`${user.user.lname}`)
    const [userEmail, setUserEmail] = useState(`${user.user.email}`)
    const [userMentor, setUserMentor] = useState(`${user.user.mentor}`)



    async function handleUpdate(e) {
        e.preventDefault();
        const updatedUser = doc(db, 'users', user);
        
        await updateDoc(updatedUser, {
            fname: userFirstName,
            lname: userLastName,
            name: userFirstName + ' ' + userLastName,
            email: userEmail,
            mentor: userMentor
        })



        dispatch(actionUpdateUser(user))


    }

    return (
        // value={userName}
        // onChange={(e) => setUserName(e.target.value)}
        <div className="register__page">
            {/* Logo Image Centered */}
            {/* Header */}
            <div className="register__header text-center">
                <a href="/" ><img className="header__img" src={Logo} alt="" title="Sign In Page"></img></a>
            </div >
            <br />
            <div>
                <h2 className="mb-4 Register register__text text-center">Edit profile</h2>
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
                                    {user?.user && (
                                        <input type="text" className="form-control" id="validationDefault01" value={userFirstName}
                                            onChange={(e) => setUserFirstName(e.target.value)} />

                                    )}
                                </div>
                                <div className="col-md-12 mb-3">
                                    <label className="input__label">Last Name</label>
                                    <input type="text" className="form-control" id="validationDefault02" value={userLastName}
                                        onChange={(e) => setUserLastName(e.target.value)} />
                                </div>
                            </div>

                            <div className="form-row">
                                <div className="col-md-12 mb-3">
                                    <label className="input__label">E-Mail</label>
                                    <input type="email" className="form-control" id="validationDefault04" value={userEmail}
                                        onChange={(e) => setUserEmail(e.target.value)} />
                                </div>
                            </div>
                            {/* <div className="form-row">
                                <div className="col-md-12 mb-3">
                                    <label className="input__label">Password (6 or more characters)</label>
                                    <input type="password" className="form-control" id="validationDefault05" minLength="6" />
                                </div>
                            </div> */}
                            <div className="form-row">
                                <div className="col-md-12 mb-3">
                                    <Form.Select onChange={(e) => setUserMentor(e.target.value)} aria-label="Default select example" className="Dropdown">
                                        <option>Update Account Status</option>
                                        <option value="true">Register As A Mentor - I Want To Help </option>
                                        <option value="false">Register As A Mentee - I Need Help</option>
                                    </Form.Select>
                                </div>
                            </div>

                            <br />


                            <button onClick={handleUpdate} className="btn register__button col-md-12 mb-3" type="submit" title="Update Profile">Save changes</button>


                        </form>
                    </div>
                </div>

                <div className="spacerdiv">

                </div>

            </div>

        </div>
    )
}

export default Profile