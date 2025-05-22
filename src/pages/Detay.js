import  { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";


const Detay = () => {
  const { state } = useLocation();
  const { name } = state; // Read values passed on state
  const [data, setData] = useState({});

  const apiKey = process.env.REACT_APP_WEATHER_API_KEY;
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${name}&units=metric&appid=${apiKey}&lang=tr`;

 useEffect(() => {
  axios.get(url)
    .then((response) => {
      setData(response.data);
      console.log(response.data);;
    })
    .catch((error) => {
      console.error("API Error:", error);
      setData({ error: "Veri alınırken bir hata oluştu." });
    });
}, [url]);

  const navigate = useNavigate();

  const haritaGit = () => {
   
    navigate(`/`);
          
    
      };
      const listeGit = () => {
   
        navigate(`/liste`);
              
        
          };

  return (
    <div className="relative mx-auto bg-sunset bg-no-repeat bg-center bg-cover min-h-screen text-white font-bold px-4 py-6">
  <div className="flex space-x-4 justify-center mb-6">
    <div
      className="text-md px-5 py-2 inline-flex items-center justify-center 
                 font-semibold rounded-md bg-blue-500 bg-opacity-50 text-white 
                 hover:bg-blue-600 hover:bg-opacity-90 transition-all ease-in-out duration-300 
                 shadow-md hover:shadow-lg cursor-pointer transform hover:scale-105"
      onClick={haritaGit}
    >
     🌍 Harita Görünümü
    </div>
    <div
      className="text-md px-5 py-2 inline-flex items-center justify-center 
                 font-semibold rounded-md bg-blue-500 bg-opacity-50 text-white 
                 hover:bg-blue-600 hover:bg-opacity-90 transition-all ease-in-out duration-300 
                 shadow-md hover:shadow-lg cursor-pointer transform hover:scale-105"
      onClick={listeGit}
    >
      <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 6h14M5 12h14M5 18h14" />
  </svg>
      Liste Görünümü
    </div>
  </div>

  <div className="max-w-3xl mx-auto rounded-lg shadow-xl bg-white/20 backdrop-blur-md p-6">
    <div className="text-4xl text-center text-white mb-8">
      <p>{data.name}</p>
      <div className="text-7xl mt-4">
        {data.main ? <h1>{data.main.temp.toFixed()}°C</h1> : null}
      </div>
      <div className="text-xl mt-2 uppercase">
        {data.weather ? <p>{data.weather[0].description}</p> : null}
        
      </div>
    </div>

    {data.name && (
      <div className="flex justify-around bg-white/10 backdrop-blur-md rounded-lg py-4">
        <div className="text-center">
          {data.main && <p className="font-bold text-xl">{data.main.feels_like.toFixed()}°C</p>}
          <p className="text-sm">HİSSEDİLEN</p>
        </div>
        <div className="text-center">
          {data.main && <p className="font-bold text-xl">{data.main.humidity}%</p>}
          <p className="text-sm">NEM</p>
        </div>
        <div className="text-center">
          {data.wind && <p className="font-bold text-xl">{data.wind.speed.toFixed()} M/S</p>}
          <p className="text-sm">RÜZGAR HIZI</p>
        </div>
      </div>
    )}
  </div>
</div>
  );
};

export default Detay;
