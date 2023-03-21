import React from "react"
import presidents from './Presidents.json';
import { PresidentPortraitsArray } from './PresidentPortraitsExport';
import { useParams } from "react-router-dom"
import { Container } from "react-bootstrap";
import { BootstrapImage } from "../Image/BootstrapImage";
import { Star } from 'react-bootstrap-icons'
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

    if (id) {
        selectedPresident = presidents[convertedId]
    }

    return (
        <div className="details-container">
            <Container className="d-flex border-bottom border-2 border-dark president-info-container">
                <BootstrapImage
                    className="m-5"
                    rounded={true}
                    src={PresidentPortraitsArray[convertedId]}
                    height='500' />
                <Container className="d-flex align-items-center m-5">
                    <div className="quick-facts">
                        <h1 className="pb-3">{selectedPresident ? selectedPresident.name : ''}</h1>
                        <h2 className="pb-3">{selectedPresident ? selectedPresident.vicePresident : ''}</h2>
                        <h3 className="pb-3">{selectedPresident ? selectedPresident.serviceTerm : ''}</h3>
                        <Container className="d-flex text-center star-container">
                            <Star className="me-3" color="navy" size={25} />
                            <Star size={25} />
                            <Star className="ms-3" color="maroon" size={25} />
                        </Container>
                    </div>
                </Container>
            </Container>
            <Container className="bio-container">
                <h2 className="text-center py-5">Biography</h2>
                <p className="pb-5">{selectedPresident ? selectedPresident.biography : ''}</p>
                <Container className="d-flex text-center star-container page-end-padding">
                        <Star className="me-3" color="navy" size={25} />
                        <Star size={25} />
                        <Star className="ms-3" color="maroon" size={25} />
                </Container>
            </Container>
        </div>
    )
}