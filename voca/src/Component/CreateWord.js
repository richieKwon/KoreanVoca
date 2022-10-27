import { useRef, useState } from "react";
import { useNavigate } from "react-router"
import useFetch from "./hooks/useFetch"

export default function CreateWord() {
    const days = useFetch("http://localhost:3001/days")
    const navigate = useNavigate();
    const [isLoading, setIsloading] = useState(false);

    // to avoid refresh : preventDefault!
    function onSubmit(event) {
        event.preventDefault();
        // console.log(enRef.current.value)
        // console.log(korRef.current.value)


        if (!isLoading) {
            setIsloading(true)

            fetch(`http://localhost:3001/words/`, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(
                    {
                        day: dayRef.current.value,
                        eng: enRef.current.value,
                        kor: korRef.current.value,
                        isDone: false
                    })
            })
                .then(res => {
                    if (res.ok) {
                        alert("A new word is created");
                        navigate(`/day/${dayRef.current.value}`);
                        setIsloading(false);
                    }
                });
        }
    }

    const korRef = useRef(null);
    const enRef = useRef(null);
    const dayRef = useRef(null);

    return <form onSubmit={onSubmit}>
        <div className="input_area">
            <label>Korean</label>
            <input type="text" placeholder="서울" ref={korRef}></input>
        </div>
        <div className="input_area">
            <label>English</label>
            <input type="text" placeholder="Seoul" ref={enRef}></input>
        </div>
        <div className="input_area">
            <label>Day</label>
            <select ref={dayRef}>
                {days.map(
                    day => (<option key={day.id} value={day.day}>{day.day}</option>))}
            </select>
        </div>
        <button style={{ opacity: isLoading ? 0.3 : 1 }}>{isLoading ? "Saving..." : "Save"}</button>
    </form>
}