import { useState } from 'react'
import { Header } from './components/Header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <main className="h-screen w-screen bg-white dark:bg-stone-900">
      <Header />
      
      <h1 className="text-5xl font-bold underline bg-orange-600">
        Hello world!
      </h1>
      
    </main>
  )
}

export default App
