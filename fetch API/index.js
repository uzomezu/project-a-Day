(() => {
  const url = "info.json";

  fetch(url)
    .then((response) => response.json())
    .then((data) => console.log(data));
})();
