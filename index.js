const bountonRandom = document.querySelector(".btn-random");

function RandCountry() {
    let country = ["Chinois","Francais","Italien","Japonais","Mexicain","Thailandais"];
    let random = country[Math.floor(Math.random()*country.length)];
    document.getElementById('repas').innerHTML = "on mange " + random;

    switch (random) {
        case "Chinois":
            document.getElementById('menu').innerHTML = "riz cantonais, sauté de nouille, ...";
        break;
        case "Francais":
            document.getElementById('menu').innerHTML = "risotto, raclette, boeuf bourguignon, ...";
        break;
        default:
            document.getElementById('menu').innerHTML = `Désolé, nous n'avons rien à vous proposé pour le menu ${random}.`;
        // la suite a faire
    }
}
bountonRandom.addEventListener ("click", RandCountry)

    
    
