import { useState, useEffect } from 'react'
import './App.css'
import Image from './image/waldo.jpg'
function App() {
  const Log = (e) => {
    console.log(e.pageX)
    console.log(e.pageY)
  }
  return (
    <div>
      <img src={Image} alt="Where's Waldo Image" onClick={() => Log}/>
    </div>
  )
}

export default App
