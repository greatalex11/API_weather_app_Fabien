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
console.log(searchVille);
validateVille.addEventListener("click", recupValue);

function recupValue() {
  let ville = searchVille.value; //recup valeur ville saisie si click bouttp,
  if (ville == "") {
    ville = "Besancon"; //valeur par défaut : besançon
    searchVille.placeholder = ville;
  }
}
/**
 *                FETCH API GEOCODING
 *
 *
 **/

/**
 *                FETCH API METEO
 *
 *
 **/

let response;

fetch(
  "http://api.openweathermap.org/data/2.5/forecast?id=524901&appid=0ecf229967bee135b64207c0a18df389"
)
  .then((response) => response.json()) // convert to json
  .then((json) => console.log(json)) //print data to console
  .catch((err) => console.log("Request Failed", err)); // Catch errors
console.log(response);
