let first;
let done = false;
let isChecked = false;

function start() {
  /* display.innerHTML = `<div id="text">0</div>`;*/
  first = true;
  //console.log("Test");

  let chxBox = document.querySelector(".check-box");
  chxBox.addEventListener("change", function () {
    isChecked = isChecked ? false : true;
    console.log(isChecked);
  });
}

function clearDisplay() {
  document.getElementById("text").innerHTML = "0";
  console.log("clear");
  first = true;
}

function update(button) {
  if (first == true || (done == true && isChecked == true)) {
    document.getElementById("text").innerHTML = button;
  } else {
    document.getElementById("text").innerHTML += button;
  }
  first = false;
  done = false;
}

function deleteOne() {
  let x = document.getElementById("text").innerHTML.toString().length;

  if (x == 1) {
    first = true;
    document.getElementById("text").innerHTML = "0";
  } else {
    document.getElementById("text").innerHTML = document
      .getElementById("text")
      .innerHTML.slice(0, -1);
  }
}

function calculate() {
  let toCalc = document.getElementById("text").innerHTML;
  console.log(toCalc);
  let calculated;

  try {
    calculated = eval(toCalc);
  } catch (e) {
    console.log(e.name); // "SyntaxError"
    console.log(e.stack); // Stack of the error
  }

  console.log(calculated);
  document.getElementById("text").innerHTML = calculated;

  if (toCalc == "7353") {
    easteregg(1);
  } else if (toCalc == "2673852") {
    easteregg(2);
  }

  done = true;
}

let emojiA = String.fromCodePoint(0x1f644);
let emojiB = String.fromCodePoint(0x1f344);

function easteregg(id) {
  if (id == 1) {
    document.getElementById("text").innerHTML = emojiA;
  } else if (id == 2) {
    document.getElementById("text").innerHTML = emojiB;
  }
  console.log("bamboozled");
}

/*

Zahlen C DEL : immer
0 : nach einer Zahl
, : nach einer Zahl, nur ein Komma insgesamt
+/- : immer außer nach / x - +
/ x - + : nach einer zahl, danach muss zahl folgen
= : nach zahl, sollte / x - + enthalten

 <input type="checkbox" class="ios-switch-control-input" />
*/
