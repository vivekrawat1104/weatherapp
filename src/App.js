import './App.css';
import Temp from './components/weather/temp.js';
import { Helmet } from 'react-helmet';

function App() {
  return (
    <>
      {/* Set Title of the Website: */}
      <Helmet>
            <title>Weather App</title>
            <meta name="description" content="Weather Application (Live)" />
      </Helmet>
      {/* 1. Call the Temp-Component: */}
      <Temp/>
               
    </>
  );
}

export default App;