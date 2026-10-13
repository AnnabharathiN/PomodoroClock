
    var minutes = 25;
    var seconds = 0;
    var timer = null;        
    var onBreak = false;     

      function getWorkMinutes() {
      var value = parseInt(document.getElementById("workInput").value);
      if (isNaN(value) || value < 1) {
        value = 1;
      }
      return value;
    }

    function getBreakMinutes() {
      var value = parseInt(document.getElementById("breakInput").value);
      if (isNaN(value) || value < 1) {
        value = 1;
      }
        
    function updateDisplay() {
      var minText = minutes;
      var secText = seconds;    
      if (minutes < 10) {
        minText = "0" + minutes;
      }
      if (seconds < 10) {
        secText = "0" + seconds;
      }
      document.getElementById("timeText").innerHTML = minText + ":" + secText;
    }
    
    function countDown() {
      if (seconds == 0) {
        if (minutes == 0) {
          if (onBreak == false) {
            onBreak = true;
            minutes = getBreakMinutes();
            seconds = 0;
          } else {
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
    
    function startTimer() {
      if (timer == null) {            
        timer = setInterval(countDown, 1000);
      }
    }

    function pauseTimer() {
      clearInterval(timer);
      timer = null;
    }

    function resetTimer() {
      clearInterval(timer);
      timer = null;
      onBreak = false;
      minutes = getWorkMinutes();
      seconds = 0;
      updateDisplay();
    }
