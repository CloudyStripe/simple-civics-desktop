import React from "react";
import "./Footer.css"

import {Container, Row, Col } from 'react-bootstrap'

export const Footer: React.FC = () => {
    return (
        <Container className="footer" fluid>
            <Row className="footerRow">
                <Col className="text-center py-3">
                    Copyright &copy; Skyler Savard
                </Col>
            </Row>
        </Container>
    )
}