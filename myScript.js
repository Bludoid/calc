let myDisplay = document.getElementById("meDisplay");
let running = 0;
let newNum = 0;
let isNew = true;
let isFirst = true;
let lastOperator = null;



// delete button, show operators on display when they are clicked, keyboard support
// styles!!!


function clicky(myValue) {
    if (isNew === true) {
        clearDisplay();
        myDisplay.innerHTML += myValue;
        newNum = Number(myDisplay.innerHTML);
        isNew = false;
    }
    else {
    myDisplay.innerHTML += myValue;
    newNum = Number(myDisplay.innerHTML); 
    }
}


function clickPlus() {
    lastOperator = "plus";
    if (isFirst === true) {
        running = newNum;
        newNum = 0;
        isFirst = false;
    }
    else {
        finishOperation();    
    }
    
    isNew = true
}

function clickMinus() {
    lastOperator = "minus";
    if (isFirst === true) {
        running = newNum;
        newNum = 0;
        isFirst = false;
    }
    else {
        finishOperation();    
    }
    
    isNew = true
}

function clickTimes() {
    lastOperator = "times";
    if (isFirst === true) {
        running = newNum;
        newNum = 0;
        isFirst = false;
    }
    else {
        finishOperation();    
    }
    
    isNew = true
}

function clickDevided() {
    lastOperator = "devided";
    if (isFirst === true) {
        running = newNum;
        newNum = 0;
        isFirst = false;
    }
    else {
        finishOperation();    
    }
    
    isNew = true
}

function finishOperation() {
    if (lastOperator == "plus") {
        running += newNum;
        newNum = 0;
        myDisplay.innerHTML = running;
    }
    else if (lastOperator == "minus") {
        running -= newNum;
        newNum = 0;
        myDisplay.innerHTML = running;
    }
    else if (lastOperator == "times") {
        running *= newNum;
        newNum = 0;
        myDisplay.innerHTML = running;
    }
    else if (lastOperator == "devided") {
        running /= newNum;
        newNum = 0;
        myDisplay.innerHTML = running;
    }    
}


function clearDisplay() {
    myDisplay.innerHTML = "";
}


function clickEqual() {
    finishOperation();
    isNew = true;
}

function clickCLR() {
    clearDisplay();
    running = 0;
    newNum = 0;
    isNew = true; 
    isFirst = true;
    lastOperator = null;
}