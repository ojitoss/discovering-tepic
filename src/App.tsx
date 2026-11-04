import { useState } from 'react'

const TEPIC_URL_IMG = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjTFwi1yQKUAyYG4uvyAQUTBLm15VxOYMT_sjPuj9LKqELQ4NFWtiJJUw&s=10"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <h1>Discovering Tepicyork</h1>

      <button onClick={()=> setCount(count + 1)}>
        Click to save one tepicyano
      </button>

      Tepicyanos saved: {count}

      <img
        src={TEPIC_URL_IMG}
        width={400}
        height={400}
      />
    </>
  )
}

export default App
