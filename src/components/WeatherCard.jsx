/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react'
import './styles/WeatherCard.css'
const WeatherCard = ({weather, temp}) => {

    const [isCelsius, setisCelsius] = useState(true);


    const handleChange = () =>{
        setisCelsius(!isCelsius);
    }
  return (
    <section className='weather'>

            <h1 className='weather_title'>Weather App</h1>
            <h2 className='weather_city'>{weather?.name},{weather?.sys.country}</h2>
            <article className='weather_container'>
                
                <figure className='weather_fig'>
                    <img src={`https://openweathermap.org/img/wn/${weather?.weather[0].icon}@2x.png`} alt="weather icon   " className='weather_img'></img>
                </figure>
                <div>
                    <h3 className='weather_clouds'>{weather?.weather[0].description}</h3>
                    <ul className='weather_info'>
                    <li><span>Wind Speed </span><span>{weather?.wind.speed} m/s</span></li>
                    <li><span>Clouds </span><span>{weather?.clouds.all} %</span></li>
                    <li><span>Pressure </span><span>{weather?.main.pressure} hPa</span></li>
                    <li><span>Humidity </span><span>{weather?.main.humidity} %</span></li>
                    </ul>
                </div>
            </article>
            <div className='weather_container2'>
                <h3 className='weather_temp'>{
                    isCelsius ?
                        temp?.celsius + ' ºC'
                    :
                        temp?.fahrenheit+ ' ºF'
                    }</h3>
                <button className='weather_btn' onClick={handleChange}>Change to {isCelsius? ' ºF':' ºC'}</button>
            </div>

    </section>
  )
}

export default WeatherCard