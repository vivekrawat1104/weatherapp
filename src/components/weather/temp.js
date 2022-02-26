// API URL:  'api.openweathermap.org/data/2.5/weather?q=ramnagar&appid=45ec65fb434ff4ccc1c36b62b56056c3'

import React, { useEffect, useState } from 'react'
import "./style.css";
import Weathercard from './weathercard';


const Temp = () => {
  
  const[searchValue, setSearchValue] = useState("pune");
  
  const[tempInfo, setTempInfo]= useState({})

  const getWeatherInfo = async() =>{

    try{
        let url= `https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&units=metric&appid=45ec65fb434ff4ccc1c36b62b56056c3`;
        let res  = await fetch(url);
        let data = await res.json();

        console.log(data);

        // Get Data from Json Response:
        const {temp, humidity, pressure }   = data.main
        const {main: weathermood}           = data.weather[0]
        const {name}                        = data      // City Name
        const {speed}                       = data.wind // Wind Speed
        const {country, sunset}             = data.sys  // Country Name

        // Print Data in Console:
         console.log(temp, humidity , pressure , weathermood )
         console.log(name , speed , country )

        // Create own object to store all const's data into that single object:
        const myNewWeatherInfo=
        {   temp,
            humidity,
            pressure,
            weathermood,
            name,
            speed,
            country,
            sunset
        } 
        // Now, add this object(myNewWeatherInf) into a stateVariable(setTempInfo).
        setTempInfo(myNewWeatherInfo)

    }
    catch(error){
        console.log(error)
    }
  }

  useEffect( () =>
    {
        getWeatherInfo();
    },
    []
  )

  return (
    <>
        <div className='wrap'>
            <div className='search'>
                {/* 1. Create Search Bar */}
                <input
                    type={'search'}
                    placeholder="search..."
                    autoFocus
                    id="search"
                    className='searchTerm'
                    value={ searchValue }
                    onChange={ (e) => setSearchValue(e.target.value) }
                />

                {/* 2. Create Search Button */}
                <button className='searchButton' type="button" 
                        onClick={getWeatherInfo}>
                    Search
                </button>       

            </div>
        </div>

        {/* 3.Create TEMPRATURE-CARD(temp-card) */}
        <Weathercard tempInfo= {tempInfo} />

    </>
  )
}

export default Temp