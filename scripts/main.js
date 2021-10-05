function setUserName() {
  let userName = prompt("Please enter your name: ");
  localStorage.setItem("name", userName);
}

let myButton = document.querySelector("button");
myButton.onclick = function () {
  setUserName();
};

let gtHeading = document.querySelector("h1");

if (!localStorage.getItem("name")) {
  setUserName();
} else {
  let storedName = localStorage.getItem("name");
  gtHeading.textContent = "Hi," + storedName;
}
