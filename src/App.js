import React from 'react'
import './App.css'

import DigitalClock from './components/DigitalClock'

const App = () => {
  return (
    <div className='bodyElement'>
      <div className="clockElement">
        <h1>Digital Clock</h1>
        <DigitalClock />
      </div>
    </div>
  )
}

export default App