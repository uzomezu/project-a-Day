// Color Generator

function generateColor() {
  var i;
  var bg = "";
  for (i = 0; i < 3; i++) {
    let rgb = Math.floor(Math.random() * 256);
    if (i > 1) {
      bg += rgb.toString();
    } else {
      bg += rgb.toString() + ",";
    }
  }
  colorInDom = "rgb(" + bg + ")";
  document.getElementById("root").style.background = colorInDom;
  document.getElementById("curColor").innerHTML = colorInDom;
}
// Hex Code Generator
function generateHex() {
  let hexvariables = [
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
  ];
  var random_limit = hexvariables.length;
  let bg = "#";
  for (i = 0; i < 6; i++) {
    let num = Math.floor(Math.random() * random_limit);
    bg += hexvariables[num].toString();
  }
  document.getElementById("root").style.background = bg;
  document.getElementById("curColor").innerHTML = bg;
}

// Calculator
function calculator(calcbutton) {
  let operations_and_period = ["*", "/", "+", "-", "."];
  let equal_n_clear = ["=", "clear"];
  if (
    isNaN(calcbutton.id) == false ||
    operations_and_period.includes(calcbutton.id) == true
  ) {
    document.getElementById("calculator-window").innerHTML += calcbutton.id;
    document.getElementById("answer").innerHTML = "";
  } else if (equal_n_clear.includes(calcbutton.id) == true) {
    if (calcbutton.id == equal_n_clear[1]) {
      document.getElementById("calculator-window").innerHTML = "";
    } else {
      let equation = document.getElementById("calculator-window").innerText;
      let answer = eval(equation);
      console.log(answer);
      document.getElementById("answer").innerHTML = answer;
      document.getElementById("calculator-window").innerHTML = "";
    }
  }
}
