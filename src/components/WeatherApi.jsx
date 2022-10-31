import axios from "axios";
import { useEffect, useState } from "react";

/*  Desarrolla una aplicación que muestre datos del clima, obteniendo de la API los siguientes datos: país, ciudad, 
icono que describa el clima, la temperatura en grados centígrados, y un botón que cambie la temperatura a grados Fahrenheit.*/ 
const  WeatherApi = () => {

    const[weather, setWeather] = useState ({});
    const[temp, setTemp] = useState(true)

useEffect(() => {
     
    

   const success = pos => {

    const lat = pos.coords.latitude
    const lon = pos.coords.longitude
     
    axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=ca0ddf98d5e38b61537d80241b6eb737`)
    .then(res => setWeather(res.data))
  
}


    navigator.geolocation.getCurrentPosition(success);

},[])


const converterF = () => {
    setTemp(!temp);
}
//(0K − 273.15) × 9/5 + 32
    return (
<div>

<p>{weather.name}</p>
<p>{weather.sys?.country}</p>
<img src={`http://openweathermap.org/img/wn/${weather.weather?.[0].icon}@2x.png`} alt="" />
<p>  {temp ? Math.round(weather.main?.temp - 273.15) : Math.round(( weather.main?.temp - 273.15) * 9/5 + 32)} 
 {temp? "°C" : "°F"}
 </p>
<button  className="btn" onClick={converterF}>{temp? "°F" : "°C"}</button>

</div>

    )
};
export default WeatherApi;