import { HashRouter, Routes, Route, Link } from 'react-router'
import { useState } from 'react'
import './App.css'
import { getFullPath  } from './helper'
import { NAV_BAR_SECTIONS } from '../constants'

const TEPIC_LOGO = getFullPath('root', 'Tepic-logo.png')

import Home from './pages/Home'
import Places from './pages/Places'
import SpecificPlace from './pages/SpecificPlace'

function App() {
  const [selectedIndex, setSelectedIndex] = useState(0)
  
  return (
    <HashRouter>
      <nav>
        <Link to={'/'}>
          <img src={TEPIC_LOGO} />
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
      
      <footer>
        <div className='guide'>
          <img src={TEPIC_LOGO} />
          <div>
            <h5>Guide:</h5>
            <ul>
              {NAV_BAR_SECTIONS.map((section, i)=> (
                <li>
                  <Link
                    key={i}
                    to={section.path}
                  >
                    {section.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

          <span>Designed by: UPEN students</span>
      </footer>
    </HashRouter>
  )
}

export default App
