import { Routes, Route } from 'react-router-dom'
import Login from './components/Login/Login'
import Register from './components/Register/Register'
import Home from './components/Home/Home'
import Carrito from './components/Carrito/Carrito'
import { useState } from 'react'

function App() {
  const [access,setAccess]=useState(false)
  return (
    <Routes>
      <Route path="/login" element={<Login access={access} setAccess={setAccess}/>}></Route>
      <Route path="/register" element={<Register/>}></Route>
      <Route path='/' element={<Home access={access} setAccess={setAccess}/>}></Route>
      <Route path='/carrito' element={<Carrito access={access} setAccess={setAccess}/>}></Route>
    </Routes>
  )
}

export default App
