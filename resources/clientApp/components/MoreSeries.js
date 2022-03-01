import React, {Component} from 'react';
import {Card, Col, Container, Row} from "react-bootstrap";
import axios from "axios";
import Loading from "./Loading";
import WentWrong from "./WentWrong";
import laravel from '../../../storage/app/public/laravellogo.png'

class MoreSeries extends Component {

    state = {
        DataList: [],
        isLoading: true,
        isError: false
    }

    componentDidMount() {

        axios.get('/getMoreSeries').then((response) => {
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

            const data = DataList.map((myList) => {
                return (
                    <Col md={3} className="p-1">
                        <Card className="text-center">
                            <a href={myList.url} target="_blank" className="nav-item my-1 des-text">
                                <div className="card-body">
                                    {/*<img className="item-logo" src={myList.img}/><br/>*/}
                                    <img className="item-logo" src={laravel}/><br/>
                                    <h5 className="title-text mt-2">{myList.title}</h5>
                                </div>
                            </a>
                        </Card>
                    </Col>
                )
            })

            return (
                <>
                    <Container className="text-center section-margin">
                        <h5 className="title-text mt-2"><b>Find More</b></h5>
                        <p className="des-text">Get Other Tutorial Series By Irfan Hossain</p>
                        <Row>
                            {data}
                        </Row>
                    </Container>
                </>
            );
        }
    }
}

export default MoreSeries;
