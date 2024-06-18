import { Link } from "react-router-dom"

export const Header = (props: any) => {
    return (
        <>
            <div className="mt-20 text-3xl font-bold text-center">
                {props.heading}
            </div>
            <div className="text-slate-500 text-center mt-2">
                <span className="pr-2">
                {props.subheading}
                </span>
                <Link to={props.linkTo} className="underline">{props.link} </Link>
            </div>
        </>
    )
}