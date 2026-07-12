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

/* ==========================================
   VOLUME CALCULATORS
========================================== */

/* Cube */

function cubeVolume(){

    let side = parseFloat(document.getElementById("cubeSide").value);

    if(isNaN(side)){

        document.getElementById("cubeOutput").innerHTML = "Please enter a valid value.";
        return;

    }

    let volume = side ** 3;

    document.getElementById("cubeOutput").innerHTML =
    "Volume = " + volume.toFixed(2);

}

/* Cylinder */

function cylinderVolume(){

    let radius = parseFloat(document.getElementById("cylinderRadius").value);
    let height = parseFloat(document.getElementById("cylinderHeight").value);

    if(isNaN(radius) || isNaN(height)){

        document.getElementById("cylinderOutput").innerHTML = "Please enter valid values.";
        return;

    }

    let volume = Math.PI * radius * radius * height;

    document.getElementById("cylinderOutput").innerHTML =
    "Volume = " + volume.toFixed(2);

}

/* Cone */

function coneVolume(){

    let radius = parseFloat(document.getElementById("coneRadius").value);
    let height = parseFloat(document.getElementById("coneHeight").value);

    if(isNaN(radius) || isNaN(height)){

        document.getElementById("coneOutput").innerHTML = "Please enter valid values.";
        return;

    }

    let volume = (Math.PI * radius * radius * height) / 3;

    document.getElementById("coneOutput").innerHTML =
    "Volume = " + volume.toFixed(2);

}

/* Sphere */

function sphereVolume(){

    let radius = parseFloat(document.getElementById("sphereRadius").value);

    if(isNaN(radius)){

        document.getElementById("sphereOutput").innerHTML = "Please enter a valid value.";
        return;

    }

    let volume = (4/3) * Math.PI * radius ** 3;

    document.getElementById("sphereOutput").innerHTML =
    "Volume = " + volume.toFixed(2);

}

/* Rectangular Prism */

function prismVolume(){

    let length = parseFloat(document.getElementById("prismLength").value);
    let width = parseFloat(document.getElementById("prismWidth").value);
    let height = parseFloat(document.getElementById("prismHeight").value);

    if(isNaN(length) || isNaN(width) || isNaN(height)){

        document.getElementById("prismOutput").innerHTML = "Please enter valid values.";
        return;

    }

    let volume = length * width * height;

    document.getElementById("prismOutput").innerHTML =
    "Volume = " + volume.toFixed(2);

}
/* ==========================================
   PERIMETER CALCULATORS
========================================== */

/* Rectangle */

function rectanglePerimeter(){

    let length = parseFloat(document.getElementById("prectLength").value);
    let width = parseFloat(document.getElementById("prectWidth").value);

    if(isNaN(length) || isNaN(width)){

        document.getElementById("prectOutput").innerHTML = "Please enter valid values.";
        return;

    }

    let perimeter = 2 * (length + width);

    document.getElementById("prectOutput").innerHTML =
    "Perimeter = " + perimeter.toFixed(2);

}

/* Square */

function squarePerimeter(){

    let side = parseFloat(document.getElementById("psquareSide").value);

    if(isNaN(side)){

        document.getElementById("psquareOutput").innerHTML = "Please enter a valid value.";
        return;

    }

    let perimeter = 4 * side;

    document.getElementById("psquareOutput").innerHTML =
    "Perimeter = " + perimeter.toFixed(2);

}

/* Triangle */

function trianglePerimeter(){

    let a = parseFloat(document.getElementById("sideA").value);
    let b = parseFloat(document.getElementById("sideB").value);
    let c = parseFloat(document.getElementById("sideC").value);

    if(isNaN(a) || isNaN(b) || isNaN(c)){

        document.getElementById("trianglePerimeterOutput").innerHTML = "Please enter valid values.";
        return;

    }

    let perimeter = a + b + c;

    document.getElementById("trianglePerimeterOutput").innerHTML =
    "Perimeter = " + perimeter.toFixed(2);

}

/* Circle */

function circlePerimeter(){

    let radius = parseFloat(document.getElementById("circlePerimeterRadius").value);

    if(isNaN(radius)){

        document.getElementById("circlePerimeterOutput").innerHTML = "Please enter a valid value.";
        return;

    }

    let circumference = 2 * Math.PI * radius;

    document.getElementById("circlePerimeterOutput").innerHTML =
    "Circumference = " + circumference.toFixed(2);

}

/* Parallelogram */

function parallelogramPerimeter(){

    let base = parseFloat(document.getElementById("paraSide1").value);
    let side = parseFloat(document.getElementById("paraSide2").value);

    if(isNaN(base) || isNaN(side)){

        document.getElementById("paraPerimeterOutput").innerHTML = "Please enter valid values.";
        return;

    }

    let perimeter = 2 * (base + side);

    document.getElementById("paraPerimeterOutput").innerHTML =
    "Perimeter = " + perimeter.toFixed(2);

}

/*==============================
    BACK TO TOP BUTTON
==============================*/

let topButton = document.getElementById("topBtn");

window.onscroll = function () {

    scrollFunction();

};

function scrollFunction() {

    if (

        document.body.scrollTop > 300 ||

        document.documentElement.scrollTop > 300

    ) {

        topButton.style.display = "block";

    }

    else {

        topButton.style.display = "none";

    }

}

function topFunction() {

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

}

/*==================================
        CUSTOM CURSOR
==================================*/

const cursor = document.querySelector(".cursor");
const outline = document.querySelector(".cursor-outline");

document.addEventListener("mousemove", function(e){

    cursor.style.left = e.clientX + "px";
    cursor.style.top = e.clientY + "px";

    outline.style.left = e.clientX + "px";
    outline.style.top = e.clientY + "px";

});

/* Hover Animation */

const hoverItems = document.querySelectorAll(
"a, button, .feature-card, .glass-card, .profile-card, .stat-card"
);

hoverItems.forEach(item=>{

    item.addEventListener("mouseenter",()=>{

        cursor.style.transform="translate(-50%,-50%) scale(1.8)";
        outline.style.width="60px";
        outline.style.height="60px";
        outline.style.borderColor="#8FB3E2";

    });

    item.addEventListener("mouseleave",()=>{

        cursor.style.transform="translate(-50%,-50%) scale(1)";
        outline.style.width="42px";
        outline.style.height="42px";
        outline.style.borderColor="#31487A";

    });

});

const cards = document.querySelectorAll(
".feature-card, .stat-box, .glass-card"
);

const cardObserver = new IntersectionObserver(

(entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

},

{

threshold:.2

}

);

cards.forEach((card,index)=>{

card.style.transitionDelay = `${index * 0.15}s`;

cardObserver.observe(card);

});
