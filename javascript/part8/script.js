// example -1
document
  .getElementById("changeTextButton")
  .addEventListener("click", function () {
    let paragraph = document.getElementById("myParagraph");
    paragraph.textContent = "The paragraph has been chnaged";
    // console.log(paragraph.innerText);
  });

// example -2

document
  .getElementById("highlightFirstCity")
  .addEventListener("click", function () {
    let citiesList = document.getElementById("citiesList");
    citiesList.firstElementChild.classList.add("highlight");
  });

// example -3
document.getElementById("changeOrder").addEventListener("click", function () {
  let coffeeType = document.getElementById("coffeeType");
  coffeeType.textContent = "Espresso";
  coffeeType.style.backgroundColor = "brown";
  coffeeType.style.padding = "10px";
});

// example -4
document.getElementById("addNewIten").addEventListener("click", function () {
  let newItem = document.createElement("li");
  newItem.textContent = "Eggs";
  // console.log(shoppingList);
  shoppingList = document.getElementById("shoppingList").appendChild(newItem);
});

// example - 5
document
  .getElementById("removeLastTask")
  .addEventListener("click", function () {
    let taskList = document.getElementById("taskList");
    taskList.lastChild.remove();
  });

// example - 6
document.getElementById("clickMeButton").addEventListener("click", function () {
  alert("'click me!' Button Clicked!");
});

// example - 7
document.getElementById("teaList").addEventListener("click", function (event) {
  if (event.target && event.target.matches(".teaItem"))
    alert("You selected : " + event.target.textContent);
});

// example - 8
document
  .getElementById("feedbackForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    let feedback = document.getElementById("FeedbackInput").value;
    console.log(feedback);
    document.getElementById(
      "FeedbackDisplay"
    ).textContent = `Your Feedback : ${feedback}`;
  });

// example - 9
document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("domStatus").textContent = "dom loaded succesfully!";
});

// example - 10
document
  .getElementById("toggleHighlight")
  .addEventListener("click", function () {
    let descriptionText = document.getElementById("descriptionText");
    descriptionText.classList.toggle("highlight");
  });
