//Variabile
var variabilaMea;

//Definiri noi de variabild
let variabilaMea2 =1;
const variabilaConstanta =1;

//Definirea unor variabile goale
let unu,doi,trei;

//Nedefinit si null
let nedefinit=undefined;
let nul =null;

let number =123; //Numar
let text = 'text'; //Text
let boolean = true; //Boolean

//Array
let lists = [1,  2, 'trei'];

//Accesarea elementelor dintr-o lista
console.log (lists);
console.log (lists.lenght);
console.log(lists[0]);//Acceseaza primul element din lista 

//Obiecte
let obiect ={
    nume:'Ion',
    varsta:49
}
//Lipire text 
let textDoi = 'inca un text'
let textLipit =text+textDoi;
console.log (textLipit);

//Operatii matematice
let adunare = 2 +2;
let scadere = 2-2;
let inmultire = 2*2;
let impartire= 2/2;

//Increment
adunare++;
//Decrement
adunare--;

//Conditionale
if (2<1) {
    console.log ('adevarat')
}
if (1<2) {
    //Daca e adevarat
}
else {
//Daca nu e adevarat
}

//Operatori logici
// SI (&&)
if (1 <3 && 3 > 5){


}


// SAu (||)
if (1<3 ||3>5){


}
// NOT
if (1 !=3) {

}

//Functii 
function adunaDoi (a, b) {
    console.log(a+b);
}
adunaDoi(2,6);


//Secunde in ora
function secundeInOra (ora) {
    const minInOra =60;
    const secInMin =60;
    const totalMin = ora* minInOra;
    return totalMin * secInMin;
}

console.log (secundeInOra (24));

//Selectoare DOM (Document Object Model)
const fereastraBrowser = window;
const documentPagina=window.document;

console.log (documentPagina.body);

//Selectare element dupa ID
const selectareID =document.getElementById ('titlu');

//Selectare element dupa clasa
const selectareClasa = document.getElementsByClassName 
('paragraf');

//Selector tip CSS
const paragraf = document.querySelector ('p');

//Varsta in secunde
function varstaInSecunde (varsta){
    const zileInAn=365;
    const secInAn =secundeInOra (24) * zileInAn;
    return varsta * secInAn;
}
//Selectam  butonul cu ID calculeaza
const buton= document.querySelector ('#calculeaza');

buton.addEventListener('click',function () {
    const input = document.querySelector('#varsta').value;

    let raspuns=varstaInSecunde(input);
    window.alert(raspuns);

})
    function adaugaParagraf() {
        //Am creat un nou element tip p
        const newP=document.createElement ("p");
        newP.textContent = "Un nou paragraf";

        //Selectam div-ul cu id add-paragraf
        const addP =document.querySelector ('#add-paragraf');
        addP.append(newP)
    }
