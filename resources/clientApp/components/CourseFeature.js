import React, {Component} from 'react';
import {Col, Container, Row, Card, Button} from "react-bootstrap";
import axios from "axios";
import Loading from "./Loading";
import WentWrong from "./WentWrong";

class CourseFeature extends Component {

    state = {
        DataList: [],
        isLoading: true,
        isError: false
    }

    componentDidMount() {

        axios.get('/getCourseFeatures').then((response) => {
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

            const myList = this.state.DataList
            const myView = myList.map((child) => {
                return (
                    <Col lg={3} md={3} sm={12}>
                        <Card className="text-center">
                            <Card.Img className="item-logo" src={child.img}/>
                            <Card.Body>
                                <Card.Title className="title-text mt-2">{child.title}</Card.Title>
                                <Card.Text className="des-text">
                                    {child.des}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                )
            })
            return (
                <>
                    <Container className="section-margin">
                        <Row>
                            {myView}
                        </Row>

                    </Container>
                </>
            );
        }
    }
}

export default CourseFeature;
