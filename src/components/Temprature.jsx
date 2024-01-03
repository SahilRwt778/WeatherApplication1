import React, {useEffect, useState } from "react";
import "./temp.css";
import clear from '../images/clear.png'
import clouds from '../images/clouds.png'
import drizzle from '../images/drizzle.png'
import humidity from '../images/humidity.png'
import mist from '../images/mist.png'
import rain from '../images/rain.png'
import snow from '../images/snow.png'
import wind from '../images/wind.png'




export default function Temprature() {
  const [city, setCity] = useState(null);
  const [search, setSearch] = useState('mumbai');
  const [invalue , setInvalue]=useState('mumbai');

  
  useEffect(() => {
    const fetchApi = async () => {


      const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=c07880a43b80ab977139c00c423e40be&units=metric`

      const response = await fetch(url)
      

      const resJson= await response.json();
     
      setCity(resJson);
      console.log(resJson);
      
    };

    fetchApi();
    
  },[search])
  const searchQueryHandler = (event) => {
    if (event.key === "Enter" && invalue.length > 0) {
      setSearch(invalue);
    }
    
  
  };
  
  let imgpath='';

  if(city?.weather[0].main=="Clouds"){
    imgpath=clouds
  }
  else if(city?.weather[0].main=="Clear"){
    imgpath=clear
  }
  else if(city?.weather[0].main=="Haze"){
    imgpath=clear
  }
  else if(city?.weather[0].main=="Drizzle"){
    imgpath=drizzle
  }
  else if(city?.weather[0].main=="Mist"){
    imgpath=mist
  }
  else if(city?.weather[0].main=="Rain"){
    imgpath=rain
  }
  else if(city?.weather[0].main=="light rain"){
    imgpath=rain
  }
  else if(city?.weather[0].main=="Snow"){
    imgpath=snow
  }
  else
  {
    imgpath=clouds
  }

  
  return (

    
    <div className="box">
      
      <div className="inputData">
        <input type="search" className="inputFeild" 
         placeholder="Enter City Name"
         value={invalue}
         aria-label="inputFeild"
         onChange={(event) => {setInvalue(event.target.value)}}
         onKeyUp={searchQueryHandler}
         />
        <button className="btn" onClick={()=>setSearch(invalue)}>
        <i className="fa fa-search" aria-hidden="true"></i>

        </button>
        
          <div className="weather" >
          <img src={imgpath} alt="" className="wether-icon" />
          <p>{city?.weather[0].main}</p>
        </div>
        
        
      </div>

{city? (
<>
  <div className="info">
        <h2 className="location">
          <i className="fa fa-street-view" aria-hidden="true"></i>
          {invalue}<p>{ city.sys.country}</p>
          
        </h2>
        <h1 className="temp"> {city.main.temp}° Cel</h1>
        <h3 className="tempin-max"> Min :{city.main.temp_min}° Cel / Max : {city.main.temp_max}° Cel</h3>
      </div>

      <div className="wave -one"></div>
      <div className="wave -two"></div>
      <div className="wave -three"></div>

      <div className="details">
      <div className="col">
        <img src={humidity} alt="" />
        <div>
          <p className="humidity">{city.main.humidity}% <br />humidity</p>
        </div>
      </div>
      <div className="col">
        <img src={wind} alt="" />
        <div>
          <p className="wind">{city.wind.speed} Km/h
          Wind Speed</p>
        </div>
      </div>
      </div>
      </>
 
) : (<h2 className="error"><i className="fa fa-exclamation-triangle" aria-hidden="true"></i></h2>)
}
    </div>
    
)}
