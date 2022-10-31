import { useState, useEffect } from 'react'
import './App.css'
import WeatherApi from './components/WeatherApi'
import Loader from './components/Loader'


function App() {
  

  return (
    <div className="App">
      <div className="card">
       <WeatherApi/>
      </div>
    </div>
  )
}

export default App
