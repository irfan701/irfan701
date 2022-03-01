import React, {Component} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import loadingImg from "../../images/loading.svg";

class Loading extends Component {
    render() {
        return (
            <>
                <Container>
                    <Row>
                        <Col lg={12} md={12} sm={12}>

                            <img className="loading-logo" src={loadingImg} alt=""/>

                        </Col>

                    </Row>

                </Container>
            </>
        );
    }
}

export default Loading;
