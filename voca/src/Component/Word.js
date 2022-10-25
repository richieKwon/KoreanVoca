import { useState } from "react";

export default function Word({ word: w }) {

    const [word, setWord] = useState(w);
    const [isShown, setIsShown] = useState(false);
    const [isDone, setIsDone] = useState(word.isDone)

    function toggleShow() {
        setIsShown(!isShown);
    }

    function toggleDone() {
        // setIsDone(!isDone)
        fetch(`http://localhost:3001/words/${word.id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(
                {
                    ...word,
                    isDone: !isDone
                })
        })
            .then(res => {
                if (res.ok) {
                    setIsDone(!isDone);
                }
            })
    }

    function del() {
        if (window.confirm('want to delete the word?')) {

            fetch(`http://localhost:3001/words/${word.id}`, {
                method: 'DELETE',
            }).then(res => { if (res.ok) { setWord({ id: 0 }); } });
        }
    }

    if (word.id === 0) { return null; }

    return (
        <tr className={isDone ? "off" : ""}>
            <td><input type="checkbox" checked={isDone} onChange={toggleDone}></input></td>
            <td>{word.kor}</td>
            <td>{isShown && word.eng}</td>
            <td>
                <button onClick={toggleShow}>{isShown ? 'Hide' : 'Display'}</button>
                <button onClick={del} className="btn_del">Delete</button>
            </td>
        </tr>
    );
}