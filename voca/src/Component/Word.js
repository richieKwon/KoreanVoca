import { useState } from "react";

export default function Word({ word }) {

    const [isShown, setIsShown] = useState(false);
    const [isDone, setIsDone] = useState(word.isDone)

    function toggleShow() {
        setIsShown(!isShown);
    }

    function toggleDone() {
        setIsDone(!isDone)
    }
    return (
        <tr className={isDone ? "off" : ""}>
            <td><input type="checkbox" checked={isDone} onChange={toggleDone}></input></td>
            <td>{word.kor}</td>
            <td>{isShown && word.eng}</td>
            <td><button onClick={toggleShow}>Meaning - {isShown ? 'Hide' : 'Display'}</button></td>
            <td><button className="btn_del">Delete</button></td>
        </tr>
    );
}