//Selectam elementul h3 
const css = document.querySelector ("h3");
//Selectam imput-urile
const color1 = document.querySelector(".color1");
const color2 = document.querySelector(".color2");
//Selectam body
const body = document.querySelector("#gradient");
//Selectam butonul
const randomBtn = document.querySelector ("#randomBtn");

function setGradient (firstColor, secondColor) {
    //Selectam proprietatea background din body 
    //Setam background-ul la culorile alese
    body.style.background = "linear-gradient(to right, " + firstColor + ", " +secondColor +")";
    css.textContent = body.style.background + ";";

}

function setGradientOnInput (){
    setGradient(color1.value, color2.value);
}


// Returneaza un numar aleatoriu intre 0 si 250
function randomizer() {
    //Math.floor-returneaza cel mai mare numar rotunjit
    //Math.random-returneaza un numar intre 0 si 1
    return Math.floor (Math.random() * Math.floor(250));
}

//Returneaza un text pentru a-l folosi ca background
function randomColor () {
    const randomColor ="rgb("+ randomizer() + "," + randomizer () + "," + randomizer () + ")";
    return randomColor;
}

//Schimba fundalul in functie de valorile random
function setRandomGradient() {
    setGradient(randomColor(), randomColor());
}

randomBtn.addEventListener("click", setRandomGradient);
color1.addEventListener ("input", setGradientOnInput);
color2.addEventListener ("input", setGradientOnInput);


setGradientOnInput();