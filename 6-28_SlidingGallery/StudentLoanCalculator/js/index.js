(function () {
  //Beginning Variables
  const principal = document.getElementById("principal");
  const years = document.getElementById("years");
  const interest = document.getElementById("interest-rate");
  //

  //My Form
  const myForm = document.querySelector("#myForm");
  //

  //Errors
  const errors = document.getElementById("errors");
  //

  //Results of calculator
  const monthlyPayments = document.getElementById("monthly-payments");
  const totalDebt = document.getElementById("total-result");
  const resultInterest = document.getElementById("interest-result");
  const monthsToPay = document.querySelector(".badge");
  const resultDiv = document.getElementById("result-div");
  //

  //Calculate Monthly Payment
  function Amoritization(initial, duration, rate) {
    let newRate = rate / 12;
    let newDuration = duration * 12;
    let parantheses = newRate / (1 - Math.pow(newRate + 1, -newDuration));
    let payPerMonth = initial * parantheses;
    let newTotal = payPerMonth * newDuration;
    let difference = newTotal - initial;
    let array = [
      difference.toFixed(2),
      newTotal.toFixed(2),
      payPerMonth.toFixed(2),
      newDuration,
    ]; // variables and time in months
    return array; // returns our variables
  }
  //Append Results
  function appendResults(list) {
    resultInterest.innerText = " $" + list[0];
    totalDebt.innerText = " $" + list[1];
    monthlyPayments.innerText = " $" + list[2] + "  x ";
    monthsToPay.innerText = list[3];
  }
  //Validate if Results are real numbers
  function validateForm() {
    let regex = /^\d*\.?\d*$/;
    if (
      regex.test(principal.value) === false ||
      regex.test(years.value) === false ||
      regex.test(interest.value) === false
    ) {
      return false;
    } else {
      return true;
    }
  }
  myForm.addEventListener("submit", (e) => {
    e.preventDefault();
    let valid = validateForm();
    let resultsValid = [];
    if (valid === true) {
      resultsValid = Amoritization(
        principal.value,
        years.value,
        interest.value
      );
      appendResults(resultsValid);
    } else {
      alert("Uh Oh! Form is Wrong!");
    }
  });
})();
