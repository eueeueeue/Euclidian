/* ==========================
   AREA CALCULATORS
========================== */

function rectangleArea(){

    let l = Number(document.getElementById("rectLength").value);
    let w = Number(document.getElementById("rectWidth").value);

    document.getElementById("rectOutput").innerHTML =
    "Area = " + (l*w);

}

function squareArea(){

    let s = Number(document.getElementById("squareSide").value);

    document.getElementById("squareOutput").innerHTML =
    "Area = " + (s*s);

}

function triangleArea(){

    let b = Number(document.getElementById("triangleBase").value);
    let h = Number(document.getElementById("triangleHeight").value);

    document.getElementById("triangleOutput").innerHTML =
    "Area = " + ((b*h)/2);

}

function circleArea(){

    let r = Number(document.getElementById("circleAreaRadius").value);

    document.getElementById("circleAreaOutput").innerHTML =
    "Area = " + (Math.PI*r*r).toFixed(2);

}

function parallelogramArea(){

    let b = Number(document.getElementById("paraBase").value);
    let h = Number(document.getElementById("paraHeight").value);

    document.getElementById("paraOutput").innerHTML =
    "Area = " + (b*h);

}

function trapezoidArea(){

    let a = Number(document.getElementById("trapA").value);
    let b = Number(document.getElementById("trapB").value);
    let h = Number(document.getElementById("trapHeight").value);

    document.getElementById("trapOutput").innerHTML =
    "Area = " + (((a+b)/2)*h);

}
