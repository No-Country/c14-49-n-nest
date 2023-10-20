import { Routes, Route } from 'react-router-dom'
import Login from './components/Login/Login'
import Register from './components/Register/Register'
import Home from './components/Home/Home'
import Carrito from './components/Carrito/Carrito'

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/register" element={<Register/>}></Route>
      <Route path='/' element={<Home />}></Route>
      <Route path='/carrito' element={<Carrito />}></Route>
    </Routes>
  )
}

export default App
