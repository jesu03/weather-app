import './App.css';
import Card from './components/Card.js';
import { useState } from 'react';
import axios from 'axios';
function App() {
  const[name,setName] = useState("");
  const findWeather = async () =>{
    const apikey = "1fbe01800f4036e3a260387dc0f557cc";
    const unit = "metric";
    const url = "https://api.openweathermap.org/data/2.5/weather?q=" + name + "&appid=" + apikey + "&units=" + unit;
    const response = await axios.get(url);
    console.log(response);
  }
  return (
    <div className="App">
    <Card  name={name} setName={setName} findWeather={findWeather}/>
    </div>
  );
}

export default App;
