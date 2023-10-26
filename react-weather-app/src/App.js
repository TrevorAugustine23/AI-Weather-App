import './App.css';
import UilReact from '@iconscout/react-unicons/icons/uil-react'
import TopButtons from './components/TopButtons';
import Inputs from './components/Inputs';
import TimeandLocation from './components/TimeandLocation';
import TemperatureandDetails from './components/TemperatureandDetails';
import Forecast from './components/Forecast';

function App() {
  return (
   <div className="mx-auto max-w-screen-md mt-4 py-5 px-32 bg-gradient-to-br from-cyan-700 h-fit shadow-xl shadow-gray-400">
    <TopButtons/>
    <Inputs/>

    <TimeandLocation/>
    <TemperatureandDetails/>


    <Forecast title="Hourly forecast"/>
    <Forecast title="Daily forecast"/>

   </div>
  );
}

export default App;
