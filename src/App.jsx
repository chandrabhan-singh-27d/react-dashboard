import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div id='main-wrapper' className='flex justify-between'>
        <div id='table-wrapper'>
          <h2>This is the table block</h2>
        </div>
        <div id='chart-wrapper'>
          <h2>This is the chart block</h2>
        </div>
      </div>
    </div>
  )
}

export default App
