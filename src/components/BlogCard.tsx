import { Link } from "react-router-dom"

interface BlogCardProps {
    authorName: string,
    title: string,
    content: string,
    publishDate: string,
    id: string
}

export const BlogCard = ({

    id,
    authorName,
    title,
    content,
    publishDate
}: BlogCardProps) => {
    return (
        <Link to={`/blog/${id}`}>
            <div className="border-b flex flex-col gap-2 pt-6 pb-2">
                <div className="flex flex-row gap-x-2 items-center">
                    <div>
                        <Avatar name={authorName || 'anonymous'} size="small"/>
                    </div>
                    <div className="text-sm">
                        {authorName}
                    </div>
                    <div className="text-sm text-slate-500">    
                        {publishDate}
                    </div>
                </div>
                <div className="font-semibold text-2xl" dangerouslySetInnerHTML={{ __html: title }} >
                    
                </div>
                <div className="font-thin" dangerouslySetInnerHTML={{ __html: content }}>
                </div>
                <div className="text-xs text-slate-500 mt-2 font-thin"> 
                    {`${Math.ceil(content.length / 100)} min read`}
                </div> 
                
            </div>
        </Link>
    )
}

export const Avatar = ({name, size="small"}: {name: string, size: "small" | "big"}) => {
    console.log(name)
    return (
        
        <div className={`relative inline-flex items-center justify-center h-6 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600 ${size === "small" ? "w-6 h-6": "w-8 h-8"}` }>
            <span className="font-medium text-gray-600 dark:text-gray-300 text-sm">{ (name[0] + (name.split(' ').length > 1 ? name.split(' ')[1][0] : "")) || 'A'}</span>
        </div>

    )
}