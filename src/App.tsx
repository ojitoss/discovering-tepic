import PLACES_INFO from './places_info.json'
import { type PlaceInfo, type PlaceType  } from '../types.d'
import { useState } from 'react'
import { GoogleMaps  } from './components/GoogleMaps'
import './App.css'


const TEPIC_URL = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d237577.84604983852!2d-105.02811964030073!3d21.501693167784197!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x842735d8893dcfdb%3A0x83784645f40c2d79!2sTepic%2C%20Nay.!5e0!3m2!1ses!2smx!4v1793888330262!5m2!1ses!2smx"
const places_info = PLACES_INFO as PlaceInfo[]
const NAV_BAR_SECTIONS = ['Inicio', 'Hola', 'Adios']

const place_index = places_info.reduce((acc, cur, i)=> {
  acc[cur.name] = i

  return acc
}, {}) 

function App() {
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [place, setPlace] = useState<PlaceType>('Centro')

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

     <div className='tepic-map'>
      <GoogleMaps url={TEPIC_URL} />
    </div>

      <select 
        style={{ padding: 30, fontSize: 30  }}
        value={place}  
        onChange={e => setPlace(e.target.value as PlaceType)}>
        {places_info.map(place => <option>{place.name}</option>)}
      </select>

      <GoogleMaps
        url={places_info[place_index[place]].google_maps_url}
      />

      <div 
       style={{
         display: 'grid',
         gridTemplateColumns: 'repeat(3, 1fr)',
         gap: 10
       }}
       >
        {places_info.map((place_info, i)  => (
          <span 
            key={i}
            style={{
              background: 'white',
              fontSize: 40,
              padding: 15
            }}>
              {place_info.name}
          </span>
        ))}
       </div>
    </>
  )
}

export default App
