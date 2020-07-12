(function () {
  const kgLbs = 2.20462262185;

  const tableCustomary = document.querySelector(".customary");
  const weightCust = document.getElementById("weight-customary");
  const bmiCust = document.getElementById("weight-result-customary");

  const weightMetric = document.getElementById("weight-metric");
  const bmiMetric = document.getElementById("weight-result-metric");
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
  getPounds = function (kg) {
    let result;
    result = (kg * kgLbs).toFixed(2);
    return result;
  };

  getkgs = function (lbs) {
    let result;
    result = (lbs / kgLbs).toFixed(2);
    return result;
  };

  window.addEventListener("click", (e) => {
    e.preventDefault();
    if (e.target.classList.contains("sbmt-customary")) {
      //run customary functions
      let tempWeight = validateInput(weightCust.value, regexNum);
      bmiCust.innerHTML = getkgs(tempWeight);
    }
    if (e.target.classList.contains("sbmt-metric")) {
      //run metric functions
      let tempWeight = validateInput(weightMetric.value, regexNum);
      bmiMetric.innerHTML = getPounds(tempWeight);
    }
  });
})();
