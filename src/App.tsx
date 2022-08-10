import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import * as services from './service'
import DailyCard from './components/dailyCard/dailyCard'
function App() {
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
      <div className='daily-box'>
        {
          daily?.stories.map(item => <DailyCard title={item.title} imgPath={item.images[0]}/>)
        }
        {
          daily?.top_stories.map(item => <DailyCard title={item.title} imgPath={item.image}/>)
        }
      </div>
    </div>
  )
}

export default App
