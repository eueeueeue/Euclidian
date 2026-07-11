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
/* ==========================================
   AREA CALCULATORS
========================================== */

/* Rectangle */

function rectangleArea(){

    let length = parseFloat(document.getElementById("rectLength").value);
    let width = parseFloat(document.getElementById("rectWidth").value);

    if(isNaN(length) || isNaN(width)){

        document.getElementById("rectOutput").innerHTML = "Please enter valid values.";
        return;

    }

    let area = length * width;

    document.getElementById("rectOutput").innerHTML =
    "Area = " + area.toFixed(2);

}

/* Square */

function squareArea(){

    let side = parseFloat(document.getElementById("squareSide").value);

    if(isNaN(side)){

        document.getElementById("squareOutput").innerHTML = "Please enter a valid value.";
        return;

    }

    let area = side * side;

    document.getElementById("squareOutput").innerHTML =
    "Area = " + area.toFixed(2);

}

/* Triangle */

function triangleArea(){

    let base = parseFloat(document.getElementById("triangleBase").value);
    let height = parseFloat(document.getElementById("triangleHeight").value);

    if(isNaN(base) || isNaN(height)){

        document.getElementById("triangleOutput").innerHTML = "Please enter valid values.";
        return;

    }

    let area = (base * height) / 2;

    document.getElementById("triangleOutput").innerHTML =
    "Area = " + area.toFixed(2);

}

/* Circle */

function circleArea(){

    let radius = parseFloat(document.getElementById("circleRadius").value);

    if(isNaN(radius)){

        document.getElementById("circleOutput").innerHTML = "Please enter a valid value.";
        return;

    }

    let area = Math.PI * radius * radius;

    document.getElementById("circleOutput").innerHTML =
    "Area = " + area.toFixed(2);

}

/* Parallelogram */

function parallelogramArea(){

    let base = parseFloat(document.getElementById("paraBase").value);
    let height = parseFloat(document.getElementById("paraHeight").value);

    if(isNaN(base) || isNaN(height)){

        document.getElementById("paraOutput").innerHTML = "Please enter valid values.";
        return;

    }

    let area = base * height;

    document.getElementById("paraOutput").innerHTML =
    "Area = " + area.toFixed(2);

}

/* Trapezoid */

function trapezoidArea(){

    let base1 = parseFloat(document.getElementById("trapBase1").value);
    let base2 = parseFloat(document.getElementById("trapBase2").value);
    let height = parseFloat(document.getElementById("trapHeight").value);

    if(isNaN(base1) || isNaN(base2) || isNaN(height)){

        document.getElementById("trapOutput").innerHTML = "Please enter valid values.";
        return;

    }

    let area = ((base1 + base2) * height) / 2;

    document.getElementById("trapOutput").innerHTML =
    "Area = " + area.toFixed(2);

}
