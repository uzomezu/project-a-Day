// image slider
(function () {
  const images = [
    {
      img: "burger.jpg",
    },
    {
      img: "holiday.jpg",
    },
    {
      img: "hotdog.jpg",
    },
    {
      img: "pancake.jpg",
    },
    {
      img: "pizza.jpg",
    },
    {
      img: "steaks.jpg",
    },
  ];
  // Initialize Count
  let count = 0;
  const curImgGallery = document.getElementById("largeImage");

  // Loop Right
  const btnRight = document.getElementById("right-btn");

  btnRight.addEventListener("click", () => {
    // if count == last element of array, This is no bueno >:(
    if (count == images.length - 1) {
      // reset the count to 0
      count = 0;
      // grab the image from array
      silder_Img = images[count].img;
      // Do Something with the image
      console.log(silder_Img);
      curImgGallery.src = silder_Img;
      // else if the count is less than length, This is a good :)
    } else if (count < images.length) {
      // increase the count by one; move to the right
      count++;
      // grab the image from array
      silder_Img = images[count].img;
      // Do Something with the image
      console.log(silder_Img);
      curImgGallery.src = silder_Img;
    }
  });
  //

  // Loop Left
  const btnLeft = document.getElementById("left-btn");
  btnLeft.addEventListener("click", () => {
    // if count == length of array, This is no bueno >:(
    if (count == 0) {
      // move count to end of array
      count = images.length - 1;
      // grab the image from array
      silder_Img = images[count].img;
      // Do Something with the image
      console.log(silder_Img);
      curImgGallery.src = silder_Img;
      // else if the count is less than length, This is a good :)
    } else if (count > 0) {
      // decrease the count by one; move to the left
      count--;
      // grab the image from array
      silder_Img = images[count].img;
      // Do Something with the image
      console.log(silder_Img);
      curImgGallery.src = silder_Img;
    }
  });
  //
})();
