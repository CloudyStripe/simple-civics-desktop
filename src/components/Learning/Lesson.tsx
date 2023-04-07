import React from "react"
import lessons from './Lessons.json';
import { Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
import './Lesson.scss'
import { Star } from "react-bootstrap-icons";

export interface LessonDetail {
    "lesson-number": number;
    title: string;
    summary: string;
    body: string;
}

export const Lesson: React.FC = () => {

    const { lessonNumber } = useParams();

    let currentLesson: LessonDetail | null = null;
    let lessonTitle: string = '';
    let lessonBody: string = '';

    if (lessonNumber) {
        currentLesson = lessons[+lessonNumber - 1]
        lessonTitle = currentLesson["title"]
        lessonBody = currentLesson["body"]
    }

    return (
        <div className="lessonContainer">
            <div className="jumbotron" />
            <h1 className="text-center py-4">{`${lessonTitle}`}</h1>
            <Container>
                <Container className="bodyContainer pb-5">
                    {`${lessonBody}`}
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