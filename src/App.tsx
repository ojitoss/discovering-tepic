import PLACES_INFO from './places_info.json'
import { type PlaceInfo  } from '../types.d'
import { useState } from 'react'
import './App.css'

const places_info = PLACES_INFO as Record<string, PlaceInfo>
const NAV_BAR_SECTIONS = ['Inicio', 'Hola', 'Adios']

function App() {
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [place, setPlace] = useState('Tepic')

  const places_names = Object.keys(places_info)

  return (
    <>
    <div className='title-section'>
      <nav>
        {NAV_BAR_SECTIONS.map((section, i)=> (
          <span
              key={i}
              className={selectedIndex === i ? 'selected' : ''}
              onClick={()=> setSelectedIndex(i)}
            >
              {section}
            </span>
        ))}
      </nav>
      <h1>Discovering</h1>
     </div>

      <select 
        style={{ padding: 30, fontSize: 30  }}
        value={place}  
        onChange={e => setPlace(e.target.value)}>
        {places_names.map(place_name => <option>{place_name}</option>)}
      </select>

      <iframe
        src={places_info[place].google_maps_url} 
        width="600" 
        height="450"
        style={{ border: 0 }}  
        loading="lazy" 
        allowFullScreen
      ></iframe>
    </>
  )
}

export default App
