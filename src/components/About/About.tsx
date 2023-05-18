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
                We are delighted to introduce you to an inclusive, online platform that promotes civic engagement while providing unbiased information.
                Our mission is to make civic education accessible to all, empowering individuals like you to become informed and active participants in their communities. 
                Whether you're passionate about politics, governance, or simply want to deepen your understanding of how society functions, Simply Civics offers a comprehensive range of free resources and tools to support your journey. 
                Start learning today.
                </BootstrapCard>
            </div> 
        </div>
    )
}