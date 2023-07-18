import './App.css';
import Card from './components/Card.js';
import { useState } from 'react';
import axios from 'axios';
import Result from './components/Result.js';
function App() {
  const[name,setName] = useState("");
  const[temp,setTemp] = useState("");
  const[desc,setDesc] = useState("");
  const[imgurl,setImgurl] = useState("");
  const findWeather = async () =>{
    const apikey = "1fbe01800f4036e3a260387dc0f557cc";
    const unit = "metric";
    const url = "https://api.openweathermap.org/data/2.5/weather?q=" + name + "&appid=" + apikey + "&units=" + unit;
    const response = await axios.get(url);
    const temp = response.data.main.temp;
    const desc = response.data.weather[0].description;
    const icon = response.data.weather[0].icon;
    const imgurl =  "https://openweathermap.org/img/wn/" + icon + "@2x.png";
    setTemp(temp);
    setDesc(desc);
    setImgurl(imgurl);
    console.log(desc,icon,imgurl);
  }
  return (
    <div className="App">
    {temp === "" ?(
      <Card  name={name} setName={setName} findWeather={findWeather} />
    ):(
      <Result temp={temp} desc={desc} imgurl={imgurl} setTemp={setTemp}/>
    )}
    </div>
  );
}

export default App;
