import React from "react"
import presidents from './Presidents.json';
import { PresidentPortraitsArray } from './PresidentPortraitsExport';
import { useParams } from "react-router-dom"
import { Container } from "react-bootstrap";
import { BootstrapImage } from "../Image/BootstrapImage";
import './PresidentsDetails.scss';

export interface PresidentObject {
    number: number;
    name: string;
    vicePresident: string;
    serviceTerm: string;
    biography: string;
}

export const PresidentDetails: React.FC = () => {

    const { id } = useParams();
    const convertedId = Number(id)

    let selectedPresident: PresidentObject | null = null;

    if(id){
        selectedPresident = presidents[convertedId]
    }

    return (
        <Container className="d-flex border-bottom border-2 border-dark president-info-container">
            <BootstrapImage
                className="m-5"
                rounded={true}
                src={PresidentPortraitsArray[convertedId]}
                height='500'
            />
            <Container className="d-flex align-items-center m-5">
                <div className="quick-facts">
                    <h1>{selectedPresident ? selectedPresident.name : ''}</h1>
                    <h2>{selectedPresident ? selectedPresident.vicePresident : ''}</h2>
                    <h3>{selectedPresident ? selectedPresident.serviceTerm : ''}</h3>
                </div>
            </Container>
        </Container>
    )
}