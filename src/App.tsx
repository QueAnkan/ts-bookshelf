import { useState } from 'react'
import './App.css'
import Bookshelf from './features/Bookshelf'
import AddNewBook from './features/AddNewBook'
import Header from './features/Header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Header/>
      <main>
        <Bookshelf/>
      <AddNewBook/>
      </main>
     </div>
  )
}

export default App
