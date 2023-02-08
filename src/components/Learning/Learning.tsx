import React, { useEffect, useState } from "react";
import { Container, Stack } from "react-bootstrap";
import { BootstrapCard } from "../Card/BootstrapCard";
import ScrollContainer from 'react-indiana-drag-scroll';
import Capital from '../../images/capital.jpeg';
import { BootstrapButton } from "../BootstrapButton";
import { getLessons } from "../../api/LessonsService";
import { useAuth0 } from "@auth0/auth0-react";
import lessons from './Lessons.json';
import './Learning.css';


export const Learning: React.FC = () => {

    // const [lessonStatus, setLessonStatus] = useState([]);
    const { user } = useAuth0();
    useEffect(() => {
        if (user) {
            const retrieveLessons = async () => {
                const results = await getLessons({ userId: user.email ? user.email : '' })
                console.log(results)
            }
            retrieveLessons();
        }

    })

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