import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import * as services from './service'
function App() {
  const [count, setCount] = useState(0)
  const [daily,setDaily] = useState<LatestDto>()
  getDailyNew()
  function getDailyNew(){
    services.getLatestDaily().then(res => {
      setDaily(res.data)
    })
  }
  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => getDailyNew() }>click to get Daily</button>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <ul>
        {
          daily?.stories.map(item => <li>
            <img src={item.images?.[0]} className="logo" alt={item.image_hue}/>
            <a href={item.url}>{item.title}</a>
          </li>)
        }
        {
          daily?.top_stories.map(item => <li>
            <img src={item.image} className="logo" alt={item.image_hue}/>
            <a href={item.url}>{item.title}</a>
          </li>)
        }
      </ul>
    </div>
  )
}

export default App
