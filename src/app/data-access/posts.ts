import api from "@/services"

type Post = {
    id: number;
    title: string;
    body: string;
    userId: number;
}

export const fetchPosts = async () => {
    try {
        const res = await api('/posts')
        return res.data as Post[]
    } catch (error) {
        if (error instanceof Error) {
            console.log(error.message)
        }
    }
}

export const getPost = async (id: number) => {
    try {
        const res = await api(`/posts/${id}`)
        console.log('res', res)
        return res.data as Post
    } catch (error) {
        if (error instanceof Error) {
            console.log(error.message)
        }
    }
}