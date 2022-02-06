//Selectamcolor input
const inputColor = document.getElementById('colorPicker');
//selectam input height
const inputHeight = document.getElementById('inputHeight');
//selectam input width
const inputWidth = document.getElementById("inputWidth");
//selectam canvas-ul
const canvas = document.getElementById("pixelCanvas");
//Selectam butonul de submit
const submitBtn = document.getElementById("submitSize");

//Functie care genereaza grid-ul in functie de inputHeight si inputWidth
function makeGrid(){
    //Salvam valorile din inputHeight si inputWidth
    const inputHeightValue = inputHeight.value;
    const inputWidthValue = inputWidth.value;

    //Verificam daca valoarea este <=0 sau >50
    if (inputHeightValue <= 0 || inputHeightValue > 50 || inputWidthValue <= 0 ||inputWidthValue >50 ) {
        return;

    }
    //Adaugam butonuk pentru Clear Grid
    const clearCanvasButton = document.createElement ('button');
    clearCanvasButton.textContent = 'clear';
    clearCanvasButton.id = 'clear_canvasl';

    //Verificam daca exista un tabel si il stergem
    if (canvas.children.length >0) {
        while (canvas.lastElementChild) {
            canvas.removeChild(canvas.lastElementChild);
        }
        document.getElementById ('clear_canvas').remove();
    }

    // Pentru fiecare rand adaugam cate o coloana in functie de valorile introduse
    for (let row = 0; row<inputHeightValue;row++){
        //Adaugam un rand
        const tr = document.createElement('tr')

        for (let col= 0; col < inputWidthValue; col++){
            //Adaugam o coloana in rand
            const td= document.createElement ('td');
            tr.append(td);
            canvas.append(tr);
        }
    }

    //Selectam toate celulele 
    const allCells =document.getElementsByTagName('td');

    for (let cell = 0; cell<allCells.length;cell++){
        allCells[cell].addEventListener('click',function(){
        const inputColorValue = inputColor.value;
        allCells[cell].style.background = inputColorValue;
        })

        //Adaugam un eveniment pt click dreapta

        allCells[cell].addEventListener('contextmenu',function(event) {
            event.preventDefault();
            allCells[cell].style.background ='white';
        })
    }
//Adaugam butonul clear
document.body.append(clearCanvasButton);

// On click setam backround ul celulelor alb
   clearCanvasButton.addEventListener('click',function() {
     for (let cell=.0; cell <allCells.length; cell++) {
         allCells[cell].style.background = 'white';
     }
   })
}

submitBtn.addEventListener('click',function(event){
    event.preventDefault();
    makeGrid();
})