let greetings = document.getElementById("greetings");
let userName;

function setUserName() {
  userName = prompt("Please input your name.");
  localStorage.setItem("name", userName);
  greetings.innerHTML = "Hey, Welcome! " + userName + ".";
}

if (!localStorage.getItem("Name")) {
  setUserName();
} else {
  userName = localStorage.getItem("name");
  greetings.innerHTML = "Hey, Welcome! " + userName + ".";
}

document.getElementById("chusr").onclick = function () {
  setUserName();
};
