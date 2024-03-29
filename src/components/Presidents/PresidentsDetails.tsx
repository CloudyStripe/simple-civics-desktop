import React from "react"
import presidents from './Presidents.json';
import { PresidentPortraitsArray } from './PresidentPortraitsExport';
import { Link, useParams } from "react-router-dom"
import { Container } from "react-bootstrap";
import { BootstrapImage } from "../Image/BootstrapImage";
import { Star } from 'react-bootstrap-icons'
import './PresidentsDetails.scss';
import { PresidentsInterface } from "./Presidents";
import { BootstrapButton } from "../BootstrapButton";

export const PresidentDetails: React.FC = () => {

    const { id } = useParams();

    const convertedId = Number(id)

    let selectedPresident: PresidentsInterface | null = null;

    if (id) {
        selectedPresident = presidents[convertedId]
    }

    return (
        <div className="detailsContainer">
            <Container className="d-flex flex-wrap flex-wrap-md-nowrap justify-content-center justify-content-md-normal presidentInfoContainer">
                <BootstrapImage
                    className="presidentImage m-5"
                    rounded={true}
                    src={PresidentPortraitsArray[convertedId]}
                />
                <Container className="quickFactsContainer d-flex align-items-center mt-sm-0 m-md-5">
                    <div className="quickFacts">
                        <h1 className="pb-3">{selectedPresident ? selectedPresident.name : ''}</h1>
                        <h2 className="pb-3">{selectedPresident ? selectedPresident.vicePresident : ''}</h2>
                        <h3 className="pb-3">{selectedPresident ? selectedPresident.serviceTerm : ''}</h3>
                        <div className="d-flex text-center starContainer">
                            <Star className="me-3" color="navy" size={25} />
                            <Star size={25} />
                            <Star className="ms-3" color="maroon" size={25} />
                        </div>
                    </div>
                </Container>
            </Container>
            <div className="fauxBorder mt-5" />
            <Container className="bioContainer">
                <h2 className="text-center py-5">Biography</h2>
                <div className="pb-5">{selectedPresident ?
                    <>
                        <p>{selectedPresident.biography.paragraph1}</p>
                        <p>{selectedPresident.biography.paragraph2}</p>
                        <p>{selectedPresident.biography.paragraph3}</p>
                        <p>{selectedPresident.biography.paragraph4}</p>
                    </> : ''}
                </div>
                <Container className="buttonContainer text-center pb-5">
                    <Link to={`/PresidentsDetails/${convertedId - 1}`}>
                        <BootstrapButton className={`navButton me-5 ${convertedId === 0 ? `hideButton` : ``}`}>
                            Back
                        </BootstrapButton>
                    </Link>
                    <Link to="/Presidents">
                        <BootstrapButton className="navButton navButtonMain">
                            Presidents
                        </BootstrapButton>
                    </Link>
                    <Link to={`/PresidentsDetails/${convertedId + 1}`}>
                        <BootstrapButton className={`navButton ms-5 ${convertedId === 45 ? `hideButton` : ``}`}>
                            Next
                        </BootstrapButton>
                    </Link>
                </Container>
                <div className="d-flex text-center starContainer pageEndPadding">
                    <Star className="me-3" color="navy" size={25} />
                    <Star size={25} />
                    <Star className="ms-3" color="maroon" size={25} />
                </div>
            </Container>
        </div>
    )
}