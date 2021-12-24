let weather ={
"apikey": "92167c1b9d7455bcfcad691edc4cf1c8",
fetchweather: function(city){
    fetch("https://api.openweathermap.org/data/2.5/weather?q="+ city +"&units=metric&appid="+ this.apikey ) .then((resp)=>{
  return  resp.json()} ).then((resp)=>{  console.log(resp);
    const  temp = resp.main.temp;
    const  description =resp.weather[0].description;
    const humidity =resp.main.humidity;
    const wind = resp.wind.speed;
      const temp1=document.querySelector(".temp");
      const description1 = document.querySelector(".descript");
      const humidity1=document.querySelector(".descript");
      const wind1= document.querySelector(".wind");
         temp.textContent=temp1 + "°C";
         description1.textContent=description;
         humidity1.textContent= "Humidity :" + humidity +"%";
         wind1.textContent="Wind speed :" + wind + "km/h";

  }
);
},
};
const buton = document.querySelector("#but");
const text =document.querySelector(".search-bar");

  buton.addEventListener('click', ()=> {
  const wet=document.querySelector(".city");
  wet.textContent="Wether in" + text.value;
  weather.fetchweather(text.value);
 });
