
// ######################### TIMER WATCH #####################################

function addZero(i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}

let countdown;


//coundown start button
function countdownStart() {

  //prevent start btn from being repeated
  document.getElementById("start").removeEventListener('click', gameStart);


  //initial time parameters, just let 5 seconds pass
  let hours = 0;
  let minutes = 0;
  let seconds = 5;

  // console.log(hours.length, minutes.length, seconds.length);

  //countdown begins
  countdown = setInterval(function() {
    
    //end condition, when timer is done
    if(hours == 0 && minutes == 0 && seconds == 0) {
      window.alert("Time is Up!");

      //exit the setInterval() function
      clearInterval(countdown);

      //reset timer
      countdownStop();

      //add back the start btn functionality
      document.getElementById("start").addEventListener('click', countdownStart);

      //exit function
      return;

    //decrease minutes when seconds count over
    } else if(seconds <= 0 && minutes > 0){
      seconds = 60;
      minutes--;

    //decrease hours when minutes count over
    } else if(minutes <= 0 && hours > 0) {
      seconds = 60;
      minutes = 59;
      hours --;
    } 
    
    //always check above then decrease seconds by 1
    seconds--;
    
    //this is to insert the time into the html
    let hoursT = document.getElementById('hours');
    let minutesT = document.getElementById('minutes');
    let secondsT = document.getElementById('seconds');

    hoursT.innerText = addZero(hours);
    minutesT.innerText = addZero(minutes);
    secondsT.innerText = addZero(seconds);

    // console.log(hours, minutes, seconds);

    let count = 0;

    for(let x = 1; x<=10; x++){
      let checkGreen = document.getElementById(`btn-${x}`);
      if(checkGreen.classList.contains('green')){
        count++;
        console.log(count);
      }
    }
    if(count >= 10) {
      console.log('you win!');
    }

  },1000)

}

//stop btn function
function countdownStop() {

  //stop the current timer
  clearInterval(countdown);

  //set default start time to 00:00:00
  let hours = document.getElementById('hours');
  let minutes = document.getElementById('minutes');
  let seconds = document.getElementById('seconds');

  hours.innerText = addZero(0);
  minutes.innerText = addZero(0);
  seconds.innerText = addZero(0);


  //Add back the start button functionality.
  document.getElementById("start").addEventListener('click', countdownStart);
}

//add event listener to the start and stop button
// document.getElementById("start").addEventListener('click', countdownStart);
document.getElementById("start").addEventListener('click', gameStart);
