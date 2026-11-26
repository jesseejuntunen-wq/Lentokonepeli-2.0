const scores = [];
const box = document.getElementById("scoreboard");
const lista = document.getElementById("scoreboard-lista");

box.style.display = "none";

function paivitaLista() {
    lista.innerHTML = scores.length
        ? [...scores]
            .sort((a, b) => b.pisteet - a.pisteet)
            .map((t) => `<li>${t.nimi} - ${t.pisteet}</li>`)
            .join("")
        : "<li>Ei vielä tuloksia</li>";
}

function pelaaPeli() {
    let pisteet = 0;
    //tähän pelikoodi jotenki sit miro
    return pisteet;
}

document.getElementById("play").onclick = () => {
    const pisteet = pelaaPeli();
    const nimi = prompt("Peli ohi! Nimesi:")?.trim() || "Nimetön";
    scores.push({ pisteet, nimi });
    paivitaLista();
};

document.getElementById("pisteet").onclick = () => {
    paivitaLista();
    box.style.display = box.style.display === "none" ? "block" : "none";
};