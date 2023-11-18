// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
  var timeBlockEl = $(".time-block");
  var textAreaContents = {};

  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  
  // Sets time block colors depending on hour
  timeBlockEl.each(function() {
    var hour = +this.id.split("-").pop();
    var curHour = dayjs().hour();

    if (hour === curHour) {
      $(this).children("textarea").addClass("present");
    } else if (hour < curHour) {
      $(this).children("textarea").addClass("past");
    } else {
      $(this).children("textarea").addClass("future");
    }
  })

  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
  $(".saveBtn").on("click", function() {
    console.log("Hi");
  })

});
