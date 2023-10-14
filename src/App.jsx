import { Routes, Route } from 'react-router-dom'
import Login from './components/Login/Login'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />}></Route>
  </Routes>
  )
}

export default App
