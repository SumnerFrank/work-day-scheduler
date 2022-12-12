//these variables help to call back to HTML elements
var today = document.getElementById("currentDay");
const date = (new Date()).toDateString();
const time = (new Date()).toLocaleTimeString();
const currentHour = (new Date()).getHours();
today.innerHTML = date + "  " + time;
var timeBlocks = document.getElementsByClassName("time-block")
var allRows = $(".description")


//this function locally stores data when the save button is clicked
function saveFieldJQuery () {
  var taskInput = $(this).siblings(".description").val();
  var rowTime = $(this).parent().attr("id")
  localStorage.setItem(rowTime, taskInput);
}

//JQuery variable and event listener ("click") 
var saveBtnJQ = $(".saveBtn");
saveBtnJQ.on("click", saveFieldJQuery);

//for loop that runs through all possible times to accomplish 2 goals
//this loop will pull items in local storage and add them to the page upon refresh
//this loop will change the color of the time block based on the time of day 
for(let i = 0; i < allRows.length; i++) {
  var parentID = $(allRows[i]).parent().attr("id")
  $(allRows[i]).val(localStorage.getItem(parentID))
  if (currentHour > parentID) {
    allRows[i].classList.add("past");
  }
  if (currentHour == parentID) {
    allRows[i].classList.add("present")
  }
  if (currentHour < parentID) {
    allRows[i].classList.add("future")
  }
}

