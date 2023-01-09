import React from "react";
import { Container, Stack} from "react-bootstrap";
import { BootstrapCard } from "../Card/BootstrapCard";
import ScrollContainer from 'react-indiana-drag-scroll'
import lessons from './Lessons.json';
import Capital from '../../images/capital.jpeg';
import './Learning.css';

export const Learning: React.FC = () => {
    return(
        <>
            <Container className='d-flex justify-content-between pt-5'>
                <h1>My Learning</h1>
            </Container>
            <ScrollContainer horizontal={true} vertical={false}>
                <Stack style={{ height: '60vh' }} direction="horizontal" gap={5}>
                    {lessons.map(x => <BootstrapCard
                    className="cardSizing"
                    title={x.title}
                    body={x.body}
                    variant="top"
                    src={Capital}
                    ></BootstrapCard>
                )}
                </Stack>
            </ScrollContainer>
        </>
    )
}