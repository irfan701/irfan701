import React, {Component} from 'react';
import {Card, Col, Container, Row} from "react-bootstrap";
import bLogo from '../../images/BKASH-LOGO.png'
import axios from "axios";
import Loading from "./Loading";
import WentWrong from "./WentWrong";
import {NavLink} from "react-router-dom";
import parse from 'html-react-parser';

class PaymentGuide extends Component {

    state = {
        DataList: [],
        isLoading: true,
        isError: false
    }

    componentDidMount() {

        axios.get('/getPaymentGuide').then((response) => {
            if (response.status == 200) {
                this.setState({DataList: response.data, isLoading: false})
            } else {
                this.setState({isLoading: false, isError: true})
            }
        }).catch((error) => {
            this.setState({isLoading: false, isError: true})
        })
    }


    render() {

        const {isLoading, isError, DataList} = this.state

        if (isLoading == true) {
            return <Loading/>
        } else if (isError == true) {
            return <WentWrong/>

        } else {

            const OneData = DataList


            return (
                <>
                    <Container className="section-margin">
                        <Row>
                            <Col md={6}>
                                <img className="bkash-logo" src={bLogo}/><br/>
                                <p className="text-justify des-text ">
                                    {parse(OneData[0]['des'])}
                                </p>
                                <Row>
                                    <Col md={4} sm={12} className="p-2 text-center">
                                        <Card>
                                            <Card.Body>
                                                <h4 className="">202</h4>
                                                <p className="des-text m-0">Class Uploaded</p>
                                            </Card.Body>
                                        </Card>
                                    </Col>

                                    <Col md={4} sm={12} className="p-2 text-center">
                                        <Card>
                                            <Card.Body>
                                                <h4 className="">170</h4>
                                                <p className="des-text m-0">Total Student</p>
                                            </Card.Body>
                                        </Card>
                                    </Col>

                                    <Col md={4} sm={12} className="p-2 text-center">
                                        <Card>
                                            <Card.Body>
                                                <h4 className="">{OneData[0].price}</h4>
                                                <p className="des-text m-0">Course Fee</p>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                </Row>
                            </Col>

                            <Col md={6} className="text-center">
                                <Card className="card h-100">
                                    {/*<img className="card-img-top" src={myData[0].banner} alt="Card image cap"/>*/}
                                    <img className="card-img-top" src={bLogo} alt="Card image cap"/>
                                    <Card.Body>
                                        <NavLink className="btn mt-2 btn-outline" to="/registration">Enroll
                                            Now</NavLink>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                    </Container>

                </>
            );
        }
    }
}

export default PaymentGuide;
