import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";


const Detay = () => {
  const { state } = useLocation();
  const { name } = state; // Read values passed on state
  const [data, setData] = useState({});

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${name}&units=imperial&appid=adb5942a7f550eb7e9c315aae4f964ec`;

  useEffect(() => {
    axios.get(url).then((response) => {
      setData(response.data);
      console.log(response.data);
    });
  }, []);

  const navigate = useNavigate();

  const haritaGit = () => {
   
    navigate(`/`);
          
    
      };
      const listeGit = () => {
   
        navigate(`/liste`);
              
        
          };

  return (
    <div className="bg-sunset h-screen bg-sunset bg-no-repeat bg-center  bg-cover  ">
      <div className="text-xl px-2 p-1 inline-flex text-2xl leading-5 hover:bg-sky-700 cursor-pointer
                      font-semibold rounded-full bg-blue-300 text-white-800"  onClick={haritaGit}>Harita</div>
      <div className="text-xl px-2 p-1 inline-flex text-2xl leading-5 hover:bg-sky-700 cursor-pointer
                      font-semibold rounded-full bg-blue-300 text-white-800"   onClick={listeGit}>Liste</div>
      <div class="max-w-3xl max-h-96 mx-auto  rounded-lg shadow-md bg-sky-500/[.16] dark:bg-gray-800 dark:border-gray-700">
        <div className=" relative mx-auto   text-white font-bold  ">
          <div className="container mx-auto    h-screen flex flex-col space-y-[100px]">
            <div className="text-5xl text-center ">
              <div className="location text-black">
                <p>{data.name}</p>
              </div>
              <div className="text-9xl mt-5 text-black">
                {data.main ? <h1>{data.main.temp.toFixed()}°F</h1> : null}
              </div>
              <div className="relative float-right rotate-[270deg] text-xl ">
                {data.weather ? <p>{data.weather[0].main}</p> : null}
              </div>
            </div>
            {data.name !== undefined && (
            <div className="flex justify-evenly border rounded-lg p-2  bg-sky-500/[.16]">
              <div className="text-md text-center text-black ">
                {data.main ? (
                  <p className="bold">{data.main.feels_like.toFixed()}°F</p>
                ) : null}
                <p>HİSSEDİLEN</p>
              </div>
              <div className="text-md text-center text-black">
                {data.main ? (
                  <p className="bold">{data.main.humidity}%</p>
                ) : null}
                <p>NEM</p>
              </div>
              <div className="text-md text-center text-black">
                {data.wind ? (
                  <p className="bold">{data.wind.speed.toFixed()} MPH</p>
                ) : null}
                <p>RÜZGAR HIZI</p>
              </div>
            </div>
          )}
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Detay;
