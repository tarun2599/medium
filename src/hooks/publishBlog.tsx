
import { BACKEND_URL } from '../config';
import axios from 'axios';

// type Blog = {
//     content: string,
//     title: string,
//     id: string,
//     author: {
//         name: string
//     }
// }

export const PublishBlog = ({ title, content, cb = () => { } }: { title: string, content: string, cb: any}) => {
        axios.post(`${BACKEND_URL}/api/v1/blog`, {
                title: title,
                content: content
        }, {
            headers: {
                Authorization: localStorage.getItem('token')
            },
        })
            .then(response => {
                
                cb(response.data.id);
            }) 

}