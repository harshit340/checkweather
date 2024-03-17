/* /* /* /* const URL = 'https://api.weatherapi.com/v1/forecast.json?key=9d246edb2cbe4bfeb5f192318230711&q=New%20Delhi&days=6&aqi=no&alerts=no'; */

async function fetchData(place){

  /* try{ */
  document.getElementById('citys').innerHTML=place;

    let response = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=9d246edb2cbe4bfeb5f192318230711&q=${place}&days=7&aqi=no&alerts=no`)
    let data = await response.json();
        console.log(data);
        document.getElementById("date").innerHTML = data.location.localtime;
        document.getElementById("temperature").innerHTML = data.current.temp_c + "°";
        document.getElementById("wind").innerHTML = data.current.wind_kph + " km/h";
        document.getElementById("humidity").innerHTML = data.current.humidity;
        document.getElementById("extra").innerHTML = data.forecast.forecastday[1].day.avgtemp_c + "°";
        document.getElementById("extra0").innerHTML = data.forecast.forecastday[2].day.avgtemp_c + "°";
      /*   document.getElementById("extra1").innerHTML = data.forecast.forecastday[3].day.avgtemp_c + "°";
        document.getElementById("extra2").innerHTML = data.forecast.forecastday[4].day.avgtemp_c + "°";
        document.getElementById("extra3").innerHTML = data.forecast.forecastday[5].day.avgtemp_c + "°";
        document.getElementById("extra4").innerHTML = data.forecast.forecastday[6].day.avgtemp_c + "°"; */

   // for forecast dates 

   document.getElementById("date1").innerHTML=data.forecast.forecastday[1].date;
   document.getElementById("date2").innerHTML=data.forecast.forecastday[2].date;
  /*  document.getElementById("date3").innerHTML=data.forecast.forecastday[3].date; */
   /* document.getElementById("date4").innerHTML=data.forecast.forecastday[4].date;
   document.getElementById("date5").innerHTML=data.forecast.forecastday[5].date;
   document.getElementById("date6").innerHTML=data.forecast.forecastday[6].date;
    */

  if(data.current.condition.text=="Mist"){
    document.getElementById("imageheader").src = `image/fog.png`;
  }
  else if (data.current.condition.text=="Partly cloudy"){
    document.getElementById("imageheader").src = `image/cloudy (1).png`;
  }
  else if (data.current.condition.text== "Overcast"){
    document.getElementById("imageheader").src = `image/cloudy.png`;
  }
  else if (data.current.condition.text=="Cloudy"){
    document.getElementById("imageheader").src = `image/cloudy.png`;
  }
  else if (data.current.condition.text=="Sunny"){
    document.getElementById("imageheader").src = `image/sun.png`;
  }
  else if (data.current.condition.text=="Clear"){
    document.getElementById("imageheader").src = `image/sun.png`;
  }
  else if (data.current.condition.text=="Patchy rain possible"){
    document.getElementById("imageheader").src = `image/cloudy.png`;
  }
  else{
    document.getElementById("imageheader").src = `image/rain.png`;
  }




  let target1 = document.getElementById("image1");
    let target2 = document.getElementById("image2");
    let  target3 = document.getElementById("image3");
    let target4 = document.getElementById("image4");
    let  target5 = document.getElementById("image5");
    let  target6 = document.getElementById("image6");

    
    imageforecast(data.forecast.forecastday[0].day.condition.text,target1);
    imageforecast(data.forecast.forecastday[1].day.condition.text,target2);
    imageforecast(data.forecast.forecastday[2].day.condition.text,target3);
    /* imageforecast(data.forecast.forecastday[3].day.condition.text,target4);
    imageforecast(data.forecast.forecastday[4].day.condition.text,target5);
    imageforecast(data.forecast.forecastday[5].day.condition.text,target6);
 */


}


let imageforecast=(weathercondition,target)=>{
  if(weathercondition=="Mist"){
    target.src = `image/fog.png`;
  }
  else if (weathercondition=="Partly cloudy"){
    target.src = `image/cloudy (1).png`;
  }
  else if (weathercondition== "Overcast"){
    target.src = `image/cloudy.png`;
  }
  else if (weathercondition=="Cloudy"){
    target.src = `image/cloudy.png`;
  }
  else if (weathercondition=="Sunny"){
    target.src = `image/sun.png`;
  }
  else if (weathercondition=="Clear"){
    target.src = `image/sun.png`;
  }
  else if (weathercondition=="Patchy rain possible"){
    target.src = `image/cloudy.png`;
  }
  else{
    target.src = `image/rain.png`;
  }
}



const btn=document.getElementById('search');
const place = document.getElementById('place');
btn.addEventListener('click',(e)=>{
  e.preventDefault()
    fetchData(place.value)/* .catch((error) => {
      console.error("Async Error:", error.code);}); */
    
    
}) ;








