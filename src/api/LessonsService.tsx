export interface RequestInfo {
    userId: string;
}

export interface lessonInfo {
    lesson1: boolean;
    lesson2: boolean;
    lesson3: boolean;
    lesson4: boolean;
    lesson5: boolean;
    lesson6: boolean;
    lesson7: boolean;
    lesson8: boolean;
    lesson9: boolean
}

export const getLessons = async (request: RequestInfo): Promise<lessonInfo> => {
    try {
        const { userId } = request;
        const res = await fetch(`http://localhost:3001/getLearning/${userId}`)
        const jsonRes = await res.json();
        return jsonRes;
    }
    catch (e: any) {
        return e;
    }
}