/**
 *
 *                                                 EXTRACTION DES DATA WEATHER
 *
 **/

function getMeteoObjByJson(myarray) {
  console.log(myarray);

  let data = new Array();

  for (let i = 0; i < 40; i++) {
    if (myarray[i].dt_txt.includes("12:00:00")) {
      let date_txt = myarray[i].dt_txt;
      let description = myarray[i].weather[0].description;
      let url4j;
      let returndata = {
        date: date_txt,
        description: description,
      };

      data.push(returndata); //l'un derrrière l'autre//
    }
  }
  return data;
}

/**                             CODE FONCTIONNEL - ARBRE A FONCTION TRONQUE - PORTEE LATLON HORS SCOP
 *                                   FONCTION METEO INTEGREE DIRECTEMENT EN SORTIE DE GEOCODE
 *
 *
 **/

/**
 *
 *                                        INSERTION DE LA GRANDE ICONE METEO - PAGE MAIN
 *
 **/

const firstC = document.getElementById("gdMeteoIcone").firstChild;
const gdIcone = document.createElement("img");
gdIcone.src = "/assets/meteo/gd_soleil.png";
firstC.before(gdIcone); // insertion gde img meteo avant span //

/**
 *
 *                                "L'ARBRE A FONCTIONS" - STRUCTURE PRINCIPALE PRG - PAGE MAIN
 *
 **/

function getData() {
  let ville = getVille();
  let latlon = getLatitudeLongitude(ville);

  /*let result = getMeteo(latlon);*/
}
const validateVille = document.querySelector("button");
const searchVille = document.querySelector("input");

validateVille.addEventListener("click", getData);

/**
 *
 *                                      RECUP VALEUR CHAMP POUR RECHERCHE API GEOCODING
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
 *                                                      FETCH API GEOCODING
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
      console.log(latlon);

      /**
       *                                                   FETCH API METEO
       *
       *
       **/

      meteo(latlon);

      function meteo(latlon) {
        fetch(
          `http://api.openweathermap.org/data/2.5/forecast?lat=${latlon.latitude}&lon=${latlon.longitude}&appid=0ecf229967bee135b64207c0a18df389&units=metric`
        )
          .then((response) => response.json()) // convert to json//
          /*.then((json) => console.log(json)); //print data to console// */
          .then((response) => {
            console.log(response);
            let city = response["city"]["name"];
            let country = response["city"]["country"];
            let dateJ = response["list"][0]["dt_txt"];
            let tempJ = response["list"][0]["main"]["temp"];
            let weatherJ = response["list"][0]["weather"][0]["description"];
            console.log(city, country, dateJ, tempJ, weatherJ);

            let cityLabel = document.querySelector("#ville");
            cityLabel.innerHTML = city;

            let affichageTemperature = document.querySelector(
              "#gdMeteoIcone > span"
            );
            affichageTemperature.innerHTML = tempJ.toFixed(1) + "°";

            /**
             *                                 TABLE ASSOCIATION ICONE_URL
             *
             *
             **/

            let description = [
              "clear sky",
              "few clouds",
              "scattered clouds",
              "broken clouds",
              "shower rain",
              "rain",
              "thunderstorm",
              "snow",
              "mist",
            ];
            let urlIcon = [
              "./assets/meteo/gd_soleil",
              "./assets/meteo/gd_clairci",
              "./assets/meteo/gd_nuageux",
              "./assets/meteo/gd_nuageux",
              "./assets/meteo/gd_nuageux",
              "./assets/meteo/gd_pluie",
              "./assets/meteo/gd_nuageux",
              "./assets/meteo/gd_neige",
              "./assets/meteo/gd_neige",
            ];

            let assoUrlIcon = new Array(description, urlIcon);
            console.table(assoUrlIcon);

            console.log(assoUrlIcon[0][0]);
            console.log(assoUrlIcon[1][0]); // ok! mais pas en fonction de la ville mais tu array//

            let findIcone = assoUrlIcon[0].findIndex(
              (element) => element === weatherJ
            );
            console.log(findIcone); // ok! //
            console.log(weatherJ); // ok! //

            let sourceUrlGdeIcone = null;
            sourceUrlGdeIcone = assoUrlIcon[1][findIcone]; //  variable de récupération de l'url icone  //
            console.log(sourceUrlGdeIcone);

            /*let selectNewArray = getULR4j(assoUrlIcon);*/

            /*
            const firstC = document.getElementById("gdMeteoIcone").firstChild;
            const gdIcone = document.createElement("img");
            gdIcone = sourceUrlGdeIcone;
            firstC.before(gdIcone); // insertion gde img meteo avant span // */

            /**
             *                                 TABLE PREVISIONNEL
             *
             *
             **/

            let monObjet = getMeteoObjByJson(response["list"]);
            console.log(monObjet);
          });
      }
    });
}

//                                              IA    url grande icone                                 //

/*let urlCorrespondant = null;

            for (let j = 0; j < assoUrlIcon.length; j++) {
              let description2 = assoUrlIcon[0][j];
              let url = assoUrlIcon[1][j];

              console.log(description2); //ok indique bien 1&2L 1C//
              console.log(url);

              if (description2 === weatherJ) {
                urlCorrespondant = url;
                console.log(urlCorrespondant); // null !!
              }
            }*/
