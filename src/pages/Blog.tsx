import { useParams } from "react-router-dom";
import { Avatar } from "../components/BlogCard"
import { FetchBlog } from '../hooks/FetchBlog';
import { AppBar } from "../components/AppBar";


export type Blog = {
    content: string,
    title: string,
    id: string,
    author: {
        name: string
    }
}

export const Blog = () => {
    const { id } = useParams() 
    const {loading, blog} = FetchBlog({
        id: id || ""
    });

    if(loading) {
        return <div>
            loading...
        </div>
    }
    return (
        <div className="mx-8 flex flex-col items-center">
        <AppBar />
        <div className="grid grid-cols-12 m-10">
            <div className="col-span-8">
                    <div className="text-5xl font-extrabold" dangerouslySetInnerHTML={{ __html: blog?.title || "" }} >
                    
                </div> 
                <div className="text-slate-500 mt-2 text-md">
                    Posted on June 14,2024
                </div>
                    <div className="mt-3 text-slate-800" dangerouslySetInnerHTML={{ __html: blog?.content || "" }} >
                    
                </div>
            </div>
            <div className="col-span-4">
                <div>
                    Author
                </div>
                <div className="flex flex-cols mt-4">
                    <div className="flex flex-col justify-center">
                        <Avatar name={blog?.author?.name || 'anonymous'} size="small" />
                    </div>
                    <div className="ml-4">
                        <div className="font-bold text-xl">
                            {blog?.author?.name || 'Anonymous'}
                        </div>
                        <div> 
                            A quote from the author i am making this a big quote for adjustment
                        </div>
                    </div>
                </div>
            </div>
         </div>
        </div>
    )
}