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
