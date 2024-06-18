import { AppBar } from "../components/AppBar"
import { BlogCard } from "../components/BlogCard"
import { FetchBlogs } from "../hooks/FetchBlogs"

export const Blogs = () => {

    const {loading, blogs} = FetchBlogs();
    
    if(loading) {
        return <div>
            Loading...
        </div> 
    }
    console.log(blogs);
    return(
        <div className="mx-8 flex flex-col items-center">
            <AppBar />
            <div className="max-w-xl">
                {blogs.map((blog) => {
                return <BlogCard id={blog.id} authorName={blog?.author?.name || 'anonymous'} 
                title={blog.title}
                content={blog.content} 
                publishDate="Jun 14, 2024" />
                })}
            </div>
        </div>
    )
}