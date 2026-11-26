console.log("Haloo toimiiks tää paska")



try {
    const response = await fetch(
        "http://127.0.0.1:5000/api/start",
        {
            method: "POST"
        }
    );

    const data = await response.json();

    console.log(data);

} catch (error) {
    console.error("Connection error:", error);
}

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








