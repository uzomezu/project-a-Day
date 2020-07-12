(function () {
  const breakfast = [
    {
      img: "croissant.jpg",
      dish: "Croissant du beurre",
      blurb: "This it the Cafe ce matin croissant.",
      href: "#croissant",
      price: "$9.99",
      score: "4.5 out of 5 stars",
    },
    {
      img: "frenchtoast.jpg",
      dish: "Texas Cinnamon Toast",
      blurb: "This it the Cafe ce matin Cinnamon Toast.",
      href: "#frenchtoast",
      price: "$10.99",
      score: "3.5 out of 5 stars",
    },
    {
      img: "pancake.jpg",
      dish: "Fluffy Fluffy Pancake",
      blurb: "This it the Cafe ce matin pancake.",
      href: "#pancake",
      price: "$12.99",
      score: "5 out of 5 stars",
    },
  ];
  const lunch = [
    {
      img: "pizza.jpg",
      dish: "Pizza Pie",
      blurb: "This it the Cafe ce matin pizza.",
      href: "#pizza",
      price: "$20.99 - Large",
      score: "4 out of 5 stars",
    },
    {
      img: "burger.jpg",
      dish: "Hamburger Meal",
      blurb: "This it the Cafe ce matin burger.",
      href: "#burger",
      price: "$18.99",
      score: "5 out of 5 stars",
    },
    {
      img: "hotdog.jpg",
      dish: "Hotdog w/ Mustard",
      blurb: "This it the Cafe ce matin frankfurter.",
      href: "#hotdog",
      price: "$9.99",
      score: "3.8 out of 5 stars",
    },
    {
      img: "schoollunch.jpg",
      dish: "Lunch Box Special",
      blurb: "This it the Cafe ce matin lunch special.",
      href: "#schoollunch",
      price: "$14.99",
      score: "4.1 out of 5 stars",
    },
  ];
  const dinner = [
    {
      img: "steaks.jpg",
      dish: "Steak Dinner",
      blurb: "This it the Cafe ce matin steak dinner.",
      href: "#steaks",
      price: "$23.99",
      score: "4.2 out of 5 stars",
    },
    {
      img: "holiday.jpg",
      dish: "Ho Ho Ho Holiday Spread",
      blurb: "This it the Cafe ce matin Holiday Spread.",
      href: "#holiday",
      price: "MP ~ 80USD",
      score: "4 out of 5 stars",
    },
  ];
  const meals = breakfast.concat(lunch, dinner);
  const gallery = document.getElementById("cd-gallery-items");
  const foodLinks = gallery.childNodes;
  const buttons = document.querySelectorAll(".btn");

  // Modal Information Loader
  const modal = document.getElementById("modal-body");
  const modalProfile = document.getElementById("modal");
  const dishName = document.getElementById("dish");
  const review = document.getElementById("review");
  const cook = document.getElementById("chef");
  const stars = document.getElementById("stars");
  const body = document.getElementById("gallery-body");
  // **** Modal Buttons ***** //
  const modalButtons = document.querySelectorAll(".modal-btn");
  // Function to get Modal Position
  function getIndexModal(alt) {
    for (i = 0; i < alts.length; i++) {
      if (alt === alts[i]) {
        return i;
      }
    }
  }
  modalButtons.forEach(function (button) {
    button.addEventListener("click", () => {
      if (button.classList.contains("viewall")) {
        addOpacity(body, modal);
      } else if (
        button.classList.contains("prev") ||
        button.classList.contains("next")
      ) {
        count = getIndexModal(dishName.innerText);
        console.log(count);
        if (button.classList.contains("prev")) {
          // Do something
          count--;
          if (count < 0) {
            count = alts.length - 1;
          }
        }
        if (button.classList.contains("next")) {
          // Do something
          count++;
          if (count > alts.length - 1) {
            count = 0;
          }
        }
        modalShow(alts[count]);
      }
    });
  });
  //

  // helper array for picture alts
  function helperListAlts() {
    let helperList = [];
    for (i = 0; i < meals.length; i++) {
      helperList.push(meals[i].dish);
    }
    return helperList;
  }
  const alts = helperListAlts();

  //Opacity Disply Feature
  function addOpacity(idShow, idHide) {
    idShow.classList.add("opacity");
    idShow.style.display = "block";
    idHide.classList.remove("opacity");
    idHide.style.display = "none";
  }
  //

  function makeGallery(array) {
    for (i = 0; i < array.length; i++) {
      gallery.innerHTML +=
        "<li>" +
        "<a href=''>" +
        "<img src='#' alt=''/>" +
        "</a>" +
        "<span>Hello</span>" +
        "</li>";
    }
    let listItems = gallery.children;
    for (j = 0; j < listItems.length; j++) {
      // adds image links to the list items
      listItems[j].childNodes[0].children[0].src = array[j].img;
      listItems[j].childNodes[0].children[0].alt = array[j].dish;
      // adds image href
      listItems[j].childNodes[0].href = array[j].href;
      // add description
      gallery.childNodes[j].children[1].innerText =
        array[j].dish + " - " + array[j].price;
      console.log(foodLinks, buttons);
    }
  }
  makeGallery(meals);
  function modalShow(alt) {
    for (i = 0; i < meals.length; i++) {
      if (alt === meals[i].dish) {
        modalProfile.src = meals[i].img;
        dishName.innerText = meals[i].dish;
        review.innerText = meals[i].blurb;
        stars.innerText = meals[i].score;
      }
    }
  }
  // Event Bubbling
  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      gallery.innerHTML = "";
      let arrayToAppend = [];
      if (button.classList.contains("all")) {
        arrayToAppend = meals;
      }
      if (button.classList.contains("breakfast")) {
        arrayToAppend = breakfast;
      }
      if (button.classList.contains("lunch")) {
        arrayToAppend = lunch;
      }
      if (button.classList.contains("dinner")) {
        arrayToAppend = dinner;
      }
      makeGallery(arrayToAppend);
    });
  });
  //When you click a link
  window.addEventListener("click", (e) => {
    if (alts.includes(e.target.alt)) {
      console.log(e.target.alt);
      addOpacity(modal, body);
      modalShow(e.target.alt);
    }
  });
})();
