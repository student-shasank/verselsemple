import React from 'react'
import { BrowserRouter,Route, Routes} from 'react-router-dom'

import Adminlogin from './Component/Adminlogin'
import Admin from './Component/Admin'

import NewUser from './Component/NewUser'


function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
    <Route path="/adminlogin" element={<Adminlogin/>} />
    <Route path="/" element={<NewUser/>} />
    <Route path="/admin" element={<Admin/>} />
    </Routes>
    </BrowserRouter>

    </>
  )
}

export default App