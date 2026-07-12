/*=========================================
            CALCULATOR
=========================================*/

const display = document.getElementById("display");

/* Add numbers/operators */

function append(value) {

    display.value += value;

}

/* Clear display */

function clearDisplay() {

    display.value = "";

}

/* Delete last character */

function deleteLast() {

    display.value = display.value.slice(0, -1);

}

/* Calculate answer */

function calculate() {

    try {

        let expression = display.value.replace(/%/g, "/100");

        display.value = eval(expression);

    }

    catch {

        display.value = "Error";

        setTimeout(() => {

            display.value = "";

        }, 1500);

    }

}

/*=========================================
        KEYBOARD SUPPORT
=========================================*/

document.addEventListener("keydown", function(event){

    const key = event.key;

    if(!display) return;

    if(
        (key >= "0" && key <= "9") ||
        key === "." ||
        key === "+" ||
        key === "-" ||
        key === "*" ||
        key === "/" ||
        key === "%"
    ){

        append(key);

    }

    else if(key === "Enter"){

        event.preventDefault();

        calculate();

    }

    else if(key === "Backspace"){

        deleteLast();

    }

    else if(key === "Escape"){

        clearDisplay();

    }

});

/*=========================================
        FORMULA CALCULATIONS
=========================================*/

/*==============================
        CIRCLE AREA
==============================*/

function calculateCircleArea(){

    let radius = parseFloat(document.getElementById("circleRadius").value);

    if(isNaN(radius) || radius < 0){

        document.getElementById("circleResult").innerHTML =
        "Please enter a valid radius.";

        return;

    }

    let area = Math.PI * radius * radius;

    document.getElementById("circleResult").innerHTML =
    "Area = " + area.toFixed(2);

}

/*==============================
        SQUARE AREA
==============================*/

function calculateSquareArea(){

    let side = parseFloat(document.getElementById("squareSide").value);

    if(isNaN(side) || side < 0){

        document.getElementById("squareResult").innerHTML =
        "Please enter a valid side length.";

        return;

    }

    let area = side * side;

    document.getElementById("squareResult").innerHTML =
    "Area = " + area.toFixed(2);

}

/*==============================
    RECTANGLE AREA
==============================*/

function calculateRectangleArea(){

    let length = parseFloat(document.getElementById("rectangleLength").value);

    let width = parseFloat(document.getElementById("rectangleWidth").value);

    if(isNaN(length) || isNaN(width) || length < 0 || width < 0){

        document.getElementById("rectangleResult").innerHTML =
        "Please enter valid values.";

        return;

    }

    let area = length * width;

    document.getElementById("rectangleResult").innerHTML =
    "Area = " + area.toFixed(2);

}

/*==============================
        TRIANGLE AREA
==============================*/

function calculateTriangleArea(){

    let base = parseFloat(document.getElementById("triangleBase").value);

    let height = parseFloat(document.getElementById("triangleHeight").value);

    if(isNaN(base) || isNaN(height) || base < 0 || height < 0){

        document.getElementById("triangleResult").innerHTML =
        "Please enter valid values.";

        return;

    }

    let area = (base * height) / 2;

    document.getElementById("triangleResult").innerHTML =
    "Area = " + area.toFixed(2);

}

/*=========================================
        3D SHAPES
=========================================*/

function calculateCubeVolume(){

    let side = parseFloat(document.getElementById("cubeSide").value);

    if(isNaN(side) || side < 0){

        document.getElementById("cubeResult").innerHTML =
        "Please enter a valid side.";

        return;

    }

    let volume = side ** 3;

    document.getElementById("cubeResult").innerHTML =
    "Volume = " + volume.toFixed(2);

}

function calculateCylinderVolume(){

    let r = parseFloat(document.getElementById("cylinderRadius").value);

    let h = parseFloat(document.getElementById("cylinderHeight").value);

    if(isNaN(r) || isNaN(h) || r < 0 || h < 0){

        document.getElementById("cylinderResult").innerHTML =
        "Please enter valid values.";

        return;

    }

    let volume = Math.PI * r * r * h;

    document.getElementById("cylinderResult").innerHTML =
    "Volume = " + volume.toFixed(2);

}

function calculateSphereVolume(){

    let r = parseFloat(document.getElementById("sphereRadius").value);

    if(isNaN(r) || r < 0){

        document.getElementById("sphereResult").innerHTML =
        "Please enter a valid radius.";

        return;

    }

    let volume = (4/3) * Math.PI * r * r * r;

    document.getElementById("sphereResult").innerHTML =
    "Volume = " + volume.toFixed(2);

}
