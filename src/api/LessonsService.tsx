export interface RequestInfo {
    userId: string;
}

export const getLessons = async<T,>(request: RequestInfo): Promise<T> => {
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