import { useNavigate } from "react-router-dom";
import useFetch from "./hooks/useFetch";

export default function CreateDay() {
    const days = useFetch("http://localhost:3001/days");
    const navigate = useNavigate();

    function onClick(event) {
        event.preventDefault();
        // console.log(enRef.current.value)
        // console.log(korRef.current.value)

        fetch(`http://localhost:3001/days/`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(
                {
                    day: days.length + 1
                })
        })
            .then(res => {
                if (res.ok) {
                    alert("A new word is created");
                    navigate(`/`)
                }
            });

    }
    return (
        <div>
            <h3>Days in total:  {days.length}</h3>
            <button onClick={onClick}>Add more days</button>
        </div>)
};