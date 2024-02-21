const bountonRandom = document.querySelector(".btn-random");

function RandCountry() {
    let country = ["Chinois","Francais","Italien","Japonais","Mexicain","Thailandais"];
    let random = country[Math.floor(Math.random()*country.length)];
    document.getElementById('repas').innerHTML = "on mange " + random;

    switch (random) {
        case "Chinois":
        console.log("riz cantonais, sauté de nouille, ...");
        break;
        case "Francais":
        console.log("risotto, raclette, boeuf bourguignon, ...");
        break;
        default:
        console.log(`Désolé, nous n'avons rien à vous proposé pour le menu ${random}.`);
    }
}
bountonRandom.addEventListener ("click", RandCountry)

    
    
