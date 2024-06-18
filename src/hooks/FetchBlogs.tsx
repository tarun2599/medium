
import { useEffect, useState } from "react"
import { BACKEND_URL } from '../config';
import axios from 'axios';
import { Blog } from "../pages/Blog";

export const FetchBlogs = () => {
    
    const [blogs, setBlogs] = useState<Blog[]>([])
    const [loading, setLoading] = useState<boolean>(true)

    useEffect(()=> {
        axios.get(`${BACKEND_URL}/api/v1/blog/bulk`, {
            headers: {
                Authorization: localStorage.getItem('token')
            }
        })
            .then(response => {
                setBlogs(response.data.blogs)
                setLoading(false);
            })
    }, [])

    return {
        loading, blogs
    }
}