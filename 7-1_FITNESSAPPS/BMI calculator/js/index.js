(function () {
  //US units table
  const tableCustomary = document.querySelector(".customary");
  const weightCust = document.getElementById("weight-customary");
  const heightCust = document.getElementById("height-customary");
  const bmiCust = document.getElementById("bmi-result-customary");
  //

  //Metric Units table
  const tableMetric = document.querySelector(".metric");
  const weightMetric = document.getElementById("weight-metric");
  const heightMetric = document.getElementById("height-metric");
  const bmiMetric = document.getElementById("bmi-result-metric");
  //

  const regexNum = /^(\d+(\.\d{0,2})?|\.?\d{1,2})$/;

  //Bubble Switch Tables
  const switchBtns = document.querySelectorAll(".switch-units");

  switchBtns.forEach(function (button) {
    button.addEventListener("click", () => {
      if (button.classList.contains("usa")) {
        tableCustomary.style.display = "block";
        tableMetric.style.display = "none";
      }
      if (button.classList.contains("international")) {
        tableMetric.style.display = "block";
        tableCustomary.style.display = "none";
      }
    });
  });

  validateInput = function (input, regex) {
    if (regex.test(input) == true) {
      return input;
    } else {
      alert("Must input a valid number: No Letters, Only to 2nd Decimal!");
    }
  };

  bmiCalcUsa = function (weight, height) {
    let bmi = eval(weight / Math.pow(height, 2));
    bmi = bmi * 703;
    return bmi;
  };
  bmiCalcMetric = function (weight, height) {
    let bmi = eval(weight / Math.pow(height, 2));
    return bmi;
  };

  window.addEventListener("click", (e) => {
    e.preventDefault();
    if (e.target.classList.contains("sbmt-customary")) {
      //run customary functions
      let tempWeight = validateInput(weightCust.value, regexNum);
      let tempHeight = validateInput(heightCust.value, regexNum);
      bmiCust.innerHTML = bmiCalcUsa(tempWeight, tempHeight);
    }
    if (e.target.classList.contains("sbmt-metric")) {
      //run metric functions
      let tempWeight = validateInput(weightMetric.value, regexNum);
      let tempHeight = validateInput(heightMetric.value, regexNum);
      bmiMetric.innerHTML = bmiCalcMetric(tempWeight, tempHeight);
    }
  });
})();
