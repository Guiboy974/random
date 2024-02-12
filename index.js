function RandCountry(array) {
    let rand = Math.random()*country.length | 0;
    let rValue = array[rand];
    return rValue;
}

let country = ["Chine","France","Italie","Japon","Mexique","Thailande"];
let rValue = RandCountry(country)



