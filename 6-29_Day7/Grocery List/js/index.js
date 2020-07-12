(function () {
  //Constants from form
  const myForm = document.getElementById("myForm");
  const grocery = document.getElementById("grocery");
  const amount = document.getElementById("amount");

  // Grocery List
  const myList = document.getElementById("grocery-items");

  //CRUD Buttons
  const buttons = document.querySelectorAll(".btn");

  function groceryItem(food, num) {
    this.food = food;
    this.num = num;
    this.createGrocery = function () {
      // appends item to the dom
      myList.innerHTML +=
        "<li class='card'>" +
        "<div class='card-title'>" +
        food +
        "</div>" +
        "<button class='btn btn-danger'>X</button>" +
        "</li>";
    };
  }
  myForm.addEventListener("submit", (e) => {
    e.preventDefault();
    let newGrocery = new groceryItem(grocery.value, amount.value);
    newGrocery.createGrocery();
  });

  window.addEventListener("click", function (e) {
    if (e.target.classList.contains("btn-danger")) {
      console.log("X Button", e.target.parentNode);
      e.target.parentNode.parentNode.removeChild(e.target.parentNode);
    }
  });
})();
