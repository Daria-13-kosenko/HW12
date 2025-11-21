import { useState } from 'react'
import ValueDisplay from './components/ValueDisplay'
import './App.css'

function App() {
  const [value, setValue] = useState('')
  return (
    <div className="app-container">
      <h1>Current and Previous Value</h1>
      <input
        type="text"
        placeholder="Type something.."
        value={value}
        onChange={(e) => setValue(e.target.value)}
      ></input>
      <ValueDisplay value={value} />
    </div>
  )
}

export default App
