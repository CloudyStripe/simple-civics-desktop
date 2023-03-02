import React from "react"
import Lincoln from '../../images/lincoln-memorial.jpg';
import { Col, Container, Row } from "react-bootstrap"
import { BootstrapImage } from "../Image/BootstrapImage";
import './About.scss'

export const About: React.FC = () => {
    return (
        <Container className="container-fluid container-width">
            <Row>
                <Col sm={6}>
                    <h1 className="m-auto pb-4 font-weight-bold header-format">Simply Civics</h1>
                    <ul>
                        <li className="mb-4 blue">
                            <i className="bi-check-lg"></i>
                            Easy-to-use
                        </li>                       
                        <li className="mb-4 black">
                            <i className="bi-check-lg"></i>
                            Objective
                        </li>
                        <li className="mb-2 red">
                            <i className="bi-check-lg"></i>
                            Free
                        </li>
                    </ul>
                </Col>
                <Col className="lincoln-filter" sm={6}>
                    <BootstrapImage className="mw-100 lincoln-image" src={Lincoln}></BootstrapImage>
                </Col>
            </Row>
        </Container>
    )
}