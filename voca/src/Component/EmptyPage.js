import { Link } from "react-router-dom";

export default function EmptyPage() {
    return (
        <>
            <h2> Wrong! </h2>
            <Link to="/">Return back to home</Link>
        </>
    )
}