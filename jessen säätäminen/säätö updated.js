console.log("Haloo toimiiks tää paska");

const scores = JSON.parse(localStorage.getItem("villapaitaScores") || "[]");

const playButton = document.querySelector("#play");
const pisteetButton = document.querySelector("#pisteet");

function pelaaPeli() {
    // Korvaa tämä omalla pelilogiikallasi, joka palauttaa lopputuloksen
    let pisteet = 450;
    return pisteet;
}

playButton.addEventListener("click", function () {
    console.log("Game started!");

    const pisteet = pelaaPeli();
    const syote = prompt("Peli ohi! Nimesi:");
    const nimi = syote && syote.trim() ? syote.trim() : "Nimetön";

    scores.push({ pisteet, nimi });
    localStorage.setItem("villapaitaScores", JSON.stringify(scores));
});

pisteetButton.addEventListener("click", function () {
    const ikkuna = window.open("", "Scoreboard", "width=420,height=450");
    if (!ikkuna) {
        alert("Selain esti uuden ikkunan avaamisen. Salli ponnahdusikkunat tälle sivulle.");
        return;
    }

    const jarjestetty = [...scores]
        .sort((a, b) => b.pisteet - a.pisteet)
        .slice(0, 10);

    const rivit = jarjestetty.length
        ? jarjestetty.map((t, i) => `<li>${i + 1}. ${t.nimi} - ${t.pisteet}</li>`).join("")
        : "<li>Ei vielä tuloksia</li>";

    ikkuna.document.open();
    ikkuna.document.write(`
        <!DOCTYPE html>
        <html lang="fi">
        <head>
            <meta charset="UTF-8">
            <title>Scoreboard</title>
            <style>
                body { font-family: Arial, sans-serif; padding: 20px; }
                ol { padding-left: 20px; }
                li { margin-bottom: 6px; }
            </style>
        </head>
        <body>
            <h2>Jessen vitun hieno scoreboard</h2>
            <ol>${rivit}</ol>
        </body>
        </html>
    `);
    ikkuna.document.close();
});