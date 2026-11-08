import { BrowserRouter, Routes, Route, Link } from 'react-router'
import { useState } from 'react'
import './App.css'
import { NAV_BAR_SECTIONS } from '../constants'

import Home from './pages/Home'
import Test from './pages/Test'

function App() {
  const [selectedIndex, setSelectedIndex] = useState(0)
  
  return (
    <BrowserRouter>
      <nav>
        <Link to={'/'}>
          <img src="../assets/Tepic-logo.png" />
        </Link>

        <div>
          {NAV_BAR_SECTIONS.map((section, i)=> (
            <Link
                key={i}
                to={'/' + (section === 'Home' ? '' : section.toLocaleLowerCase())}
                className={'link ' + (selectedIndex === i ? 'selected' : '')}
                onClick={()=> setSelectedIndex(i)}
              >
                {section}
              </Link>
          ))}
        </div>
      </nav>

      <Routes>
        <Route path='/' element={< Home/>} />
        <Route path='/test' element={< Test/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
