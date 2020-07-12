//Constants
const myForm = document.getElementById("myForm");
const toDo = document.getElementById("to-do");
const comment = document.getElementById("comments");

// Grocery List
const myList = document.getElementById("to-do-list");

//CRUD Buttons
const buttons = document.querySelectorAll(".btn");

const toDoList = function (task, blurb) {
  this.task = task;
  this.blurb = blurb;
  this.makeListItem = function () {
    myList.innerHTML +=
      "<li><div>" +
      task +
      "</div><p>" +
      blurb +
      "</p><button class='btn btn-danger'>X</button></li>";
  };
};

myForm.addEventListener("submit", (e) => {
  e.preventDefault();
  let appendToDo = new toDoList(toDo.value, comment.value);
  appendToDo.makeListItem();
});

window.addEventListener("click", function (e) {
  if (e.target.classList.contains("btn-danger")) {
    console.log("X Button", e.target.parentNode);
    e.target.parentNode.parentNode.removeChild(e.target.parentNode);
  }
});
