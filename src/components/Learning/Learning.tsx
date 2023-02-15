import React, { useEffect, useState } from "react";
import { Container, Stack } from "react-bootstrap";
import { BootstrapCard } from "../Card/BootstrapCard";
import ScrollContainer from 'react-indiana-drag-scroll';
import Capital from '../../images/capital.jpeg';
import { lessonInfo } from "../../api/LessonsService";
import { BootstrapButton } from "../BootstrapButton";
import { getLessons } from "../../api/LessonsService";
import { useAuth0 } from "@auth0/auth0-react";
import lessons from './Lessons.json';
import './Learning.scss';


export const Learning: React.FC = () => {

    const [lessonStatus, setLessonStatus] = useState<lessonInfo | null>(null);
    const [isLoadingLessons, setLoadingLessons] = useState<boolean>(true)
    const { user, isLoading } = useAuth0();

    useEffect(() => {
        if (user) {
            const retrieveLessons = async () => {
                const results = await getLessons({ userId: user.email ? user.email : '' })
                setLessonStatus(results)
                setLoadingLessons(false)
            }
            retrieveLessons();
        }

        return () => {
            setLoadingLessons(true)
        }

    }, [isLoading])

    return (
        <>
            {!isLoadingLessons && (
                <><Container className='d-flex justify-content-between pt-5'>
                    <h1>{`My Learning`}</h1>
                </Container><ScrollContainer horizontal={true} vertical={false}>
                        <Stack style={{ height: '60vh' }} direction="horizontal" gap={5}>
                            {lessons.map((x, i) => (
                                <div key={x["lesson-number"]} className={`d-flex flex-column align-items-center cardSizing ${x["lesson-number"] === 1 ? `firstCardMargin` : ``}`}>
                                    <BootstrapCard
                                        className="cardSizing"
                                        title={x.title}
                                        body={x.body}
                                        variant="top"
                                        src={Capital} />
                                    <BootstrapButton
                                        className={lessonStatus![`lesson${i + 1}` as keyof lessonInfo] === true ? 'learningButtonCompleted' : 'learningButtonNotCompleted'}
                                        variant="secondary"
                                        size="lg">
                                        {lessonStatus![`lesson${i + 1}` as keyof lessonInfo] === true ? 'Completed' : 'Mark Complete'}
                                    </BootstrapButton>
                                </div>
                            ))}
                        </Stack>
                    </ScrollContainer></>
            )}
            {(isLoadingLessons) && (
                <div>Loading...</div>
            )}
        </>
    )
}