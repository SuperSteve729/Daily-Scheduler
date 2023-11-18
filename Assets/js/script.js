$(function () {

  // Variable for time block since its used often
  var timeBlockEl = $(".time-block");
  // Object for text, to save
  var textAreaContents = {};

  // Load item if it exists, otherwise skip
  if (localStorage.getItem("toDoSchedule") != null) {
    textAreaContents = JSON.parse(localStorage.getItem("toDoSchedule"));
  }

  // Set the P area to the current day and month
  $("#currentDay").text(dayjs().format("dddd, MMMM DD"));

  // Set the text for each area depending on the hour
  // Set the color of the text area depending on the time whether its past or present or future
  timeBlockEl.each(function() {
    var hour = +this.id.split("-").pop();
    var curHour = dayjs().hour();

    $(this).children("textarea").val(textAreaContents[hour]);

    if (hour === curHour) {
      $(this).children("textarea").addClass("present");
    } else if (hour < curHour) {
      $(this).children("textarea").addClass("past");
    } else {
      $(this).children("textarea").addClass("future");
    }
  })

  // Set the text area into the object, then save it
  $(".saveBtn").on("click", function() {
    var hour = +this.parentElement.id.split("-").pop();

    textAreaContents[hour] = $(this).parent(timeBlockEl).children("textarea").val();

    localStorage.setItem("toDoSchedule", JSON.stringify(textAreaContents));
  })

});