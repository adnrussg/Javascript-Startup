let count = 0;

function increaseCount(){
    count++;
    displayCount();
    checkCountVlaue();
}

function displayCount(){
    document.getElementById("countDisplay").innerHTML = count;
}

function checkCountVlaue(){
    if(count === 10){
        alert("Your instagram post gained 10 followers! Congratulations!");
    } else if(count === 20){
        alert("Your instagram post gained 20 followers! Keep it up!");
    }
}