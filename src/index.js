function getData() {
  getVille();
  getLatitudeLongitude(ville);
  getMeteo();
}
const validateVille = document.querySelector("button");
const searchVille = document.querySelector("input");

validateVille.addEventListener("click", getData);

/**
 *
 *                          RECUP VALEUR CHAMP POUR RECHERCHE API GEOCODING
 *
 **/

function getVille() {
  let ville = searchVille.value; //recup valeur ville saisie si click bouttp*/

  if (!ville) {
    ville = "Besancon"; //valeur par défaut : besançon
    searchVille.placeholder = ville;
  }

  let villeLatLon = getLatitudeLongitude(ville);
}

/**
 *                                   FETCH API GEOCODING
 *
 *
 **/

/*{country code}*/

function getLatitudeLongitude(ville) {
  fetch(
    `http://api.openweathermap.org/geo/1.0/direct?q=${ville},fr&limit=5&appid=0ecf229967bee135b64207c0a18df389`
  )
    .then((response) => response.json()) // convert to json
    /*.then((json) => console.log(json)) //print data to console*/

    .then((response) => {
      for (let i = 0; i < response.length; i++) {
        let latiVille = response[0].lat;
        let longiVille = response[0].lon;
        let result = {
          latitude: latiVille,
          longitude: longiVille,
        };
        return result;
      }
    });
}

/**
 *                                      FETCH API METEO
 *
 *
 **/

function getMeteo(villeLatLon) {
  fetch(
    `http://api.openweathermap.org/data/2.5/forecast?lat=${villeLatLon.latitude}&${villeLatLon.longitude}&appid=0ecf229967bee135b64207c0a18df389`
  )
    .then((response) => response.json()) // convert to json
    .then((json) => console.log(json)) //print data to console
    .catch((err) => console.log("Request Failed", err)); // Catch errors
  console.log(latiVille);
}

/**
 *
 *       INSERTION DE LA GRANDE ICONE METEO - PAGE MAIN
 *
 **/

const firstC = document.getElementById("gdMeteoIcone").firstChild;
const gdIcone = document.createElement("img");
gdIcone.src = "/assets/meteo/gd_soleil.png";
firstC.before(gdIcone); // insertion gde img meteo avant span //

/*

console.log();
.then.catch((err) => console.log("Request Failed", err)); // Catch errors


fetch(
  `http://api.openweathermap.org/geo/1.0/direct?q=${ville},fr&limit=5&appid=0ecf229967bee135b64207c0a18df389`,
  console.log(ville)
  )
  .then((response) => response.json()) // convert to json
  .then((json) => console.log(json)) //print data to console
  .catch((err) => console.log("Request Failed", err)); // Catch errors
  
  let response;
  
  fetch(
    "http://api.openweathermap.org/data/2.5/forecast?id=524901&appid=0ecf229967bee135b64207c0a18df389"
    )
    .then((response) => response.json()) // convert to json
    .then((json) => console.log(json)) //print data to console
    .catch((err) => console.log("Request Failed", err)); // Catch errors
    */
