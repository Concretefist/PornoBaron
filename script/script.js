function function1() {
  document.title = "don't click here you fool!";
}

const newTab = () => {
  window.open(
    "sorry.html", "_blank");
}

const buttonElement = document.querySelector('.js-search-button');

buttonElement.addEventListener('click', newTab);

document.body.addEventListener("keydown", (event) => {
  if (event.key === "h") {
    prompt('hello, what is your wish?')
  } else if (event.key === "d") {
    prompt('how can i help you, sir?')
  }
})







