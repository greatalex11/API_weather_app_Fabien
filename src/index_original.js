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

const firstC = document.getElementById("gdMeteoIcone").firstChild;

/**
 *
 *       INSERTION DE LA GRANDE ICONE METEO - PAGE MAIN
 *
 */

const gdIcone = document.createElement("img");
gdIcone.src = "/assets/meteo/gd_soleil.png";
firstC.before(gdIcone); // insertion gde img meteo avant span //

/**
 *                RECUP VALEUR CHAMP POUR RECHERCHE API GEOCODING
 *
 *
 **/

const searchVille = document.querySelector("input");
const validateVille = document.querySelector("button");

validateVille.addEventListener("click", recupValue);

function recupValue() {
  let ville = searchVille.value; //recup valeur ville saisie si click bouttp,
  console.log(ville);
  if (ville == "") {
    ville = "Besancon"; //valeur par défaut : besançon
    searchVille.placeholder = ville;
  }
  let villeLatLon = getLatitudeLongitude(ville);
}
/**
 *                                  FETCH API GEOCODING
 *
 *
 **/ /*{country code}*/

console.log();
/*.then.catch((err) => console.log("Request Failed", err)); // Catch errors*/

/**
 *                                        FETCH API METEO
 *
 *
 **/
/*
  fetch(
    `http://api.openweathermap.org/data/2.5/forecast?lat=${villeLatLon.latitude}&${villeLatLon.longitude}&appid=0ecf229967bee135b64207c0a18df389`
  )
    .then((response) => response.json()) // convert to json
    .then((json) => console.log(json)) //print data to console
    .catch((err) => console.log("Request Failed", err)); // Catch errors
  console.log(latiVille);
}*/

/**
 *                FETCH API GEOCODING
 *
 *
 **/ /*{country code}*/

fetch(
  `http://api.openweathermap.org/geo/1.0/direct?q=${ville},fr&limit=5&appid=0ecf229967bee135b64207c0a18df389`,
  console.log(ville)
)
  .then((response) => response.json()) // convert to json
  .then((json) => console.log(json)) //print data to console
  .catch((err) => console.log("Request Failed", err)); // Catch errors

/**
 *                FETCH API METEO
 *
 *
 **/

let response;
/*
fetch(
  "http://api.openweathermap.org/data/2.5/forecast?id=524901&appid=0ecf229967bee135b64207c0a18df389"
)
  .then((response) => response.json()) // convert to json
  .then((json) => console.log(json)) //print data to console
  .catch((err) => console.log("Request Failed", err)); // Catch errors
*/
