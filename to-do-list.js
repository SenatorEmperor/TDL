const add = document.querySelector(".addBtn");
const clearall = document.querySelector(".clearBtn");
const notCompleted = document.querySelector(".notCompleted");
const completed = document.querySelector(".completed");
const input = document.querySelector("input");
const li = document.querySelector(".notCompleted li");

let itemsArrayNot = localStorage.getItem("notCompletedItems")
  ? JSON.parse(localStorage.getItem("notCompletedItems"))
  : [];

let itemsArrayCompleted = localStorage.getItem("completedItems")
  ? JSON.parse(localStorage.getItem("completedItems"))
  : [];

for (let i = 0; i < itemsArrayNot.length; i++) {
  let newList = document.createElement("li");
  newList.textContent = itemsArrayNot[i];
  let lineContainer = document.createElement("div");
  lineContainer.classList.add("line-container");
  lineContainer.append(newList);
  notCompleted.append(lineContainer);

  function deleteElement(array) {
    let index = array.indexOf(newList.textContent);
    console.log(index);
    array.splice(index, 1);
    localStorage.setItem("notCompletedItems", JSON.stringify(array));
  }

  function deleteElement2(array) {
    let index = array.indexOf(newList.textContent);
    console.log(index);
    array.splice(index, 1);
    localStorage.setItem("completedItems", JSON.stringify(array));
  }

  let doneBtn = document.createElement("button");
  doneBtn.innerText = "Done";
  doneBtn.classList.add("doneBtn", "cursor-trick");
  lineContainer.append(doneBtn);

  doneBtn.addEventListener("click", () => {
    lineContainer.remove();
    completed.append(lineContainer);
    doneBtn.remove();
    itemsArrayCompleted.push(newList.textContent);
    localStorage.setItem("completedItems", JSON.stringify(itemsArrayCompleted));
    console.log(itemsArrayNot);
    deleteElement(itemsArrayNot);
  });

  let delBtn = document.createElement("button");
  delBtn.innerText = "Delete";
  delBtn.classList.add("delBtn", "cursor-trick");
  lineContainer.append(delBtn);

  delBtn.addEventListener("click", () => {
    if (
      lineContainer.parentElement.classList.contains("notCompleted") == true
    ) {
      deleteElement(itemsArrayNot);
    }
    if (lineContainer.parentElement.classList.contains("completed") == true) {
      deleteElement2(itemsArrayCompleted);
    }
    lineContainer.remove();
  });
}

for (let i = 0; i < itemsArrayCompleted.length; i++) {
  let newList = document.createElement("li");
  newList.textContent = itemsArrayCompleted[i];
  let lineContainer = document.createElement("div");
  lineContainer.classList.add("line-container");
  lineContainer.append(newList);
  completed.append(lineContainer);

  function deleteElement2(array) {
    let index = array.indexOf(newList.textContent);
    console.log(index);
    array.splice(index, 1);
    localStorage.setItem("completedItems", JSON.stringify(array));
  }

  let delBtn = document.createElement("button");
  delBtn.innerText = "Delete";
  delBtn.classList.add("delBtn", "cursor-trick");
  lineContainer.append(delBtn);

  delBtn.addEventListener("click", () => {
    if (lineContainer.parentElement.classList.contains("completed") == true) {
      deleteElement2(itemsArrayCompleted);
    }
    lineContainer.remove();
  });
}

input.addEventListener("keyup", (event) => {
  if (event.key == "Enter") {
    addListElement();
  }
});

add.addEventListener("click", addListElement);

function addListElement() {
  let addElement = input.value.trim();
  if (addElement != "") {
    itemsArrayNot.push(addElement);
    localStorage.setItem("notCompletedItems", JSON.stringify(itemsArrayNot));
    let newList = document.createElement("li");
    newList.textContent = addElement;
    let lineContainer = document.createElement("div");
    lineContainer.classList.add("line-container");
    lineContainer.append(newList);
    notCompleted.append(lineContainer);
    function deleteElement(array) {
      let index = array.indexOf(newList.textContent);
      array.splice(index, 1);
      localStorage.setItem("notCompletedItems", JSON.stringify(array));
    }

    function deleteElement2(array) {
      let index = array.indexOf(newList.textContent);
      array.splice(index, 1);
      localStorage.setItem("completedItems", JSON.stringify(array));
    }

    let doneBtn = document.createElement("button");
    doneBtn.innerText = "Done";
    doneBtn.classList.add("doneBtn", "cursor-trick");
    lineContainer.append(doneBtn);

    doneBtn.addEventListener("click", () => {
      lineContainer.remove();
      completed.append(lineContainer);
      doneBtn.remove();
      itemsArrayCompleted.push(newList.textContent);
      localStorage.setItem(
        "completedItems",
        JSON.stringify(itemsArrayCompleted)
      );
      console.log(itemsArrayNot);
      deleteElement(itemsArrayNot);
    });

    let delBtn = document.createElement("button");
    delBtn.innerText = "Delete";
    delBtn.classList.add("delBtn", "cursor-trick");
    lineContainer.append(delBtn);

    delBtn.addEventListener("click", () => {
      if (
        lineContainer.parentElement.classList.contains("notCompleted") == true
      ) {
        deleteElement(itemsArrayNot);
      }
      if (lineContainer.parentElement.classList.contains("completed") == true) {
        deleteElement2(itemsArrayCompleted);
      }
      lineContainer.remove();
    });
    input.value = "";
  } else {
    alert("Please write something");
  }
}

function clearallFunction() {
  input.value = "";
  notCompleted.innerHTML = "";
  completed.innerHTML = "";
  localStorage.clear();
  location.reload();
}
clearall.addEventListener("click", clearallFunction);
