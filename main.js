const ApiKey='968c445a42697a439803c2564e1854b6';
let apiurl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchbox=document.querySelector(".search input");
const searchbtn=document.querySelector('.search button');
const wicon=document.querySelector('.weathericon');

searchbtn.addEventListener('click',()=>{
  cheackWeather(searchbox.value);
  
})


async function cheackWeather(city){
  const response= await fetch(apiurl+city+`&appid=${ApiKey}`);
  
  if(response.status==404){
    document.querySelector(".error").style.display="block";
  }
  else{
    document.querySelector(".error").style.display="none"
  }
  
  var data = await response.json();
  
  console.log(data);
  document.querySelector('.city').innerHTML=data.name
  document.querySelector('.temp').innerHTML=Math.round(data.main.temp)+'°c';
  document.querySelector('.humidity').innerHTML=data.main.humidity+'%';
  document.querySelector('.wind').innerHTML=data.wind.speed +'km/h';
  
  if(data.weather[0].main=="Clouds"){
    wicon.src="clouds.png";
  }
  else if (data.weather[0].main=="Drizzle"){
    wicon.src="Drizzle.png";
  }
  else if (data.weather[0].main=="Mist"){
    wicon.src="mist.png";
  }
  else if (data.weather[0].main=="Clear"){
    wicon.src="clear.png";
  }
  else if (data.weather[0].main=="Rain"){
    wicon.src="rain.png";
  }
  
  document.querySelector(".weather").style.display="block";
  
}
