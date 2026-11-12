import { BrowserRouter, Routes, Route, Link } from 'react-router'
import { useState } from 'react'
import './App.css'
import { NAV_BAR_SECTIONS } from '../constants'

import Home from './pages/Home'
import Places from './pages/Places'
import SpecificPlace from './pages/SpecificPlace'

function App() {
  const [selectedIndex, setSelectedIndex] = useState(0)
  
  return (
    <BrowserRouter basename='/discovering-tepic'>
      <nav>
        <Link to={'/'}>
          <img src="../assets/Tepic-logo.png" />
        </Link>

        <div>
          {NAV_BAR_SECTIONS.map((section, i)=> (
            <Link
                key={i}
                to={section.path}
                className={'link ' + (selectedIndex === i ? 'selected' : '')}
                onClick={()=> setSelectedIndex(i)}
              >
                {section.title}
              </Link>
          ))}
        </div>
      </nav>

      <Routes>
        <Route path='/' element={< Home/>} />
        <Route path='/places' element={< Places/>} />
        <Route path='/place/:place' element={< SpecificPlace />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
