import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      Discovering Tepicyork

      <button onClick={()=> setCount(count + 1)}>
        Click to save one tepicyano
      </button>

      Tepicyanos saved: {count}
    </>
  )
}

export default App
