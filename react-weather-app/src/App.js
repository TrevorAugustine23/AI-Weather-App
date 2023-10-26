import './App.css';
import UilReact from '@iconscout/react-unicons/icons/uil-react'
import TopButtons from './components/TopButtons';
import Inputs from './components/Inputs';
import TimeandLocation from './components/TimeandLocation';
import TemperatureandDetails from './components/TemperatureandDetails';
import Forecast from './components/Forecast';
import getWeatherData from './services/weatherService';
import getFormattedWeatherData from './services/weatherService';
import { useEffect, useState } from 'react';

function App() {

  const [query, setQuery] =  useState({q: 'berlin'})
  const [units, SetUnits] =  useState('metric')
  const [weather, setWeather] =  useState(null)

  useEffect(() => {
    const fetchWeather = async () => {
      await getFormattedWeatherData({...query, units}).then(
        (data) => {
        setWeather(data);
      });
      
    };

    fetchWeather();
  }, [query, units]);

  return (
   <div className="mx-auto max-w-screen-md mt-4 py-5 px-32 bg-gradient-to-br from-cyan-700 h-fit shadow-xl shadow-gray-400">
    <TopButtons/>
    <Inputs/>

    
      <div>
       <TimeandLocation/>
       <TemperatureandDetails/>
   
   
       <Forecast title="Hourly forecast"/>
       <Forecast title="Daily forecast"/>
      </div>

    
   

   </div>
  );
}

export default App;
