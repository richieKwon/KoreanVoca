import World from "./World";
import styles from "./Hello.module.css";
import { useState } from "react";
import UserName from "./UserName";

export default function Hello({ age }) {
    // function showName() {
    //     console.log("Richie")
    // }

    // function showAge(age) {
    //     console.log(age)
    // }

    // function showText(e) {
    //     console.log(e.target.value)
    // }

    // return (
    //     <>
    //         <h1>Hello</h1>
    //         <button onClick={() => { showName() }}>Show name</button>
    //         <button onClick={() => { showAge(20) }}>Show age</button><br />
    //         <input type="text" onChange={showText}></input>
    //     </>
    // );
    // let name = "YeraLee"

    console.log({ age });
    const [name, setName] = useState('YeraLee');
    // const [age, setAge] = useState({ age });
    const msg = age > 19 ? "Adult" : "Baby"


    function changeName() {
        const newName = name === 'YeraLee' ? 'Jen' : 'YeraLee';
        setName(newName);
        // name = name === "Jen" ? "YeraLee" : "Jen"
        // console.log(name)
        // document.getElementById("name").innerText = name;
    }
    return (
        <div>
            <h1>State</h1>
            <h2 id="name">{name}{age}: {msg} </h2>
            <UserName name={name}></UserName>
            <button onClick={() => {
                changeName();
                // setAge(age + 1)
            }}>Change the name</button>
        </div>
    );
}    