/**
 *
 *        RECUPERATION CHOIX DES 6 ICONES - PAGE CHOOSE
 *
 **/

// const assetsButtons = document.getElementById("choixEntrePlusieursIcon");
// console.log(assetsButtons);

const choixButton = document.querySelectorAll("Button");

for (let i = 0; i < choixButton.length; i++) {
  let beta = choixButton[i].addEventListener("click", quelBouton);
  console.log(beta);
  function quelBouton() {
    console.log(choixButton[i].value);
  }
}
