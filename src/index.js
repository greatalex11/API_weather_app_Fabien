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
  let latlon = getLatitudeLongitude(ville);
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
//creation objet latlon, easy to pass values

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
  return latlon;
}

/**
 *                                      FETCH API METEO
 *
 *
 **/

async function getMeteo(latlon) {
  console.log(latlon);
  await fetch(
    `http://api.openweathermap.org/data/2.5/forecast?lat=${latlon.latitude}&${latlon.longitude}&appid=0ecf229967bee135b64207c0a18df389`
  );
  console
    .log(latlon.latitude)
    .then((response) => response.json()) // convert to json//

    .then((response) => {});

  //.then((json) => console.log(json)); print data to console//
  //.catch((err) => console.log("Request Failed", err));  Catch errors//

  return result;
}
