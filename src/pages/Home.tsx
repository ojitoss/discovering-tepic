import { PLACES_INFO, TEPIC_URL } from '../../constants'
import { type PlaceType  } from '../../types.d'
import { useState } from 'react'
import { GoogleMaps  } from '../components/GoogleMaps'
import '../App.css'

const places_indexes = PLACES_INFO.reduce<Record<PlaceType, number>>((acc, curr, i)=> {
  acc[curr.name] = i

  return acc
}, {} as Record<PlaceType, number>) 

function App() {
    const [place, setPlace] = useState<PlaceType>('Centro')

    return (
        <>
            <div className='title-section'>
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
                    {PLACES_INFO.map((place, i) => (
                        <option key={i}>{place.name}</option>)
                    )}
            </select>

            <GoogleMaps
                url={PLACES_INFO[places_indexes[place]].google_maps_url}
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