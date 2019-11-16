const menu = document.getElementById("menu");
const about = document.querySelector(".hidden");

menu.addEventListener("click", reveal);

function reveal() {
  if (about.classList.contains("hidden")) {
    about.classList.add("show");
    about.classList.remove("hidden");
  } else {
    about.classList.add("hidden");
    about.classList.remove("show");
  }
}
