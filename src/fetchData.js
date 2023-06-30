fetch(
  "http://api.openweathermap.org/data/2.5/forecast?id=524901&appid={0ecf229967bee135b64207c0a18df389}"
)
  .then((response) => response.json()) // convert to json
  .then((json) => console.log(json)) //print data to console
  .catch((err) => console.log("Request Failed", err)); // Catch errors
console.log(response);
