let width;
let length;

function calculateArea(){
    length = parseFloat(document.getElementById("length").value);
    width = parseFloat(document.getElementById("width").value);

    let area = length * width;
    document.getElementById("result").innerHTML = `The area of the rectangle is: ${area}`;
}

/* let grocery1;
let grocery2;
let grocery3; */

const groceryTracker = (grocery1,grocery2,grocery3) => grocery1 + grocery2 + grocery3;

function calculateTotal(){
    grocery1 = parseFloat(document.getElementById('grocery1').value);
    grocery2 = parseFloat(document.getElementById('grocery2').value);
    grocery3 = parseFloat(document.getElementById('grocery3').value);

    let total = groceryTracker(grocery1,grocery2,grocery3);
    document.getElementById('result2').innerHTML = `The total amount is: $${total}`
}

function calculateTotal2(){
    grocery1 = parseFloat(document.getElementById('grocery4').value);
    grocery2 = parseFloat(document.getElementById('grocery5').value);
    grocery3 = parseFloat(document.getElementById('grocery6').value);

    let total = groceryTracker(grocery1,grocery2,grocery3);
    document.getElementById('result3').innerHTML = `The total amount is: $${total}`
}