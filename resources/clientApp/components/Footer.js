import React, {Component} from 'react';
import {Col, Container, Navbar, Row} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEnvelope, faFaceAngry, faMapMarkedAlt, faPhone, faYenSign} from "@fortawesome/free-solid-svg-icons";
import { faFacebook,faYoutube } from "@fortawesome/free-brands-svg-icons"

class Footer extends Component {
    render() {
        return (
            <>
                <div className="jumbotron jumbotron-fluid bg-light-Off mb-0">
                    <Container>
                        <Row>
                            <Col md={3} lg={3} sm={6}>
                                <h3 className="title-text">Follow Me</h3>
                                <hr/>
                                <p><a target="_blank" href=""
                                      className="footer-link"><FontAwesomeIcon icon={faFacebook}/> Facebook</a></p>
                                <p><a target="_blank"
                                      href=""
                                      className="footer-link"><FontAwesomeIcon icon={faYoutube}/> YouTube </a></p>
                            </Col>

                            <Col md={3} lg={3} sm={6}>
                                <h3 className="title-text">Address</h3>
                                <hr/>
                                <p className="des-text"><FontAwesomeIcon icon={faMapMarkedAlt}/> BohardarHat
                                    , Chittagong-1207</p>
                                <p className="des-text"><FontAwesomeIcon icon={faPhone} />  01842000165 (Help-Line)</p>
                                <p className="des-text"><FontAwesomeIcon icon={faEnvelope}/>  irfanhossain701@gmail.com
                                </p>
                            </Col>

                            <Col md={3} lg={3} sm={6}>
                                <h3 className="title-text">Information</h3>
                                <hr/>
                                <a className="footer-link" target="_blank" href="">About
                                    Irfan </a><br/>
                            </Col>

                            <Col md={3} lg={3} sm={6}>
                                <h3 className="title-text">Legal</h3>
                                <hr/>
                                <a className="footer-link" target="_blank" href="refund.html">Refund Policy</a><br/>
                                <a className="footer-link" target="_blank" href="term.html">Terms &
                                    Conditions</a><br/>
                            </Col>
                        </Row>
                    </Container>
                </div>
                <div className="container-fluid text-white m-0 text-center p-3 bg-dark">
                    <p className="credit-text my-2 ">All Rights Reserved By  Irfan Hossain © 2020-2022</p>
                </div>

            </>
        );
    }
}

export default Footer;
