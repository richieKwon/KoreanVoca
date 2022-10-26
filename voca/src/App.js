import DayList from "./Component/DayList"
import Header from "./Component/Header"
import Day from "./Component/Day"
import EmptyPage from './Component/EmptyPage'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import CreateWord from "./Component/CreateWord"
import CreateDay from "./Component/CreateDay"

export default function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route exact path='/' element={<DayList />} />
          <Route path='/day/:day' element={<Day />} />
          <Route path='/create_word' element={<CreateWord />} />
          <Route path='/create_day' element={<CreateDay />} />
          {/* putting the empaty page at the last */}
          <Route element={<EmptyPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};