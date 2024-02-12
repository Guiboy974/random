const bountonRandom = document.querySelector(".btn-random");

function RandCountry() {
    let country = ["Chinois","Francais","Italien","Japonais","Mexicain","Thailandais"];
    let random = country[Math.floor(Math.random()*country.length)];
    document.getElementById('repas').innerHTML = "on mange " + random;
}
bountonRandom.addEventListener ("click", RandCountry)
