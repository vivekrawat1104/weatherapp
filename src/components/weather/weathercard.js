import React, { useEffect, useState } from 'react'

const Weathercard = ( {tempInfo} ) => {

    
    const 
    {   temp,
        humidity,
        pressure,
        weathermood,
        name,
        speed,
        country,
        sunset
    } = tempInfo;  


    const[weatherState, setWeatherState] = useState("")
   // Set WeatherMood for Logo of Weather :
   useEffect( () =>
    {
        if(weathermood){
            switch(weathermood)   
            {
                case "Clouds":
                        setWeatherState("wi-day-cloudy");
                        break;
                case "Haze":
                        setWeatherState("wi-fog");
                        break;
                case "Clear":
                        setWeatherState("wi-day-sunny");
                        break;
                case "Mist":
                        setWeatherState("wi-dust");
                        break;

                default:
                        setWeatherState("wi-day-sunny");
                        break;    
            }    
        }
    },[weathermood]
    )

   // Converting the seconds into Time:
   let sec      = sunset
   let date     = new Date( sec*1000 )
   let timeStr  = `${date.getHours()}:${date.getMinutes()}` 

  return (
    <>
         {/* Our temp-card */}
         <article className='widget'>
                    <div className='weatherIcon'>
                            <i className={`wi ${weatherState}`}> 
                            </i>
                            {/* <i className={'wi wi-day-sunny'}> </i>  */}
                    </div>

                    <div className='weatherInfo'>
                            <div className='temperature'>
                                <span>  
                                       {temp}&deg;                  {/* 25.5&deg;  */}
                                </span>
                            </div>

                            <div className='description'>
                                <div className='weatherCondition'>
                                        {weathermood}               {/* Sunny */}
                                </div>
                                <div className='place'>
                                        {name},{country}            {/* Pune, India */}
                                </div>
                            </div>
                    </div>

                    <div className='date'>
                        { new Date().toLocaleString() }   
                    </div>

                    {/* Our 4-Column section: */}
                    <div className='extra-temp'>
                        <div className='temp-info-minmax'>
                           
                            {/* 1. RAIN*/}
                            <div className="two-sided-section">
                                <p>
                                    <i className={"wi wi-sunset"}></i>
                                </p>

                                <p className='extra-info-leftside'>
                                        {timeStr}PM <br/>  Sunset     {/* 12.10 PM <br/>  Sunset     */}
                                </p>
                            </div>

                              
                            {/* 2. HUMIDITY*/}
                            <div className="two-sided-section">
                                <p>
                                    <i className={"wi wi-humidity"}></i>
                                </p>

                                <p className='extra-info-leftside'>
                                        {humidity}<br/> Humidity        {/* Humidity     */}
                                </p>
                            </div>

                        </div>   


                        <div className='weather-extra-info'>
                            {/* 3. PRESSURE */}
                            <div className="two-sided-section">
                                <p>
                                    <i className={"wi wi-rain"}></i>
                                </p>

                                <p className='extra-info-leftside'>
                                            {pressure} <br/>Pressure     {/* 12.10 PM <br/>Pressure     */}
                                </p>
                            </div>

                            {/* 4. SPEED */}
                            <div className="two-sided-section">
                                <p>
                                    <i className={"wi wi-strong-wind"}></i>
                                </p>

                                <p className='extra-info-leftside'>
                                            {speed} <br/> Speed           {/* 12.10 PM <br/> Speed     */}
                                </p>
                            </div>
                        </div>

                    </div>
        </article>

        <br/><br/>
        
        {/* Create Footer: */}
        <article>
                        <footer  align="center">
                            <p>
                                ©2022 Vivek Rawat.
                            </p>    
                        </footer>
        </article> 
     
    </>
  )
}

export default Weathercard