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
                    <h1 className="m-auto header-format">Simply Civics</h1>
                </Col>
                <Col className="lincoln-filter" sm={6}>
                    <BootstrapImage className="mw-100 lincoln-image" src={Lincoln}></BootstrapImage>
                </Col>
            </Row>
        </Container>
    )
}