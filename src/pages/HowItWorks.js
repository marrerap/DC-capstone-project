import React from "react";
import { Carousel, Container } from "react-bootstrap";
import tech from '../images/brooke-cagle-g1Kr4Ozfoac-unsplash.jpg'
import Logo from '../images/LogoSMAC.png'
import '../componentcss/LoginPage.css'
import collab1 from '../images/austin-distel-gUIJ0YszPig-unsplash.jpg'
import collab2 from '../images/austin-distel-mpN7xjKQ_Ns-unsplash.jpg'



function HowItWorks() {
  return (
    <div className="login__page">
         <div className="login__header">
                <div><a href="/" title="Sign In Page"><img className="header__img Logo" src={Logo} alt=""></img></a></div>
                <div><a href="/" title="How It Works">SIGN IN</a></div>
                <div><a href="/register" title="Become A Mentor">BECOME MENTOR</a></div>
                <div><a href="/register" title="Register A New User"><button className="register__btn" >BECOME MENTEE</button></a></div>
            </div >

            <Container style={{marginBottom: '15px'}} ><h3>How It Works:</h3> <br/><span>S.M.A.C. is for and by developers to ask questions and share solutions on software development topics</span></Container>
      <Carousel fade >
        <Carousel.Item className="d-flex justify-content-center">
          <img
            className="d-block w-65 "
            src={tech}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3 >Collaborate</h3>
            <p>Meet Developers such as yourself and find solutions together!</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="d-flex justify-content-center" >
          <img
            className="d-block w-65"
            src={collab1}
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Network</h3>
            <p>Make lifelong connections in the Dev community that is S.M.A.C Overflow!</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="d-flex justify-content-center" >
          <img
            className="d-block w-65"
            src={collab2}
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Contribute</h3>
            <p>
             We are all students and teachers, Share your knowledge!
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default HowItWorks;
