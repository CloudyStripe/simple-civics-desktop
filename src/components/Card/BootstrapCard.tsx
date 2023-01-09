import React from "react";
import { Card } from "react-bootstrap";

export interface CardProps {
    body: string
    className?: string;    
    src?: string,
    title: string,
    variant?: "top" | "bottom",
}

export const BootstrapCard: React.FC<CardProps> = (props) => {

    const {className, variant, src, title, body} = props

    return(
        <Card className={className}>
            <Card.Img variant={variant} src={src}/>
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>{body}</Card.Text>
            </Card.Body>
        </Card>
    )
}