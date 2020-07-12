const button = document.getElementById("btn");
const userDiv = document.getElementById("userInfo");

function getJoke() {
  const ajax = new XMLHttpRequest();
  const url = "dom.txt";
  console.log(ajax.readyState);

  ajax.onreadystatechange = function () {
    if (ajax.readyState == 4) {
      if (ajax.status == 200) {
        let data = JSON.parse(ajax.responseText);
        button.addEventListener("click", () => {
          userDiv.innerHTML = "";
          let random = Math.floor(Math.random() * Math.floor(data.length));
          console.log(random);
          let keys = Object.keys(data[random]);
          let values = Object.values(data[random]);
          for (i = 0; i < keys.length; i++) {
            console.log(keys[i], values[i]);
            userDiv.innerHTML += `<p> ${keys[i]}: ${values[i]}</p>`;
          }
        });
      }
      if (ajax.status == 404) {
        console.log("File Content or resource not Found");
      }
    }
  };

  ajax.open("get", url, true);

  ajax.send();
}
// function typing(text, id) {
//   for (i = 0; i < text.length; i++) {
//     id.innerHTML += text.charAt(i);
//     setTimeout(typing, 5000);
//   }
// }
getJoke();
