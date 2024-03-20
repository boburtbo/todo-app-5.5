const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-Container");
function addTack() {
  if (inputBox.value === "") {
    alert("inputga soz yozing!");
  } else {
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    listContainer.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "x";
    li.appendChild(span);
  }
  inputBox.value = "";
  saveData();
}

listContainer.addEventListener(
  "click",
  function (e) {
    if (e.target.tagName === "Li") {
      e.target.classList.toggle("chacked");
      saveData();
    } else if (e.target.tagName === "SPAN") {
      e.target.parentElement.remove();
      saveData();
    }
  },
  false
);
function saveData() {
  localStorage.setItem("data, ", list - Container.innerHTML);
}
function showTask() {
  listContainer.innerHTML = localStorage.getItem("data");
}
showTask();

function darkmode() {
  const body = document.body;
  const wasDarkmode = localStorage.getItem("darkmode") === "true";

  localStorage.setItem("darkmode", !wasDarkmode);
  body.classList.toggle("dark-mode", !wasDarkmode);
}
document.querySelector(".btn").addEventListener("click", darkmode);
