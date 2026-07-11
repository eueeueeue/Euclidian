/* ==========================================
   SCIENTIFIC CALCULATOR
========================================== */

const display = document.getElementById("display");

/* Add Value */

function appendValue(value){

    display.value += value;

}

/* Clear Display */

function clearDisplay(){

    display.value = "";

}

/* Calculate */

function calculate(){

    try{

        display.value = eval(display.value);

    }

    catch{

        display.value = "Error";

    }

}

/* Square Root */

function squareRoot(){

    try{

        display.value = Math.sqrt(eval(display.value));

    }

    catch{

        display.value = "Error";

    }

}

/* Percentage */

function appendPercent(){

    try{

        display.value = eval(display.value) / 100;

    }

    catch{

        display.value = "Error";

    }

}

/* Backspace (Optional) */

function deleteLast(){

    display.value = display.value.slice(0,-1);

}
