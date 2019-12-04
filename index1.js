const container = document.getElementsByClassName('container')[0];
const image = document.getElementById('name');
let totalTime = 5000,
    startTime,
    timerRunning = false,
    timerId;


function startTimer() {
  startTime = performance.now();
  timerRunning = true;
  console.log("Inside of startTimer")

  function timerLoop() {
    timerId = setTimeout(() => {
      if (timerRunning) {
        console.log("Inside of timerLoop")
        totalTime += (performance.now() - startTime);
        console.log("totaltime: " + totalTime)
        timerLoop();
      }
    }, 500);
  }
  console.log("outside of timerLoop")
  timerLoop();
}

function pauseTimer() {
  console.log("Inside of pauseTimer")
  timerRunning = false; 
}

function handlePlayState() {
  if (image.style.animationPlayState === 'running' || image.style.animationPlayState === '') {
    image.style.animationPlayState = 'paused';
    if (image.classList.contains('initial-slide')) {
      console.log("5")
      startTimer()
    }
  } else if (image.style.animationPlayState === 'paused') {
    image.style.animationPlayState = 'running';
    if (image.classList.contains('initial-slide')) {
      console.log("6")
      pauseTimer();
    }
  }
}

function handleAnimation() {
  if (image.classList.contains('animation-initiated')) {
    console.log("1")
    handlePlayState();
  } else {
    console.log("2")
    image.classList.add('animation-initiated');
    image.classList.add('initial-slide');

    console.log("3")
    setTimeout(() => {
      image.classList.remove('initial-slide');
      image.classList.add('full-slide');
      totalTime = 0;
      clearTimeout(timerId);
    }, totalTime);
    console.log("4")
  }
}

container.addEventListener('click', handleAnimation);

// ['click', 'keydown'].forEach( event => {
//   if ((event == 'keydown' && event.keyCode == 32) || event == 'click') {
//     container.addEventListener(event, handleAnimation);
//   }
// });

// on inital page load

// on first click - animation starts
// handleAnimation is called -> else statement { animation-initiated and initial-slide are added}

// on click - animation stops
// handleAnimation is called again -> if statement { handlePlayState() is called -> 

// 