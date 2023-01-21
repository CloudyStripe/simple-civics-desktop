import React from "react";
import { Container, Stack } from "react-bootstrap";
import { BootstrapCard } from "../Card/BootstrapCard";
import ScrollContainer from 'react-indiana-drag-scroll'
import lessons from './Lessons.json';
import Capital from '../../images/capital.jpeg';
import './Learning.css';
import { BootstrapButton } from "../BootstrapButton";

export const Learning: React.FC = () => {
    return (
        <>
            <Container className='d-flex justify-content-between pt-5'>
                <h1>My Learning</h1>
            </Container>
            <ScrollContainer horizontal={true} vertical={false}>
                <Stack style={{ height: '60vh' }} direction="horizontal" gap={5}>
                    {lessons.map(x => (
                        <div className={`d-flex flex-column align-items-center cardSizing ${x["lesson-number"] === 1 ? `firstCardMargin` : ``}`}>
                            <BootstrapCard
                                className="cardSizing"
                                title={x.title}
                                body={x.body}
                                variant="top"
                                src={Capital} />
                            <BootstrapButton className="learningButton" variant="secondary" size="lg">
                                Mark Complete
                            </BootstrapButton>
                        </div>
                    ))}
                </Stack>
            </ScrollContainer>
        </>
    )
}