import React from "react"
import lessons from './Lessons.json';
import { Container } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import './Lesson.scss'
import { Star } from "react-bootstrap-icons";
import { BootstrapButton } from "../BootstrapButton";

export interface LessonDetail {
    "lesson-number": number;
    title: string;
    summary: string;
    body: string;
}

export const Lesson: React.FC = () => {

    const { lessonNumber } = useParams();
    let currentLesson: LessonDetail | null = null;
    let convertedLessonNumber: number = 0
    let lessonTitle: string = '';
    let lessonBody: string = '';
    let lastLesson: number = 0;
    let nextLesson: number = 0;
    const lessonLength: number = lessons.length

    if (lessonNumber) {
        convertedLessonNumber = +lessonNumber
        currentLesson = lessons[convertedLessonNumber - 1]
        lessonTitle = currentLesson["title"]
        lessonBody = currentLesson["body"]
        lastLesson = convertedLessonNumber - 1;
        nextLesson = convertedLessonNumber + 1;
    }

    return (
        <div className="lessonContainer">
            <div className="jumbotron" />
            <h1 className="text-center py-4">{`${lessonTitle}`}</h1>
            <Container>
                <Container className="bodyContainer pb-5">
                    {`${lessonBody}`}
                </Container>
                <Container className="text-center pb-5">
                    <Link to={`/lesson/${lastLesson}`}>
                        <BootstrapButton className={`navButton mx-5 ${convertedLessonNumber === 1 ? `hideButton` : ``}`}>
                            Back
                        </BootstrapButton>
                    </Link>
                    <Link to="/Learning">
                        <BootstrapButton className="navButton navButtonMain mx-5">
                            Lessons
                        </BootstrapButton>
                    </Link>
                    <Link to={`/lesson/${nextLesson}`}>
                        <BootstrapButton className={`navButton mx-5 ${convertedLessonNumber === lessonLength ? `hideButton` : ``}`}>
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