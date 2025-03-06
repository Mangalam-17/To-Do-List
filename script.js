let btn = document.querySelector("button");
btn.onclick = addTask;

const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask() {
  if (inputBox.value === "") {
    alert("You must write something");
  } else {
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    listContainer.appendChild(li);

    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
  }
  inputBox.value = "";
  saveTask();
}

listContainer.addEventListener("click", function (event) {
  //the elements down below are written in uppercase because its value is like that only
  if (event.target.tagName === "LI") {
    event.target.classList.toggle("checked");
    saveTask();
  } else if (event.target.tagName === "SPAN") {
    event.target.parentElement.remove();
    saveTask();
  }
});

inputBox.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    addTask();
    saveTask();
  }
});

// Adding the data in the browser
function saveTask() {
  localStorage.setItem("data", listContainer.innerHTML);
}

// Accessing the data as soon as the browser opens up
function showTask() {
  listContainer.innerHTML = localStorage.getItem("data");
}
showTask();
