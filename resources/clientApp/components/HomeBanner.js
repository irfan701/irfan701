import React from 'react';
import {Button, Col, Container, Row} from "react-bootstrap";

const HomeBanner = () => {
    return (
        <>
            <Container className='parallax' fluid>
                <Row>
                    <Col className="top-div text-center"  md={6} sm={12}>
                        <p className="m-0 top-title">React</p>
                        <p id="lwrh" className="m-0 top-subtitle"></p>
                        <p className="m-0 top-subtitle">Learn Something Good & Do Something Better</p>
                        <Button className="btn login-btn m-2" href="login.html">Login</Button>
                    </Col>
                    <Col md={6} sm={12} className="text-center top-div d-flex justify-content-md-center">
                        {/*<img className="react-logo" src={loading}/>*/}
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default HomeBanner;
