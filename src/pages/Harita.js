import { useEffect, useState } from "react";
import TurkeyMap from "turkey-map-react";
import { Tooltip } from "react-tooltip";
import axios from "axios";
import { useNavigate } from "react-router-dom";


const Harita = () => {
  const [location, setLocation] = useState("");

  const navigate = useNavigate();
  const apiKey = process.env.REACT_APP_OPENWEATHER_API_KEY;
  const link = location
    ? `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=${apiKey}&lang=tr`
    : "";

  const searchLocation = (cityData) => {
    setLocation(cityData.name);

    navigate(`/detay/${cityData.plateNumber}`, {
      state: { name: cityData.name, plaka: cityData.plateNumber },
    });
  };
  const liste = () => {
    navigate(`liste`);
  };

  const renderCity = (cityComponent, cityData) => (
    <Tooltip 

    title={cityData.name} key={cityData.id}>
      {cityComponent}
    </Tooltip>
  );

  useEffect(() => {
    if (!link) return; // link boşsa istek yapılmaz
    axios.get(link).then((response) => {
      console.log(response.data);
    });
  }, [link]); // Burada link'i bağımlılık dizisine ekledik

  return (
    <div className="flex flex-col items-center justify-center relative min-h-screen bg-sunset bg-no-repeat bg-center bg-cover text-white font-bold p-1">
      {/* Buton */}
      <div className="flex justify-center mb-6">
        <button
          onClick={liste}
          className="text-lg px-5 psy-2 inline-flex items-center justify-center 
                 font-semibold rounded-md bg-blue-500 bg-opacity-50 text-white 
                 hover:bg-blue-600 hover:bg-opacity-90 transition-all ease-in-out duration-300 
                 shadow-md hover:shadow-lg cursor-pointer transform hover:scale-105"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 6h14M5 12h14M5 18h14"
            />
          </svg>
          Liste Görünümü
        </button>
      </div>

      {/* Harita */}
      <div className="container mx-auto flex flex-col items-center justify-center">
        <div className="w-full  bg-white bg-opacity-10 rounded-lg shadow-lg backdrop-blur-sm">
          <TurkeyMap
            showTooltip={renderCity}
            onClick={searchLocation}
            customStyle={{ idleColor: "#1e293b", hoverColor: "#3b82f6" }} // Tailwind slate-800 & blue-500
          />
        </div>
      </div>
    </div>
  );
};

export default Harita;
