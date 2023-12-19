import React, { useState } from 'react'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Dashboard from './pages/Dashboard'
import Home from './pages/Home'

const App = () => {
  const [isLoggin, setIsLoggin] = useState(false);
  return (
    <div className="w-screen h-screen bg-[#000814] flex flex-col">
      <Navbar isLoggin={isLoggin} setIsLoggin={setIsLoggin}/>

      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<Home/>}/>
        <Route path='/contact' element={<Home/>}/>
        <Route path='/login' element={<Login setIsLoggin={setIsLoggin}/>}/>
        <Route path='/signup' element={<Signup setIsLoggin={setIsLoggin}/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
      </Routes>
    </div>
  )
}

export default App