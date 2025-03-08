import api from "@/services"

type Todo = {
    id: number;
    title: string;
    completed: boolean;
    userId: number;
}

export const getTodo = async (id: number) => {
    try {
        const response = await api(`/todos/${id}`)
        console.log(response.data)
        return await response.data as Todo
    } catch (error) {
        if (error instanceof Error) {
            console.log(error.message)
        }
    }
}