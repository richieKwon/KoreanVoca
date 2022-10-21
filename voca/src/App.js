import DayList from "./Component/DayList"
import Header from "./Component/Header"
import Day from "./Component/Day"
import EmptyPage from './Component/EmptyPage'
import { BrowserRouter, Route, Routes } from "react-router-dom"

export default function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route exact path='/' element={<DayList />} />
          <Route path='/day/:day' element={<Day />} />
          {/* putting the empaty page at the last */}
          <Route element={<EmptyPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};