import React from "react"
import { Container } from "react-bootstrap"
import { SingleButton } from "../Button"
import './Home.css'

export const Home: React.FC = () => {
    return (
        <div className="jumbotron d-flex align-items-center">
            <Container>
                <h1>Accessible, Objective, and Completely Free</h1>
                <p>Arm yourself with the knowledge and understanding to join the conversation and make a difference</p>
                <SingleButton
                    variant="light"
                    size="lg"
                >
                    Start Learning
                </SingleButton>
            </Container>
        </div>
    )
}