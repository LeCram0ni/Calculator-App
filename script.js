let first = true;

function start(){

    display.innerHTML = `<div id="text">0</div>`;
    first = true;
    //console.log("Test");
}

function clear(){
    document.getElementById('text').innerHTML = "0";
    console.log("clear");
}

function update(button){
    if (first){
        clear();
    }
    first = false;
    document.getElementById('text').innerHTML += button;
    console.log("test");
}

function calculate(){
    let toCalc = document.getElementById("text").innerHTML;
    console.log(toCalc);
    let calculated = eval(toCalc);
    console.log(calculated);
}