function night_Or_Day(id) {
  if (id.checked == true) {
    document.getElementById("night-or-day").classList.remove("day");
    document.getElementById("night-or-day").classList.add("night");
    document.getElementById("root").style.background = "green";
  } else {
    document.getElementById("night-or-day").classList.remove("night");
    document.getElementById("night-or-day").classList.add("day");
    document.getElementById("root").style.background = "palegreen";
  }
}
