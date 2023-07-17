# Weather_App

[![forthebadge](http://forthebadge.com/images/badges/built-with-love.svg)](http://forthebadge.com)

[![forthebadge](http://forthebadge.com/images/badges/powered-by-electricity.svg)](http://forthebadge.com)

L'objectif du projet est de développer une application web météo au format mobile.
Le cahier des charges spécifiant certaines contraintes ou attentes particulières a servi de point de départ.
A la suite de quoi une maquette graphique a put être réaliser.
En quelques mots, l'exploitation de relevés méteos en fonction de recherches faites par l'utilisateur seront graphiquement représentées selon les standards du néomorphologisme ou du glassmorphisme.

## Pour commencer

Cette application renvoie des données issues de l'API "OpenWeather" disponible en version gratuite sur le site https://openweathermap.org/

A titre informatif, la formule gratuite offre une possibilité de 1'000 requêtes/ jour ; au-delà un message de type "code 429" informe du dépassement de cette limite. L'API se bloque durant un certains délai et redevient disponible au delà de ce temps d'arrêt.

Principe de fonctionnement : la chaine de caractéres récupérée dans le champ "ville choisie" est renvoyée une première fois à l'API afin d'obtenir la latitude et longitude de la ville. Ces valeurs ansi récupérées sont de nouveau renvoyées à l'API par le biais d'une requête fetch().
Les données retournées dans la réponse suivent un processus de traitement et d'affichage afin d'offir à l'utilisateur les meilleures informamtions.

### Pré-requis

Aucun pré-requis

### Installation

Copiez les dossiers src/ et assets/ dans un dossier créé au préalable.
Suivant l'environnement de travail, ce dossier peut être enregister :

- dans le dossier www de Apache
- ou bien dans votre espace de stockage favoris pour une exploitation sous VS Code par exemple

- l'applicaiton peut également être executée en cliquant sur l'icone "index.html"
  disponible dans le dossier src/ - icone de votre navigateur en visuel

## Démarrage

L'écran principal s'affiche : vous pouvez désormais faire votre recherche.

- veuillez saisir le nom d'une ville de votre choix dans la fenêtre "Ville choisie" et cliquez sur la loupe pour afficher le résultat météo
- Ou appuyez sur le bouton "random" situé en bas à droite pour un affichage aléatoire.

Météo du jour affichée en haut de l'écran & prévisionnel sur 4 jours en affichage médian.

## Fabriqué avec

Editeur de code utilisé :

![VS Code Insiders](https://img.shields.io/badge/VS%20Code%20Insiders-35b393.svg?style=for-the-badge&logo=visual-studio-code&logoColor=white)

Langage de programmation :

![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)

![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)

![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)

## Versions

Dernière version stable : commit n°d80997d du 17 juillet 2023

https://github.com/greatalex11/weather_app_Fabien.git

## Auteurs

Développement : Alexandre GUERILLOT.

Contrôle/ assistance technique: Emmanuel ROY.
