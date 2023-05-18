import React, { useEffect, useRef, useState } from "react";
import { Card, Container, Placeholder, Stack } from "react-bootstrap";
import { BootstrapCard } from "../Card/BootstrapCard";
import ScrollContainer from 'react-indiana-drag-scroll';
import Capitol from '../../images/capitol.jpeg';
import { lessonImagesArray } from "./LessonImagesExport";
import Constitution from '../../images/lessons/constitution.jpeg'
import { BootstrapModal } from "../Modal/Modal";
import { lessonInfo, getLessons, udpateLessons } from "../../api/LessonsService";
import { BootstrapButton } from "../BootstrapButton";
import { useAuth0 } from "@auth0/auth0-react";
import lessons from './Lessons.json';
import './Learning.scss';
import { Link } from "react-router-dom";

export const Learning: React.FC = () => {

    const [lessonStatus, setLessonStatus] = useState<lessonInfo | null>(null);
    const [isLoadingLessons, setLoadingLessons] = useState<boolean>(true);
    const [isUpdatingLessons, setIsUpdatingLessons] = useState<boolean>(false);
    const completedCountRef = useRef<number>(0)
    const [showModal, setShowModal] = useState<boolean>(false)
    const buttonCollection = useRef<(HTMLButtonElement | null)[]>([]);
    const { user, isLoading, isAuthenticated, getAccessTokenSilently, getAccessTokenWithPopup } = useAuth0();

    const congratsMessage: string = "Congratulations! You've completed the Simply Civics curriculum, and we applaud your dedication to becoming an informed citizen. Armed with your newfound knowledge, it's time to take the next step. Share your insights, ask questions, and participate in meaningful discussions that shape our society. Together, let's turn knowledge into action and make a difference in our communities. Join the conversation today and be the change you wish to see!"

    useEffect(() => {
        let completedCount: number = 0;
        for(const lesson in lessonStatus){
            if(lessonStatus[lesson as keyof lessonInfo]){
                completedCount += 1;
            }
        }

        completedCountRef.current = completedCount

    }, [isUpdatingLessons])

    useEffect(() => {
        if (user) {
            const retrieveLessons = async () => {
                const userEmail = user.email || ''
                const accessToken = await getAccessTokenSilently({
                    audience: 'https://simply-civics-api.herokuapp.com/'
                });
                const results = await getLessons(userEmail, accessToken)
                setLessonStatus(results)
                setLoadingLessons(false)
            }
            retrieveLessons();
        }

        if(!user){
            setLoadingLessons(false)
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

                const accessToken = await getAccessTokenSilently({
                    audience: 'https://simply-civics-api.herokuapp.com/'
                })
                await udpateLessons(userEmail, newLessonState, accessToken)
                const results = await getLessons(userEmail, accessToken)

                setLessonStatus(results)

                buttonCollection.current[lessonIndex]!.style.backgroundColor = ''
                buttonCollection.current[lessonIndex]!.innerHTML = ''
                buttonCollection.current[lessonIndex]?.classList.remove('animateButtonCompletion')
                buttonCollection.current[lessonIndex]?.classList.remove('animateButtonRemoveCompletion')

                setIsUpdatingLessons(false)

            }, 1000)
        }

        if(lessonStatus){
            if((completedCountRef.current + 1 === lessons.length) && lessonStatus[`lesson${lessonIndex + 1}` as keyof lessonInfo] === false){
                setShowModal(true)
            }
            else {
                setShowModal(false)
            }
        }
    }
    return (
        <div className="learningContainer">
            <Container className='d-flex justify-content-between pt-5'>
                <h1>My Learning</h1>
            </Container>
            <ScrollContainer horizontal={true} vertical={false}>
                <Stack style={{ height: '60vh' }} direction="horizontal" gap={5}>
                    {!isLoadingLessons && lessons.map((x, i) => (
                        <div key={x["lesson-number"]} className={`d-flex pe-5 flex-column align-items-center cardSizing ${x["lesson-number"] === 1 ? 'firstCardMargin' : ''} ${x["lesson-number"] === 12 ? 'me-3' : ''}`}>
                            <Link to={`/lesson/${x["lesson-number"]}`}>
                                <BootstrapCard
                                    className="cardSizing"
                                    title={x.title}
                                    variant="top"
                                    src={lessonImagesArray[i]} >
                                    {x.summary}
                                </BootstrapCard>
                            </Link>
                            {user && !isLoadingLessons && lessonStatus !== null && (
                                <BootstrapButton
                                    onClick={() => lessonStatusChange(i)}
                                    className={lessonStatus![`lesson${i + 1}` as keyof lessonInfo] === true ? 'learningButtonCompleted' : 'learningButtonNotCompleted'}
                                    variant="secondary"
                                    ref={(buttonRef => (buttonCollection.current[i] = buttonRef))}
                                    size="lg">
                                    {lessonStatus![`lesson${i + 1}` as keyof lessonInfo] === true ? 'Completed' : 'Mark Complete'}
                                </BootstrapButton>
                            )}
                        </div>
                    ))}
                    {isLoadingLessons && (
                        <>
                            <Card className="lastSkeletonStanding ms-auto">
                                <Placeholder className="imageSkeleton m-1" as={Card.Img} />
                                <Placeholder className="skeletonText" as={Card.Title} animation='glow'>
                                    <Placeholder xs={7} />
                                </Placeholder>
                                <Placeholder className="skeletonText" as={Card.Text} animation='glow'>
                                    <Placeholder xs={4} /><Placeholder xs={6} />
                                    <Placeholder xs={7} />
                                    <Placeholder xs={5} /><Placeholder xs={4} />
                                </Placeholder>
                            </Card>
                            <Card className=" firstDisappearance">
                                <Placeholder className="imageSkeleton m-1" as={Card.Img} />
                                <Placeholder className="skeletonText" as={Card.Title} animation='glow'>
                                    <Placeholder xs={7} />
                                </Placeholder>
                                <Placeholder className="skeletonText" as={Card.Text} animation='glow'>
                                    <Placeholder xs={4} /><Placeholder xs={6} />
                                    <Placeholder xs={7} />
                                    <Placeholder xs={5} /><Placeholder xs={4} />
                                </Placeholder>
                            </Card>
                            <Card className=" secondDisappearance">
                                <Placeholder className="imageSkeleton m-1" as={Card.Img} />
                                <Placeholder className="skeletonText" as={Card.Title} animation='glow'>
                                    <Placeholder xs={7} />
                                </Placeholder>
                                <Placeholder className="skeletonText" as={Card.Text} animation='glow'>
                                    <Placeholder xs={4} /><Placeholder xs={6} />
                                    <Placeholder xs={7} />
                                    <Placeholder xs={5} /><Placeholder xs={4} />
                                </Placeholder>
                            </Card>
                            <Card className=" thirdDisappearance me-auto">
                                <Placeholder className="imageSkeleton m-1" as={Card.Img} />
                                <Placeholder className="skeletonText" as={Card.Title} animation='glow'>
                                    <Placeholder xs={7} />
                                </Placeholder>
                                <Placeholder className="skeletonText" as={Card.Text} animation='glow'>
                                    <Placeholder xs={4} /><Placeholder xs={6} />
                                    <Placeholder xs={7} />
                                    <Placeholder xs={5} /><Placeholder xs={4} />
                                </Placeholder>
                            </Card>
                        </>
                    )
                    }
                </Stack>
            </ScrollContainer>
            {(!isAuthenticated && !isLoading) && (
                <div className="progressTrackerNotification">Create an account to track your progress...</div>
            )}
            <BootstrapModal className="modalPadding" title="Congratulations" content={congratsMessage} show={showModal}></BootstrapModal>
        </div>
    )
}