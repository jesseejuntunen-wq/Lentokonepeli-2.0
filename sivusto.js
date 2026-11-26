console.log("Haloo toimiiks tää paska")

<<<<<<< HEAD
const playButton = document.querySelector("#play");

playButton.addEventListener("click", function () {
    console.log("Game started!");
});
=======
















//tähän piste paskat jippii
const scores = []; 

const pisteet = 450; 


const syote = prompt("Peli ohi! Nimesi:");
const nimi = syote && syote.trim() ? syote.trim() : "Nimetön";

scores.push({ pisteet, nimi });

const jarjestetty = [...scores].sort((a, b) => b.pisteet - a.pisteet);

console.log("--- SCOREBOARD ---");
jarjestetty.forEach((tulos, indeksi) => {
  console.log(`${indeksi + 1}. ${tulos.nimi} - ${tulos.pisteet}`);
});


//laita loppuun miron pisteet max 10








>>>>>>> ef6c464 (Omat muutokset)
