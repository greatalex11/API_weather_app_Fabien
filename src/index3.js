/**
 *
 *                     INSERTION DE LA GRANDE ICONE METEO - PAGE MAIN
 *
 **/

const firstC = document.getElementById("gdMeteoIcone").firstChild;
const gdIcone = document.createElement("img");
gdIcone.src = "/assets/meteo/gd_soleil.png";
firstC.before(gdIcone); // insertion gde img meteo avant span //

/**
 *
 *                      "L'ARBRE A FONCTIONS" - STRUCTURE PRINCIPALE PRG - PAGE MAIN
 *
 **/

function getData() {
  let ville = getVille();
  var latlon = getLatitudeLongitude(ville);
  console.log(latlon.latitude);
  let result = getMeteo(latlon);
}
const validateVille = document.querySelector("button");
const searchVille = document.querySelector("input");

validateVille.addEventListener("click", getData);

/**
 *
 *                       RECUP VALEUR CHAMP POUR RECHERCHE API GEOCODING
 *
 **/

function getVille(ville) {
  ville = searchVille.value;
  if (ville == "") {
    ville = "Besancon"; //valeur par défaut : besançon
    return ville;
  } else {
    return ville;
  }
}

/**
 *                                   FETCH API GEOCODING
 *
 *
 **/

/*{country code}*/
//creation objet latlon, easy to pass values//

async function getLatitudeLongitude(ville) {
  await fetch(
    `http://api.openweathermap.org/geo/1.0/direct?q=${ville},fr&limit=5&appid=0ecf229967bee135b64207c0a18df389`
  )
    .then((response) => response.json()) // convert to json//
    /*.then((json) => console.log(json)) //print data to console// */
    .then((response) => {
      i = 0;
      //for (let i = 0; i < response.length; i++) { qd je traiterai une liste de résultat//
      let latiVille = response[i].lat;
      let longiVille = response[i].lon;

      latlon = {
        latitude: latiVille,
        longitude: longiVille,
      };
    });
  console.log(latlon);
  return latlon;
}
/**
 *                                      FETCH API METEO
 *
 *
 **/

async function getMeteo(latlon) {
  //setTimeout(alert, 1000, "Message d'alerte après 2 secondes");//

  console.log(latlon.latitude);

  let url = `http://api.openweathermap.org/data/2.5/weather?lat=${latlon.latitude}&lon=${latlon.longitude},fr&appid=0ecf229967bee135b64207c0a18df389&units=metric`;

  await fetch(url)
    .then((response) => response.json())
    .then((response) => {
      i = 0;
      /*for (let i = 0; i < response.length; i++) {*/
      result = response[i];
    });
  return result;
}
