//document.getElementById("count-e1").innerText =115;

//let myAge = 50;
//console.log(myAge);

//let firstBatch =5;
//let secondBatch =7;
//let count = firstBatch+ secondBatch;

//console.log(count);


//control + j -> terminal

let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let count = 0

function increment() {
    count += 1
    countEl.textContent = count
}

function save() {
    let countStr = count + " - "
    saveEl.textContent += countStr
    countEl.textContent = 0
    count = 0
}
