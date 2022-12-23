import React, { useEffect, useState } from "react";
import TurkeyMap from "turkey-map-react";
import { Tooltip } from "tooltip";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
 
const Harita = () => {


  const [data, setData] = useState({});
  const [plate, setPlate] = useState("");
  const [location, setLocation] = useState("");


  const navigate = useNavigate();

  const link = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=adb5942a7f550eb7e9c315aae4f964ec`;

  const searchLocation = (cityData) => {
    setLocation(cityData.name);
   setPlate(cityData.plateNumber);

  
   navigate(`/detay/${cityData.plateNumber}`, { state: { name: cityData.name , plaka:cityData.plateNumber
} });



  };
  const liste = () => {
   
navigate(`liste`);
      

  };

  const renderCity = (cityComponent, cityData) => (
    <Tooltip title={cityData.name} key={cityData.id}>
      {cityComponent}
    </Tooltip>
  );

  useEffect(() => {
    axios.get(link).then((response) => {
      setData(response.data);
      console.log(response.data);
    });
  }, [location]);

  return (
    <div className="relative mx-auto bg-sunset bg-no-repeat bg-center bg-cover text-white font-bold ">
      <div className="px-2 p-1 inline-flex text-xl leading-5 hover:bg-sky-700 cursor-pointer
                      font-semibold rounded-full bg-blue-300 text-black"onClick={liste}>Liste Görünümü</div>
      <div className="container mx-auto h-screen flex flex-col space-y-[100px]">
        <div className="text-2xl text-center ">
          <div className="location">
            <p>{data.name}</p>
          </div>
          <div className="text-9xl">
            {data.main ? <h1>{data.main.temp.toFixed()}°F</h1> : null}
          </div>
          <div className="relative float-right rotate-[270deg] text-xl">
            {data.weather ? <p>{data.weather[0].main}</p> : null}
          </div>
        </div>

        {data.name !== undefined && (
          <div className="flex justify-evenly border rounded-lg  bg-sky-500/[.16]">
            <div className="text-sm text-center ">
              {data.main ? (
                <p className="bold">{data.main.feels_like.toFixed()}°F</p>
              ) : null}
              <p>HİSSEDİLEN</p>
            </div>
            <div className="text-sm text-center">
              {data.main ? <p className="bold">{data.main.humidity}%</p> : null}
              <p>NEM</p>
            </div>
            <div className="text-sm text-center">
              {data.wind ? (
                <p className="bold">{data.wind.speed.toFixed()} MPH</p>
              ) : null}
              <p>RÜZGAR HIZI</p>
            </div>
          </div>
        )}
        <div className="w-4/5  mx-auto">
        <TurkeyMap
        
              showTooltip={renderCity}
              onClick={searchLocation}
              customStyle={{ idleColor: "black", hoverColor: "blue" }}
            />
        </div>
      </div>
    </div>
  );
};

export default Harita;
