// dbb68f54c50c4835943140553241201
const inputFind = document.getElementById("inputFind");
const btnSubmit = document.getElementById("btnSubmit");
const nameToday = document.getElementById("nameToday");
const dataToday = document.getElementById("dataToday");
const countryName = document.getElementById("countryName");
const tempCtoday = document.getElementById("tempCtoday");
const imgWeather = document.getElementById("imgWeather");
const statusWeather = document.getElementById("statusWeather");
const nameTomorrow = document.getElementById("nameTomorrow");
const iconTomorrow = document.getElementById("iconTomorrow");
const maxTempC = document.getElementById("maxTempC");
const minTempC = document.getElementById("minTempC");
const textTomorrow = document.getElementById("textTomorrow");
const nameAfterTomorrow = document.getElementById("nameAfterTomorrow");
const iconAfterTomorrow = document.getElementById("iconAfterTomorrow");
const maxTempCAfterTomorrow = document.getElementById("maxTempCAfterTomorrow");
const minTempCAfterTomorrow = document.getElementById("minTempCAfterTomorrow");
const textAfterTomorrow = document.getElementById("textAfterTomorrow");

let dataWeather = [];
// Get Data API
const getData = async (contoury) => {
  response = await (
    await fetch(
      `https://api.weatherapi.com/v1/forecast.json?key=7d77b96c972b4d119a3151101212704&q=${contoury}&days=3`
    )
  ).json();

  dataWeather = response;
  showData();
};
// ENTER USER CONTRY NAME
let contouryName;
inputFind.addEventListener("input", function () {
  if(  contouryName = inputFind.value){
    getData(contouryName);

  }else(
    getData("cairo")
  )
});

getData("cairo")
// SHOW WEATHER DATA IS HTML
const showData = () => {
  dataToday.innerHTML = transformDateMonth(
    dataWeather?.forecast?.forecastday[0]?.date);
  nameToday.innerHTML = transformDate(dataWeather?.forecast?.forecastday[0]?.date);
  countryName.innerHTML = dataWeather?.location?.name;
  tempCtoday.innerHTML = dataWeather?.current?.temp_c + `<sup>o</sup>C`;
  imgWeather.setAttribute("src", dataWeather?.current?.condition?.icon);
  statusWeather.innerHTML = dataWeather?.current?.condition?.text;

  nameTomorrow.innerHTML = transformDate(dataWeather?.forecast?.forecastday[1]?.date);
  iconTomorrow.setAttribute("src",dataWeather?.forecast?.forecastday[1]?.day?.condition?.icon);
  maxTempC.innerHTML = dataWeather?.forecast?.forecastday[1]?.day?.maxtemp_c + `<sup>o</sup>C`;
  minTempC.innerHTML = dataWeather?.forecast?.forecastday[1]?.day?.mintemp_c + `<sup>o</sup>`;
  textTomorrow.innerHTML = dataWeather?.forecast?.forecastday[1]?.day?.condition?.text;

  nameAfterTomorrow.innerHTML = transformDate(dataWeather?.forecast?.forecastday[2]?.date);
  iconAfterTomorrow.setAttribute("src", dataWeather?.forecast?.forecastday[2]?.day?.condition?.icon );
  maxTempCAfterTomorrow.innerHTML = dataWeather?.forecast?.forecastday[2]?.day?.maxtemp_c + `<sup>o</sup>C`;
  minTempCAfterTomorrow.innerHTML = dataWeather?.forecast?.forecastday[2]?.day?.mintemp_c + `<sup>o</sup>`;
  textAfterTomorrow.innerHTML = dataWeather?.forecast?.forecastday[2]?.day?.condition?.text;


};
// TRANSFORM DATE TO NAME
function transformDate(date) {
  let dateObj = new Date(date);
  const dayName = dateObj.toLocaleDateString("en-US", { weekday: "long" });
  return dayName;
}

// Assuming dateStr is in the format 'YYYY-MM-DD'
function transformDateMonth(dateStr) {
  var dateObject = new Date(dateStr);

  // Extract day number and month
  var dayNumber = dateObject.getDate();
  var month = new Intl.DateTimeFormat("en-US", { month: "long" }).format(
    dateObject
  );

  return `${dayNumber} ${month}`;
}

btnSubmit.addEventListener("click" , function(){
    inputFind.value = "";
    getData("cairo")

})

// function currentWeather(){



// }

// // التحقق مما إذا كان المتصفح يدعم Geolocation
// if (navigator.geolocation) {
//   // الحصول على الموقع الحالي للمستخدم
//   navigator.geolocation.getCurrentPosition(
//     function (position) {
//       // استخدام البيانات الجغرافية
//       var latitude = position.coords.latitude;
//       var longitude = position.coords.longitude;

//       console.log("Latitude: " + latitude + ", Longitude: " + longitude);
//     },
//     function (error) {
//       // في حالة حدوث خطأ
//       console.error("Error getting geolocation: " + error.message);
//     }
//   );
// } else {
//   // إشعار إذا لم يكن المتصفح يدعم Geolocation
//   console.error("Geolocation is not supported by this browser.");
// }
