(function () {
  // Form elements
  const myForm = document.getElementById("myForm");
  const vocabWord = document.getElementById("vocab-input");
  const definition = document.getElementById("definition");

  // Flashcards List
  const flashcardsDiv = document.querySelector(".flashcards");

  // FlashCard Object
  function flashCard(vocab, def) {
    this.vocab = vocab;
    this.def = def;
    this.createCard = function () {
      flashcardsDiv.innerHTML +=
        "<li class='card'>" +
        "<div class='card-body'>" +
        "<p class='card-text'>" +
        def +
        "</p>" +
        "</div>" +
        "<div class='card-footer'><div class='card-title'>" +
        vocab +
        "</div>" +
        "<button class='btn btn-danger'>X</button>" +
        "</div>" +
        "</li>";
    };
  }

  myForm.addEventListener("submit", (e) => {
    e.preventDefault();
    let newCard = new flashCard(vocabWord.value, definition.value);
    newCard.createCard();
  });
  window.addEventListener("click", function (e) {
    if (e.target.classList.contains("btn-danger")) {
      console.log("X Button", e.target.parentNode);
      e.target.parentNode.parentNode.parentNode.removeChild(
        e.target.parentNode.parentNode
      );
    }
  });
})();
