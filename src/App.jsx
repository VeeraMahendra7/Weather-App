import React, { useState } from 'react'
import './App.css'
import Header from './components/Header'
import SearchBar from './components/SearchBar'
import WeatherCard from './components/WeatherCard'
import Footer from './components/Footer'

const App = () => {
    const [weatherDetails, setWeatherDetails] = useState(null);

    // console.log(weatherDetails);
  return (
    <div className='app'>
        <div  className='app-container'>
            <Header />
            <SearchBar setWeatherDetails={setWeatherDetails} />
            { 
              weatherDetails && <WeatherCard weatherDetails={weatherDetails} /> 
            }
            <Footer />
        </div>
    </div>
  )
}

export default App
