import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from '../src/pages/LoginPages'
import DashBoardPages from '../src/pages/DashBoardPages'
import './App.css'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login />}></Route>
          <Route path='/mainpage' element={<DashBoardPages />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App