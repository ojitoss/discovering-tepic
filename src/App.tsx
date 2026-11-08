import { BrowserRouter, Routes, Route, Link } from 'react-router'
import './App.css' 

import Home from './pages/Home'
import Test from './pages/Test'

function App() {
  return (
    <BrowserRouter>
      <Link to='test'>test</Link>
      <Routes>
        <Route path='/' element={< Home/>} />
        <Route path='/test' element={< Test/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
