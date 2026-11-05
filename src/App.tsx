import { useState } from 'react'

const TEPIC_IFRAME_URL = "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d237578.23574765795!2d-104.8633174!3d21.5014546!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x842735d8893dcfdb%3A0x83784645f40c2d79!2sTepic%2C%20Nay.!5e0!3m2!1ses!2smx!4v1793832768901!5m2!1ses!2smx"
const CENTRO_IFRAME_URL = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29695.74801753862!2d-104.91315747693689!3d21.50895366378893!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x84273702c0e631ab%3A0xf8dd9a85cd205254!2sCentro%2C%2063000%20Tepic%2C%20Nay.!5e0!3m2!1ses!2smx!4v1793887136218!5m2!1ses!2smx"

function App() {
  const [count, setCount] = useState(0)
  const [place, setPlace] = useState('Tepic')

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
        <option>Tepic</option>
        <option>El centro</option>
      </select>

      <iframe
        src={place === "Tepic" ? TEPIC_IFRAME_URL : CENTRO_IFRAME_URL} 
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
