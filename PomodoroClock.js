// Step 1: Variables that store the state of the clock
    var minutes = 25;
    var seconds = 0;
    var timer = null;        // holds the interval so we can stop it later
    var onBreak = false;     // false = counting work time, true = counting break time

    // Step 2: Read the minutes typed in the work box
    function getWorkMinutes() {
      var value = parseInt(document.getElementById("workInput").value);
      if (isNaN(value) || value < 1) {
        value = 1;
      }
      return value;
    }

  // Step 3: Read the minutes typed in the break box
    function getBreakMinutes() {
      var value = parseInt(document.getElementById("breakInput").value);
      if (isNaN(value) || value < 1) {
        value = 1;
      }
      return value;
    }

    // Step 4: Show the current time on the page
    function updateDisplay() {
      var minText = minutes;
      var secText = seconds;

      // add a zero in front of single digits (5 becomes "05")
      if (minutes < 10) {
        minText = "0" + minutes;
      }
      if (seconds < 10) {
        secText = "0" + seconds;
      }

      document.getElementById("timeText").innerHTML = minText + ":" + secText;
    }

    // Step 5: This runs once every second
    function countDown() {
      if (seconds == 0) {
        if (minutes == 0) {
          if (onBreak == false) {
            // work time is finished, so start the break
            onBreak = true;
            minutes = getBreakMinutes();
            seconds = 0;
          } else {
            // break is finished, so stop the timer
            clearInterval(timer);
            timer = null;
            return;
          }
        } else {
          minutes = minutes - 1;
          seconds = 59;
        }
      } else {
        seconds = seconds - 1;
      }
      updateDisplay();
    }

    // Step 6: Start button
    function startTimer() {
      if (timer == null) {            // only start if it is not already running
        timer = setInterval(countDown, 1000);
      }
    }

    // Step 7: Pause button
    function pauseTimer() {
      clearInterval(timer);
      timer = null;
    }

    // Step 8: Reset button (also runs when the work box changes)
    function resetTimer() {
      clearInterval(timer);
      timer = null;
      onBreak = false;
      minutes = getWorkMinutes();
      seconds = 0;
      updateDisplay();
    }