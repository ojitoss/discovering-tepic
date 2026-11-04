import { useState } from 'react'

const TEPIC_IFRAME_URL = "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d237578.23574765795!2d-104.8633174!3d21.5014546!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x842735d8893dcfdb%3A0x83784645f40c2d79!2sTepic%2C%20Nay.!5e0!3m2!1ses!2smx!4v1793832768901!5m2!1ses!2smx"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <h1>Discovering Tepicyork</h1>

      <button onClick={()=> setCount(count + 1)}>
        Click to save one tepicyano
      </button>

      Tepicyanos saved: {count}

      <iframe
        src={TEPIC_IFRAME_URL} 
        width="600" 
        height="450"
        style={{ border: 0 }}  
        loading="lazy" 
        allowFullScreen
        >
       </iframe>
    </>
  )
}

export default App
