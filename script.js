$(function () {

  // Display Current Date and Time
  var Target = document.getElementById("currentDay");
  function clock() {
    var time = new Date();

    var month = time.getMonth();
    var date = time.getDate();
    var day = time.getDay();
    var year = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    var week = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri','Sat', 'Sun'];

    var hours = time.getHours();
    var minutes = time.getMinutes();
    var seconds = time.getSeconds();

    Target.innerText = 
    `${year[month]}. ${date}. ${week[day]}. ` +
    `${hours < 10 ? `0${hours}` : hours}:${minutes < 10 ? `0${minutes}` : minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;

  }
  clock();
  setInterval(clock, 1000);
  
  // Click events on the save button and Save the data in local storage
  $(".saveBtn").on("click", function () {
    console.log(this);
    var scheduledEvent = $(this).siblings(".description").val();
    var scheduledTime = $(this).parent().attr("id");

    localStorage.setItem(scheduledTime, scheduledEvent);

  })

  // Load the data from local storage
  $("#hour-9 .description").val(localStorage.getItem("hour-9"));
  $("#hour-10 .description").val(localStorage.getItem("hour-10"));
  $("#hour-11 .description").val(localStorage.getItem("hour-11"));
  $("#hour-12 .description").val(localStorage.getItem("hour-12"));
  $("#hour-13 .description").val(localStorage.getItem("hour-13"));
  $("#hour-14 .description").val(localStorage.getItem("hour-14"));
  $("#hour-15 .description").val(localStorage.getItem("hour-15"));
  $("#hour-16 .description").val(localStorage.getItem("hour-16"));
  $("#hour-17 .description").val(localStorage.getItem("hour-17"));



  // I'm still confused how to use dayjs
  // The code below is not working
  // Change Colors - past, present, future
  const dayjs = require("dayjs");
  
  function color() {
    var currentTime = dayjs().get('h');
  
    var hour9 = 9;
    var hour10 = 10;
    var hour11 = 11;
    var hour12 = 12;
    var hour13 = 13;
    var hour14 = 14;
    var hour15 = 15;
    var hour16 = 16;
    var hour17 = 17;

    if (currentTime < hour9) {
      $("#hour-9").addClass("future");
    } else if (currentTime > hour9) {
      $("#hour-9").addClass("past");
    } else if (currentTime = hour9) {
      $("#hour-9").addClass("present");
    }
    
    if (currentTime < hour10) {
      $("#hour-10").addClass("future");
    } else if (currentTime > hour10) {
      $("#hour-10").addClass("past");
    } else if (currentTime = hour10) {
      $("#hour-10").addClass("present");
    }
    
    if (currentTime < hour11) {
      $("#hour-11").addClass("future");
    } else if (currentTime > hour11) {
      $("#hour-11").addClass("past");
    } else if (currentTime = hour11) {
      $("#hour-11").addClass("present");
    }
    
    if (currentTime < hour12) {
      $("#hour-12").addClass("future");
    } else if (currentTime > hour12) {
      $("#hour-12").addClass("past");
    } else if (currentTime = hour12) {
      $("#hour-12").addClass("present");
    }
    
    if (currentTime < hour13) {
      $("#hour-13").addClass("future");
    } else if (currentTime > hour13) {
      $("#hour-13").addClass("past");
    } else if (currentTime = hour13) {
      $("#hour-13").addClass("present");
    }
    
    if (currentTime < hour14) {
      $("#hour-14").addClass("future");
    } else if (currentTime > hour14) {
      $("#hour-14").addClass("past");
    } else if (currentTime = hour14) {
      $("#hour-14").addClass("present");
    }
    
    if (currentTime < hour15) {
      $("#hour-15").addClass("future");
    } else if (currentTime > hour15) {
      $("#hour-15").addClass("past");
    } else if (currentTime = hour15) {
      $("#hour-15").addClass("present");
    }
    
    if (currentTime < hour16) {
      $("#hour-16").addClass("future");
    } else if (currentTime > hour16) {
      $("#hour-16").addClass("past");
    } else if (currentTime = hour16) {
      $("#hour-16").addClass("present");
    }
    
    if (currentTime < hour17) {
      $("#hour-17").addClass("future");
    } else if (currentTime > hour17) {
      $("#hour-17").addClass("past");
    } else if (currentTime = hour17) {
      $("#hour-17").addClass("present");
    }
  }
  color();

});