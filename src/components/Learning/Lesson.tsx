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
    body: LessonContent
}

export interface LessonContent {
    paragraph1: string,
    paragraph2: string,
    paragraph3: string,
    paragraph4: string,
}

export const Lesson: React.FC = () => {

    const { lessonNumber } = useParams();
    let currentLesson: LessonDetail | null = null;
    let convertedLessonNumber: number = 0
    let lessonTitle: string = '';
    let lessonBody1: string = '';
    let lessonBody2: string = '';
    let lessonBody3: string = '';
    let lessonBody4: string = '';
    let lastLesson: number = 0;
    let nextLesson: number = 0;
    const lessonLength: number = lessons.length

    if (lessonNumber) {
        convertedLessonNumber = +lessonNumber
        currentLesson = lessons[convertedLessonNumber - 1]
        lessonTitle = currentLesson["title"]
        lessonBody1 = currentLesson["body"]["paragraph1"]
        lessonBody2 = currentLesson["body"]["paragraph2"]
        lessonBody3 = currentLesson["body"]["paragraph3"]
        lessonBody4 = currentLesson["body"]["paragraph4"]
        lastLesson = convertedLessonNumber - 1;
        nextLesson = convertedLessonNumber + 1;
    }

    return (
        <div className="lessonContainer">
            <div className="jumbotron" />
            <h1 className="text-center py-4">{lessonTitle}</h1>
            <Container>
                <Container className="bodyContainer pb-5">
                    <p>{lessonBody1}</p>
                    <p>{lessonBody2}</p>
                    <p>{lessonBody3}</p>
                    <p>{lessonBody4}</p>
                </Container>
                <Container className="buttonContainer text-center pb-5">
                    <Link to={`/lesson/${lastLesson}`}>
                        <BootstrapButton className={`navButton me-5 ${convertedLessonNumber === 1 ? `hideButton` : ``}`}>
                            Back
                        </BootstrapButton>
                    </Link>
                    <Link to="/Learning">
                        <BootstrapButton className="navButton navButtonMain">
                            Lessons
                        </BootstrapButton>
                    </Link>
                    <Link to={`/lesson/${nextLesson}`}>
                        <BootstrapButton className={`navButton ms-5 ${convertedLessonNumber === lessonLength ? `hideButton` : ``}`}>
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