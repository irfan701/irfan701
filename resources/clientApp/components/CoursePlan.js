import React, {Component} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import {NavLink} from "react-router-dom";
import PlayLogo from '../../images/play.svg'
import Loading from "./Loading";
import WentWrong from "./WentWrong";
import axios from "axios";

class CoursePlan extends Component {

    state = {
        DataList: [],
        isLoading: true,
        isError: false
    }


    componentDidMount() {

        axios.get('/getCoursePlan').then((response) => {
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
        if (this.state.isLoading == true) {
            return <Loading/>
        } else if (this.state.isError == true) {
            return <WentWrong/>

        } else {

            const OneData = this.state.DataList[0]

            return (
                <>
                    <Container fluid={true} className="bg-white section-margin">
                        <Row className="justify-content-md-center text-center">
                            <Col md={8}>
                                <NavLink to="/courseplan">
                                    <img className="play-logo" src={PlayLogo}/>
                                </NavLink>
                                <h5 className="title-text mt-2"><b>{OneData.title}</b></h5>
                                <p className="des-text">{OneData.short_des}</p>
                            </Col>
                        </Row>
                    </Container>
                </>
            );
        }
    }
}

export default CoursePlan;
