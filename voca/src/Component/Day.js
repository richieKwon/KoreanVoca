import dummmy from "./db/data.json"
import { useParams } from "react-router-dom";

export default function Day() {

    // const day = useParams().day;

    const { day } = useParams();

    const wordList = dummmy.words.filter(
        word => (word.day === Number(day))
    );

    // console.log(a);

    return <>
        <h2>Day - {day}</h2>
        <table>
            <tbody>
                {wordList.map(
                    word => (
                        <tr key={word.id}>
                            <td>{word.kor}</td>
                            <td>{word.eng}</td>
                        </tr>
                    )
                )}
            </tbody>
        </table>

    </>
}