var state = true;
function toggleLight() {
  var image = document.getElementById("image");
  state = !state;
  image.src = state ? "img/on.jpg" : "img/off.jpg";
}


  var timeLeft = 0;
  var setting = 0;

  function setTimer() {
    var time = document.getElementById("time").value;

    if (time == "") {
      alert("請輸入倒數時間");

    } else if (isNaN(time)) {
      time = parseInt(time);
    }
    else {
      document.getElementById("timer").innerHTML = timeLeft;
      timeLeft = time;
      var setting = setInterval(countDownTimer, 1000);

    }
    document.getElementById("time").value = "";
  }



function countDownTimer() {
    timeLeft -= 1;

    if (timeLeft <= 0) {
      document.getElementById("image").src = "img/off.jpg";
      clearInterval(setting);
    }

  document.getElementById("timer").innerHTML = timeLeft;
}



  //  var setting = setInterval(countDownTimer, 1000);
