(function () {
  const menuBtn = document.querySelector(".menu-btn");
  const menuOverlay = document.querySelector(".mobile-menu");
  const mobileLinks = document.querySelectorAll(".mobile-links a");
  let menuOpen = false;

  menuBtn.addEventListener("click", () => {
    if (!menuOpen) {
      menuBtn.classList.add("open");
      menuOverlay.classList.add("show");
      menuOverlay.style.display = "flex";
      menuOpen = true;
    } else {
      menuBtn.classList.remove("open");
      menuOverlay.classList.remove("show");
      menuOverlay.style.display = "none";
      menuOpen = false;
    }
  });
  mobileLinks.forEach((link, index) => {
    if (link.style.animation) {
      link.style.animation = ``;
    } else {
      link.style.animation = `navLinkDropDown 0.5s ease-in ${index / 9}s`;
      link.style.opacity = 1;
    }
  });
  // Opacity toggle
  const gallery = document.getElementById("gallery");
  const menu = document.getElementById("cd-gallery-items");
  const product = document.getElementById("product-card");
  const prodName = document.querySelector(".item");
  const prodImg = document.querySelector(".img");
  const prodDesc = document.querySelector(".desc");
  const sizes = document.querySelector(".sizes");
  const cartTotal = document.getElementById("cart-total");
  //const prodFlavors = document.querySelector(".flavors");
  //const prodToppings = document.querySelector(".toppings");
  const addtoCartBtn = document.querySelector(".add-to-cart");
  function addOpacity(idShow, idHide) {
    idShow.classList.add("opacity");
    idShow.style.display = "block";
    idHide.classList.remove("opacity");
    idHide.style.display = "none";
  }
  // function to display items
  const http = new XMLHttpRequest();
  const url = "inventory.json";
  let data = [];
  http.onreadystatechange = function () {
    if (this.readyState == 4) {
      if (this.status == 200) {
        let inventory = JSON.parse(this.responseText);
        data = inventory;
        makeMenu(data);
        window.addEventListener("click", function (e) {
          // If the button is a picture
          if (
            e.target.classList.contains("toggle") ||
            e.target.classList.contains("keep-shopping")
          ) {
            if (e.target.classList.contains("keep-shopping")) {
              // hide card and show gallery
              addOpacity(gallery, product);
            } else {
              //hide gallery and show card
              addOpacity(product, gallery);

              //Make Product Card
              makeCard(e.target.alt, data);

              //Check if item is already in the cart
              checkCartItems(e.target.alt);
            }
          } else if (e.target.classList.contains("add-to-cart")) {
            e.preventDefault();
            addToCart();
          } else if (e.target.classList.contains("remove-from-cart")) {
            e.preventDefault();
            //remove item
            removeFromCart();
          }
        });
        // end of opacity toggle
      }
    }
  };
  http.open("get", url, true);
  http.send();
  //Append inventory to DOM
  function makeMenu(list) {
    for (i = 0; i < list.length; i++) {
      console.log(list[i].img);
      picture = list[i].img;
      name = list[i].item;
      menu.innerHTML += `<li><img class="toggle" src='${picture}' alt='${name}'></li>`;
    }
  }
  function makeCard(itemName, list) {
    for (i = 0; i < list.length; i++) {
      if (itemName == list[i].item) {
        prodName.innerHTML = list[i].item;
        prodImg.src = list[i].img;
        prodDesc.innerHTML = list[i].desc;
        //Flavors f(x)
        //addOptions(list[i].flavors, prodFlavors, "options");
        //Toppings f(x)
        //addOptions(list[i].toppings, prodToppings, "checkbox");
      }
    }
  }
  addOptions = function (curItem, div, type) {
    if (type == "options") {
      div.innerHTML = `<option value="">Open this select menu</option>`;
      for (i = 0; i < curItem.length; i++) {
        div.innerHTML += `<option value="${curItem[i]}">${curItem[i]}</option>`;
      }
    } else if (type == "checkbox") {
      div.innerHTML = ``;
      for (i = 0; i < curItem.length; i++) {
        div.innerHTML += `       <label class="form-check-label" for="${curItem[i]}">
      <input class="form-check-input" type="checkbox" value="${curItem[i]}" id="${curItem[i]}">${curItem[i]}
    </label>`;
      }
    }
  };
  addToCart = function () {
    let itemToAdd = prodName.innerHTML;
    let errorDiv = document.querySelector(".invalid-feedback");
    let price = validateCard();
    if (price != false) {
      if (sessionStorage.getItem(`${itemToAdd}`)) {
        console.log("already added item!");
      } else {
        objStored = `{"item": "${itemToAdd}", "price": ${price}, "quantity":${1}}`;
        sessionStorage.setItem(`${itemToAdd}`, objStored);
      }
      //change cart button to remove
      checkCartItems(prodName.innerHTML);
      errorDiv.style.display = "none";
    } else {
      errorDiv.style.display = "block";
      errorDiv.innerHTML = "Please Select which drink size you would like";
    }
  };
  //Remove item
  removeFromCart = function () {
    itemToRemove = prodName.innerHTML;
    if (sessionStorage.getItem(itemToRemove)) {
      sessionStorage.removeItem(itemToRemove);
      //change cart button to add to cart
      checkCartItems(prodName.innerHTML);
    }
  };
  //check session Storage for an item
  checkCartItems = function (productName) {
    if (sessionStorage.getItem(productName)) {
      addtoCartBtn.className = "card-link btn btn-dark remove-from-cart p-1";
      addtoCartBtn.innerHTML = "X Remove";
    } else {
      console.log("not in the cart");
      addtoCartBtn.className = "card-link add-to-cart btn btn-danger p-1";
      addtoCartBtn.innerHTML = "Add to Cart";
    }
    //spit out the current price
    spitOutCartTotal();
  };
  validateCard = function () {
    let selections = sizes.children;
    let price = false;
    for (i = 0; i < selections.length; i++) {
      let input = selections[i].children[0];
      if (input.checked == true) {
        price = input.value;
      }
    }
    return price;
  };
  //Cart total helper function
  spitOutCartTotal = function () {
    //Total Price Variable
    let total = 0;
    for (i = 0; i < sessionStorage.length; i++) {
      let curItem = sessionStorage.getItem(sessionStorage.key(i));
      let info = JSON.parse(curItem);
      console.log(info);
      if (info.price) {
        amount = info.price * info.quantity;
        total += amount;
      }
    }
    cartTotal.innerHTML = `$${total.toFixed(2)}`;
  };
  window.onload = spitOutCartTotal();
})();
