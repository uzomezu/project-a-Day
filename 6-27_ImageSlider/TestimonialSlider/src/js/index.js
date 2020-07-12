(function () {
  const reviews = [
    {
      img: "burger.jpg",
      dish: "Burger Blaster 9000",
      blurb:
        "This burger was so delicious it almost made me want to cry, and I don't always do that. Okay actually I cry often, but still an awesome meal!",
      chef: "Chef Martin MeatGrab",
      restaurant: "The Burger Place",
      score: "4.5 out of 5 stars",
    },
    {
      img: "holiday.jpg",
      dish: "Holiday Spread",
      blurb:
        "This reminds me of christmas, I just can't wait to eat it. I even reserve my seats 12 months in advance! They are always booked, it's that good",
      chef: "Chef Nicky Frostbottom",
      restaurant: "The Fireplace Grove",
      score: "4 out of 5 stars",
    },
    {
      img: "hotdog.jpg",
      dish: "The Meat Stick",
      blurb:
        "The weenie will have you begging for seconds, what a dog! I can't beleive they give you this much in one serving. I was satisfied after every inch!",
      chef: "Chef Lacey Gucce",
      restaurant: "Hot Diggity Dog",
      score: "4 out of 5 stars",
    },
    {
      img: "pancake.jpg",
      dish: "Flappity Jacks",
      blurb:
        "The best flapjacks in town! I need at least a stack and a half when I walk in, 10x that when the family's with me. I love this place!",
      chef: "Chef Longback",
      restaurant: "Flat Cakes Int.",
      score: "3.5 out of 5 stars",
    },
    {
      img: "pizza.jpg",
      dish: "Issa Pizza Pie!!!",
      blurb:
        "The pizza was great, A+. when I asked to eat in they said they only do delivery, and then when I showed up, it looked a lot like Chuck-E-Cheese, butneverless a solid pie!!",
      chef: "Chef Charles Entertainment",
      restaurant: "Pasqualy's Pizza",
      score: "5 out of 5 stars",
    },
    {
      img: "steaks.jpg",
      dish: "We Have the MEATS",
      blurb:
        "Thick juicy piping hot steak, that melts as soon as it slaps your tongue, I have dreams about reliving the first bite I ever took. It was an out of body experience!!!",
      chef: "Chef Darcy Brisketstein",
      restaurant: "Thick and Juicy Buffet",
      score: "4.8 out of 5 stars",
    },
  ];
  // All my constants
  const buttons = document.querySelectorAll(".btn");
  const image = document.getElementById("image");
  const dish = document.getElementById("dish");
  const cook = document.getElementById("chef");
  const review = document.getElementById("review");
  const rstrnt = document.getElementById("restaurant");
  const rating = document.getElementById("stars");
  //
  // Add them to the DOM function
  function addReview(pic, food, person, msg, place, rting, i) {
    pic.src = reviews[i].img;
    food.innerText = reviews[i].dish;
    person.innerText = reviews[i].chef;
    msg.innerText = reviews[i].blurb;
    place.innerText = reviews[i].restaurant;
    rting.innerText = reviews[i].score;
  }
  //
  //count
  let count = 0;
  window.onload = addReview(image, dish, cook, review, rstrnt, rating, 0);
  buttons.forEach(function (button) {
    button.addEventListener("click", () => {
      if (button.classList.contains("prev")) {
        count--;
        if (count < 0) {
          count = reviews.length - 1;
        }
        // Do Something to information in array
        addReview(image, dish, cook, review, rstrnt, rating, count);
      }
      if (button.classList.contains("next")) {
        count++;
        if (count > reviews.length - 1) {
          count = 0;
        }
        // Do Something to information in array
        addReview(image, dish, cook, review, rstrnt, rating, count);
      }
    });
  });
})();
