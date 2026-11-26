//connection thru flask

console.log("Haloo toimiiks tää paska")

const playButton = document.querySelector("#play");

playButton.addEventListener("click", async function () {
    console.log("Game started!");


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

});


















