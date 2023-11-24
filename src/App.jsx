import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from '../src/pages/LoginPages'
import DashBoard from '../src/components/Dashboard/DashBoard'
import SideBar from "../src/components/SideBar/SideBar";
import Navbar from "../src/components/Navbar/Navbar";
import Card from "../src/components/Cards/Card";
import TambahKelas from "../src/components/PopUp/TambahKelas";
import KelolaKelas from "../src/components/KelolaKelas/KelolaKelas";
import './App.css'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login />} />
        </Routes>
        <div >
          <div className="hidden">
            <div className="absolute w-screen py-10 bg-black bg-opacity-90">
              <TambahKelas></TambahKelas>
            </div>
          </div>
          <div className="flex">
            <div className="">
              <SideBar></SideBar>
            </div>
            <div className="w-screen">
              <Navbar></Navbar>
              <div className="flex flex-row gap-6 justify-between px-16 py-20">
                <Card number={"450"} title={"Active Users"} background={"#489CFF"}></Card>
                <Card number={"25"} title={"Active Class"} background={"#73CA5C"}></Card>
                <Card number={"20"} title={"Premium Class"} background={"#6148FF"}></Card>
              </div>
              <Routes>
                <Route path='/dashboard' element={<DashBoard />}></Route>
                <Route path='/kelolakelas' element={<KelolaKelas />}></Route>
              </Routes>
            </div>
          </div>
        </div>

      </BrowserRouter>
    </>
  )
}

export default App