(function () {
  //Beginning Variables
  const priceB4Tip = document.getElementById("price-before-tip");
  const people = document.getElementById("people");
  const tipChoice = document.getElementById("tip-amount");
  //

  //My Form
  const myForm = document.querySelector("#myForm");
  //

  //Errors
  const errors = document.getElementById("errors");
  //

  //Results of calculator
  const resultPerPerson = document.getElementById("per-person-result");
  const resultTotal = document.getElementById("bill-result");
  const resultTip = document.getElementById("tip-result");
  const numPartyFinal = document.querySelector(".badge");
  const resultDiv = document.getElementById("result-div");
  //

  //Calculate Tip
  function calculateResults(price, partySize, rate) {
    var tip, perPerson, totalPrice;
    tip = price * rate;
    tip = tip;
    totalPrice = eval(price + tip);
    perPerson = totalPrice / partySize;
    let array = [tip.toFixed(2), totalPrice, perPerson.toFixed(2), partySize];
    return array;
  }
  //Append Results
  function appendResults(list) {
    resultTip.innerText = " $" + list[0];
    resultTotal.innerText = " $" + list[1];
    resultPerPerson.innerText = " $" + list[2] + "  x ";
    numPartyFinal.innerText = list[3];
  }
  //Validate if Results are real numbers
  function validateForm() {
    let regex = /^\d*\.?\d*$/;
    if (
      regex.test(people.value) === false ||
      regex.test(priceB4Tip.value) === false ||
      regex.test(tipChoice.value) === false
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
      resultsValid = calculateResults(
        priceB4Tip.value,
        people.value,
        tipChoice.value
      );
      appendResults(resultsValid);
    } else {
      alert("Uh Oh! Form is Wrong!");
    }
  });
  //console.log(appendResults(calculateResults(19.8, 3, 0.2)));
})();
