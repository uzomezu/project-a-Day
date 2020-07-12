(function () {
  // Constants budget form
  const budget = document.getElementById("budget-input");
  const budgetResult = document.getElementById("budget-amount");

  //Expense Form
  const expenseName = document.getElementById("expense-input");
  const expenseAmt = document.getElementById("amount-input");
  const expenseList = document.querySelector(".expense-list");
  const expenseResult = document.getElementById("expense-amount");

  //Balance
  const balance = document.getElementById("balance-amount");

  const regexNum = /^(\d+(\.\d{0,2})?|\.?\d{1,2})$/;
  const regexAlpha = /^[A-Za-z ]+$/;
  function validateInput(num, regex) {
    if (regex.test(num) === false || num == " ") {
      console.log(false);
      alert(
        "Cannot be Empty or Non Number" +
          "\n" +
          "If expense: Must be Alphabet characters"
      );
    } else {
      return true;
    }
  }

  const makeExpense = function (exps, name) {
    this.exps = exps;
    this.name = name;
    this.appendItem = function () {
      expenseList.innerHTML +=
        "<div class='expense'>" +
        "<div class='expense-item d-flex justify-content-between align-items-baseline'>" +
        "<h6 class='expense-title mb-0 text-uppercase list-item'>" +
        "-" +
        name +
        "</h6>" +
        "<h5 class='expense-amount mb-0 list-item'>" +
        exps +
        "</h5>" +
        "<div class='expense-icons list-item'>" +
        "<button class='btn btn-danger'>X</button>" +
        "</div>" +
        "</div>" +
        "</div>";
    };
  };

  function totalExpenseAmt() {
    let totalExpenses = document.querySelectorAll(".expense-amount");
    console.log(totalExpenses);
    let total = 0;
    for (i = 0; i < totalExpenses.length; i++) {
      total += Math.floor(totalExpenses[i].innerHTML);
    }
    console.log(total);
    expenseResult.innerHTML = total;

    let newBalance = parseFloat(budgetResult.innerHTML) - total;

    balance.innerHTML = newBalance;
  }

  window.addEventListener("click", (e) => {
    //budget submitted
    e.preventDefault();
    if (e.target.classList.contains("budget-submit")) {
      console.log("budget submit");
      if (validateInput(budget.value, regexNum) == true) {
        budgetResult.innerHTML = budget.value;
      }
    }
    if (e.target.classList.contains("expense-submit")) {
      console.log("expense submit");
      if (
        validateInput(expenseName.value, regexAlpha) == true &&
        validateInput(expenseAmt.value, regexNum) == true
      ) {
        let newListItem = new makeExpense(expenseAmt.value, expenseName.value);
        newListItem.appendItem();
        totalExpenseAmt();
      }
    }
    if (e.target.classList.contains("btn-danger")) {
      e.target.parentNode.parentNode.parentNode.classList.add("delete");
      e.target.parentNode.parentNode.parentNode.removeChild(
        e.target.parentNode.parentNode
      );
      totalExpenseAmt();
    }
  });
})();
