import React from "react"
import { Container } from "react-bootstrap"
import { useNavigate } from "react-router-dom"
import { BootstrapButton } from "../BootstrapButton"
import './Home.scss'

export const Home: React.FC = (props) => {

    const navigate = useNavigate();
    const redirectToLearning = () => {
        navigate('/learning')
    }

    return (
        <div className="homeContainer">
            <div className="jumbotron d-flex align-items-center">
                <Container>
                    <h1>Accessible, Objective, and Completely Free</h1>
                    <p>Arm yourself with the knowledge and understanding to join the conversation and make a difference</p>
                    <BootstrapButton
                        variant="light"
                        size="lg"
                        onClick={redirectToLearning}
                    >
                        Start Learning
                    </BootstrapButton>
                </Container>
            </div>
        </div>
    )
}