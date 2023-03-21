import React from "react"
import Lincoln from '../../images/lincoln-memorial.jpg';
import { BootstrapImage } from "../Image/BootstrapImage";
import './About.scss'
import { BootstrapCard } from "../Card/BootstrapCard";

export const About: React.FC = () => {

    return (
        <div className="about-container">
            <div className="d-flex align-items-center mb-5 header-flex">
                <h1 className="about-header m-auto text-white">About Us</h1>
            </div>
            <div className="about-content m-auto position-relative">
                <BootstrapImage className="border border-dark mw-100 m-auto lincoln-image" rounded={true} src={Lincoln}/>
                <BootstrapCard className="position-absolute about-card" title="Simply Civics"> 
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                </BootstrapCard>
            </div> 
        </div>
    )
}