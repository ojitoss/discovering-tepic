import places_info from './places_info.json'
import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)
  const [place, setPlace] = useState('Tepic')

  const places_names = Object.keys(places_info)

  return (
    <>
     <h1>Discovering Tepicyork</h1>

      <button onClick={()=> setCount(count + 1)}>
        Click to save one tepicyano
      </button>

      Tepicyanos saved: {count}

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
