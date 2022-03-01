import React, {Component} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import wentWrongImg from "../../images/wentWrong.png";

class WentWrong extends Component {
    render() {
        return (
            <>
                <Container>
                    <Row>
                        <Col lg={12} md={12} sm={12}>
                            <img className="w-50" src={wentWrongImg} alt=""/>
                        </Col>

                    </Row>

                </Container>
            </>
        );
    }
}

export default WentWrong;
