function Timer() {

  let duration = 0

  function getDuration() {
    setInterval(myTimer, 1);
  }

  function myTimer() {
    duration ++
    console.log(duration)
  }

}

const timer = new Timer()

timer.getDuration()