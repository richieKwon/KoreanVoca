import { Link } from "react-router-dom"

export default function Header() {
    return (
        <div className="header">
            <h1>
                <Link to="/">Today's vocabulary</Link>
            </h1>
            <div className="menu">
                <a href="#x" className="link">Add vocabulary</a>
                <a href="#x" className="link">Add Day</a>
            </div>

        </div>
    )
}