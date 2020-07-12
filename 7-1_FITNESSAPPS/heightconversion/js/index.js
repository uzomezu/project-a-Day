(function () {
  const feetToMeters = 0.3048;

  const tableCustomary = document.querySelector(".customary");
  const heightCust = document.getElementById("height-customary");
  const bmiCust = document.getElementById("height-result-customary");

  const heightMetric = document.getElementById("height-metric");
  const bmiMetric = document.getElementById("height-result-metric");
  const tableMetric = document.querySelector(".metric");

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
  const regexNum = /^(\d+(\.\d{0,2})?|\.?\d{1,2})$/;
  validateInput = function (input, regex) {
    if (regex.test(input) == true) {
      return input;
    } else {
      alert("Must input a valid number: No Letters, Only to 2nd Decimal!");
    }
  };
  getFeet = function (meters) {
    let result;
    result = (meters / feetToMeters).toFixed(2);
    return result;
  };

  getMeters = function (feet) {
    let result;
    result = (feet * feetToMeters).toFixed(2);
    return result;
  };

  window.addEventListener("click", (e) => {
    e.preventDefault();
    if (e.target.classList.contains("sbmt-customary")) {
      //run customary functions
      let tempHeight = validateInput(heightCust.value, regexNum);
      bmiCust.innerHTML = getMeters(tempHeight);
    }
    if (e.target.classList.contains("sbmt-metric")) {
      //run metric functions
      let tempHeight = validateInput(heightMetric.value, regexNum);
      bmiMetric.innerHTML = getFeet(tempHeight);
    }
  });
})();
