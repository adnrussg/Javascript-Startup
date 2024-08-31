let count = 0;

function increaseCount(){
    count++;
    displayCount();
    checkCountVlaue();
    console.log(count);
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

function resetCount(){
    count = 0;
    displayCount();
    alert("You no longer have followers!")
    console.log(count);
}