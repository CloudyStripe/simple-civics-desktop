import React, { useEffect, useRef, useState } from "react";
import { Container, Stack } from "react-bootstrap";
import { BootstrapCard } from "../Card/BootstrapCard";
import ScrollContainer from 'react-indiana-drag-scroll';
import Capitol from '../../images/capitol.jpeg';
import { lessonInfo, getLessons, udpateLessons } from "../../api/LessonsService";
import { BootstrapButton } from "../BootstrapButton";
import { useAuth0 } from "@auth0/auth0-react";
import lessons from './Lessons.json';
import './Learning.scss';

export const Learning: React.FC = () => {

    const [lessonStatus, setLessonStatus] = useState<lessonInfo | null>(null);
    const [isLoadingLessons, setLoadingLessons] = useState<boolean>(true)
    const [isUpdatingLessons, setIsUpdatingLessons] = useState<boolean>(false)
    const buttonCollection = useRef<(HTMLButtonElement | null)[]>([])
    const { user, isLoading } = useAuth0();

    useEffect(() => {
        if (user) {
            const retrieveLessons = async () => {
                const userEmail = user.email || ''
                const results = await getLessons(userEmail)
                setLessonStatus(results)
                setLoadingLessons(false)
            }
            retrieveLessons();
        }

        return () => {
            setLoadingLessons(true)
        }

    }, [isLoading])

    const lessonStatusChange = async (lessonIndex: number) => {
        if (user && !isUpdatingLessons) {
            const userEmail = user.email || ''

            if (lessonStatus === null) {
                console.log('No lesson status available.');
                return;
            }
            setIsUpdatingLessons(true)

            if (buttonCollection.current[lessonIndex]?.className.includes('learningButtonNotCompleted')) {
                buttonCollection.current[lessonIndex]?.classList.add('animateButtonCompletion')
                setTimeout(() => {
                    buttonCollection.current[lessonIndex]!.style.backgroundColor = 'green'
                    buttonCollection.current[lessonIndex]!.innerHTML = 'Completed'
                }, 500)
            }

            if (buttonCollection.current[lessonIndex]?.className.includes('learningButtonCompleted')) {
                buttonCollection.current[lessonIndex]?.classList.add('animateButtonRemoveCompletion')
                setTimeout(() => {
                    buttonCollection.current[lessonIndex]!.style.backgroundColor = 'gray'
                    buttonCollection.current[lessonIndex]!.innerHTML = 'Mark Complete'
                }, 500)
            }

            setTimeout(async () => {
                const newLessonState = { ...lessonStatus }
                newLessonState[`lesson${lessonIndex + 1}` as keyof lessonInfo] = !(newLessonState[`lesson${lessonIndex + 1}` as keyof lessonInfo]);

                await udpateLessons(userEmail, newLessonState);

                const results = await getLessons(userEmail)
                setLessonStatus(results)

                buttonCollection.current[lessonIndex]!.style.backgroundColor = ''
                buttonCollection.current[lessonIndex]!.innerHTML = ''
                buttonCollection.current[lessonIndex]?.classList.remove('animateButtonCompletion')
                buttonCollection.current[lessonIndex]?.classList.remove('animateButtonRemoveCompletion')
            
                setIsUpdatingLessons(false)

            }, 1000)
        }
    }

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
                                        variant="top"
                                        src={Capitol} >
                                        {x.summary}
                                    </BootstrapCard>
                                    <BootstrapButton
                                        onClick={() => lessonStatusChange(i)}
                                        className={lessonStatus![`lesson${i + 1}` as keyof lessonInfo] === true ? 'learningButtonCompleted' : 'learningButtonNotCompleted'}
                                        variant="secondary"
                                        ref={(buttonRef => (buttonCollection.current[i] = buttonRef))}
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