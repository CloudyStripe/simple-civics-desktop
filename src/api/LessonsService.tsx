export interface lessonInfo {
    lesson1: boolean;
    lesson2: boolean;
    lesson3: boolean;
    lesson4: boolean;
    lesson5: boolean;
    lesson6: boolean;
    lesson7: boolean;
    lesson8: boolean;
    lesson9: boolean;
    lesson10: boolean;
    lesson11: boolean;
    lesson12: boolean;
}

export const getLessons = async (userID: string, accessToken: any): Promise<lessonInfo> => {
    try {
        const res = await fetch(`http://localhost:3001/getLearning/${userID}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + accessToken
            }
        })
        const jsonRes = await res.json();
        return jsonRes;
    }
    catch (e: any) {
        return e;
    }
}

export const udpateLessons = async (userID: string, updatedLesson: lessonInfo, accessToken: any): Promise<string> => {
    try {
        const res = await fetch(`http://localhost:3001/updateLearning/${userID}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + accessToken
            },
            body: JSON.stringify(updatedLesson)
        })
        const jsonRes = await res.json();
        console.log(jsonRes)
        return jsonRes
    }
    catch (e: any) {
        return e;
    }
}