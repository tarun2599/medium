import { Avatar } from "./BlogCard"
import { Link } from "react-router-dom"

export const AppBar = () => {
    return (
        <div className="flex flex-row justify-between px-10 w-full py-4 border-b">
            <Link to='/blogs' >
                Medium
            </Link>
            <div className="flex flex-row gap-x-6">
                <Link to='/publish' >
                    <button type="button" className="text-white bg-green-700 
                    hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 
                    font-medium rounded-full text-sm px-5 py-2.5 text-center dark:bg-green-600
                    dark:hover:bg-green-700 dark:focus:ring-green-800">Publish</button>
                </Link>
                <div className="flex flex-col justify-center">
                    <Avatar name="Tarun Lakhmani" size="big"/>
                </div>
            </div>
            
        </div>
    )
}