import DayList from "./Component/DayList"
import Header from "./Component/Header"
import Day from "./Component/Day"
import { BrowserRouter, Route, Switch } from "react-router-dom"

export default function App() {
  return <div className="App">
    <Header />
    <DayList />
    <Day />
  </div>
}