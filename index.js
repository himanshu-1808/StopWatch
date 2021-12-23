$(document).ready(function(){
    $("#setAlarm").click(function(){
      $(".input").show(700);
    });
  });
  
  
  let [milliseconds, seconds, minutes, hours] = [0, 0, 0, 0];
  let timerRef = document.querySelector(".timerDisplay");
  let int;
  let int2;
  document.getElementById("startTimer").addEventListener("click", () => {
    int = setInterval(displayTimer, 10);
  });
  document.getElementById("pauseTimer").addEventListener("click", () => {
    clearInterval(int);
  });
  document.getElementById("resetTimer").addEventListener("click", () => {
    clearInterval(int);
    [milliseconds, seconds, minutes, hours] = [0, 0, 0, 0];
    timerRef.innerHTML = "00 : 00 : 00 : 000";
  });
  
  function displayTimer() {
  
      var str = document.getElementById("login").value;
      let min;
      let sec;
      let hrs;
      const a = str.split(":");
      let l = a.length;
      milliseconds +=10;
    
    if (milliseconds == 1000) {
      milliseconds = 0;
      seconds++;
      if (seconds == 60) {
        seconds = 0;
        minutes++;
        
        if (minutes == 60) {
          minutes = 0;
          hours++;
        }
      }
      if (l == 2) {
        min = a[0];
        sec = a[1];
       
     } else if (l == 3) {
         min = a[1];
         sec = a[2];
       hrs=a[0];
     }
      if((sec==seconds && min==minutes)|| (sec==seconds && min==minutes && hrs==hours)){
        alert("Times Up!"); 
    }
   
    
        
  }
    let h = hours < 10 ? "0" + hours : hours;
    let m = minutes < 10 ? "0" + minutes : minutes;
    let s = seconds < 10 ? "0" + seconds : seconds;
    let ms =
      milliseconds < 10
        ? "00" + milliseconds
        : milliseconds < 100
        ? "0" + milliseconds
        : milliseconds;
    timerRef.innerHTML = `${h} : ${m} : ${s} : ${ms}`;
    
  }