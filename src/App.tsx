import { PLACES_INFO, NAV_BAR_SECTIONS, TEPIC_URL } from '../constants'
import { type PlaceType  } from '../types.d'
import { useState } from 'react'
import { GoogleMaps  } from './components/GoogleMaps'
import './App.css'

const place_index = PLACES_INFO.reduce((acc, cur, i)=> {
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

      <h1>
        <span>Discovering</span>
        <img src='./assets/Tepic-logo.png'/>
      </h1>
     </div>

     <div className='tepic-map'>
      <GoogleMaps url={TEPIC_URL} />
    </div>

      <select 
        style={{ padding: 30, fontSize: 30  }}
        value={place}  
        onChange={e => setPlace(e.target.value as PlaceType)}>
        {PLACES_INFO.map(place => <option>{place.name}</option>)}
      </select>

      <GoogleMaps
        url={PLACES_INFO[place_index[place]].google_maps_url}
      />

      <div 
       style={{
         display: 'grid',
         gridTemplateColumns: 'repeat(3, 1fr)',
         gap: 10
       }}
       >
        {PLACES_INFO.map((place_info, i)  => (
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
