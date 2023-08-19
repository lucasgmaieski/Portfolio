import "./global.css";
import { useState } from 'react'
import { Header } from './components/Header'
import { Presentation } from "./components/Presentation";
import { Projects } from "./components/Projects";

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="h-screen w-full bg-primarylight text-black dark:bg-primarydark dark:text-white relative">
      <Header />
      
      <main className="h-full pt-24">
        <h1 className="text-5xl font-bold underline">
          Hello world!
        </h1>
        <Presentation />
        <Projects />
        <Projects />
      </main>
      
    </div>
  )
}

export default App
