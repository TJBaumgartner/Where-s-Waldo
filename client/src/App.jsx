import { useState, useEffect } from 'react'
import './App.css'
import Image from './image/waldo.jpg'
function App() {

  const [displayDropdown, setDisplayDropdown] = useState(false)
  const [coordinates, setCoordinates] = useState({x: 0, y:0})
  const [exactCord, setExactCord] = useState({x: 0, y:0})

  const Log = (e) => {
    let Xcord = e.pageX;
    let Ycord = e.pageY - e.target.offsetTop;
    setCoordinates({x: Xcord, y: Ycord})
    setExactCord({x: Xcord/e.currentTarget.offsetWidth, y: Ycord/e.currentTarget.offsetHeight})
    setDisplayDropdown(display => !display)
    console.log(exactCord)
    console.log(coordinates)
  }


  return (
    <div>
      <img src={Image} alt="Where's Waldo Image" className="Image" onClick={(e) => Log(e)}/>
      {displayDropdown == true ? 
      <div>
        <ul className='dropdown' style={{ 
            color: "white",
            left: `${coordinates.x + 35}px`,
            top: `${coordinates.y - 30}px`,
            }}>
            <li>first</li>
            <li>second</li>
            <li>third</li>
        </ul>
      </div>
        :
          null
      }
    </div>
  )
}

export default App
