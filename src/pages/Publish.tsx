import { AppBar } from '../components/AppBar';
import { TextEditor } from '../components/TextEditor';
import { useState } from 'react';
import { PublishBlog } from '../hooks/publishBlog';
import { useNavigate } from 'react-router-dom';

export const Publish = () => {
    const [title, setTitle] = useState<string>();
    const [content, setContent] = useState<string>();
    
    const navigate = useNavigate();
    return (
        <div>
            <AppBar />
            <div className='my-10 mx-auto flex flex-col max-w-2xl min-w-md'>
                <TextEditor placeholder="Title" value={title} setValue={setTitle} />
                <TextEditor placeholder="Tell a story..." value={content} setValue={setContent} />
                <div className='text-center my-4'>
                    <button onClick={async ()=>{
                        PublishBlog({title: title || "", content: content || "", cb: (id: string) => navigate(`/blog/${id}`)})
                        }} className="text-white bg-green-700 
                        hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 
                        font-medium rounded-full text-sm px-5 py-2.5 text-center dark:bg-green-600
                        dark:hover:bg-green-700 dark:focus:ring-green-800">Publish
                    </button>
                </div>
            </div> 
            
        </div>
    )
}
