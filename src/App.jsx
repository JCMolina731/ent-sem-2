import { useEffect, useState } from 'react';
import './App.css';
import  Axios  from 'axios';
import WeatherCard from './components/WeatherCard';

function App() 
{
  const [coords, setCoords] = useState();
  const [weather, setWheater] = useState();
  const [temp, setTemp] = useState();

  const success = position => {
    const obj = {
        lat: position.coords.latitude,
        lon: position.coords.longitude,
      }
    setCoords(obj);
  }

  useEffect(()=>{
    if(coords)  {

      const APIkey='1a19abcbbe1a3adbac2757c810f3b3e6';
      const url=`https://api.openweathermap.org/data/2.5/weather?lat=${coords.lat}&lon=${coords.lon}&appid=${APIkey}`;
      Axios.get(url)
        .then(res => {
          const obj = {
            celsius: (res.data.main.temp - 273.15).toFixed(2) ,
            fahrenheit: ((res.data.main.temp -273.15)*9/5 +32).toFixed(2),
            }
            setTemp(obj);
            setWheater(res.data);

          })
        .catch(err => console.log(err));
      
    }
  }, [coords]);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(success);
  },[]);

  
  return(
    <div className='app'>
      <WeatherCard 
        weather = {weather}
        temp = {temp}
      />
    </div>
  )
}

export default App
