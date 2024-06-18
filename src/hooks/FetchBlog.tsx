
import { useEffect, useState } from "react"
import { BACKEND_URL } from '../config';
import axios from 'axios';

type Blog = {
    content: string,
    title: string,
    id: string,
    author: {
        name: string
    }
}

export const FetchBlog = ({id}: {id: string}) => {

    const [blog, setBlog] = useState<Blog>()
    const [loading, setLoading] = useState<boolean>(true)

    useEffect(() => {
        axios.get(`${BACKEND_URL}/api/v1/blog/${id}`, {
            headers: {
                Authorization: localStorage.getItem('token')
            }
        })
            .then(response => {
                setBlog(response.data.blog)
                setLoading(false);
            })
    }, [])

    return {
        loading, blog
    }
}