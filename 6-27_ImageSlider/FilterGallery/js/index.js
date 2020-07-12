function filter(obj, fn) {
  const entries = Object.entries(obj);
  return entries;
}

const breakfast = ["croissant.jpg", "frenchtoast.jpg", "pancake.jpg"];
const lunch = ["pizza.jpg", "burger.jpg", "hotdog.jpg", "schoollunch.jpg"];
const dinner = ["steaks.jpg", "holiday.jpg"];
const meals = breakfast.concat(lunch, dinner);

// All of the constants
const buttons = document.querySelectorAll(".btn");
const gallery = document.getElementById("gallery");
// Function to create list elements
console.log(meals);
console.log(gallery.children);
function makeGallery(array) {
  for (i = 0; i < array.length; i++) {
    gallery.innerHTML += "<li></li>";
  }
  let newGallery = gallery.children;
  for (j = 0; j < array.length; j++) {
    newGallery[j].style.backgroundImage = "url(" + array[j] + ")";
  }
}
let curSelection = [];
// Bubble Through the button constants above
buttons.forEach(function (button) {
  button.addEventListener("click", () => {
    gallery.innerText = "";
    if (button.classList.contains("all")) {
      curSelection = meals;
    }
    if (button.classList.contains("breakfast")) {
      curSelection = breakfast;
    }
    if (button.classList.contains("lunch")) {
      curSelection = lunch;
    }
    if (button.classList.contains("dinner")) {
      curSelection = dinner;
    }
    console.log(curSelection);
    makeGallery(curSelection);
  });
});
