import PLACES_INFO from './places_info.json'
import { type PlaceInfo  } from '../types.d'
import { useState } from 'react'
import { GoogleMaps  } from './components/GoogleMaps'
import './App.css'

const places_info = PLACES_INFO as PlaceInfo[]
const NAV_BAR_SECTIONS = ['Inicio', 'Hola', 'Adios']

const place_index = places_info.reduce((acc, cur, i)=> {
  acc[cur.name] = i

  return acc
}, {})

function App() {
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [place, setPlace] = useState('Tepic')

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
        {places_info.map(place => <option>{place.name}</option>)}
      </select>

      <GoogleMaps
        url={places_info[place_index[place]].google_maps_url}
      />
    </>
  )
}

export default App
