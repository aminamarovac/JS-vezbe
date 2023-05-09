var count = 30.0;
var timer = setInterval(function () {
  count--;
  document.getElementById("timer").innerHTML = count.toString();
  if (count === 0) {
    clearInterval(timer);
    alert("Time has expired,please restart the quiz!");
  }
}, 1000);
function proveriOdgovor() {
  var izbor = document.querySelector('input[name="odgovor"]:checked').value;
  if (izbor == "tacanOdgovor") {
    alert("Tačan odgovor!");
  } else {
    alert("Netačan odgovor!");
  }
}

function ucitaj() {
  setTimeout(function () {
    if (!document.querySelector('input[name="odgovor"]:checked')) {
      alert("Isteklo vreme! Smatramo da ste izabrali pogrešan odgovor.");
    }
  }, 30000);
}

var seconds = 30;
function timerExpired() {
  console.log("Time has expired,please restart the quiz!");
}

function updateTimer() {
  console.log("Preostalo vreme: " + seconds);
  seconds--;

  if (seconds < 0) {
    clearTimeout(timer);
    timerExpired();
  }
}

var timer = setInterval(updateTimer, 1000);
setTimeout(proveriOdgovor,1000)