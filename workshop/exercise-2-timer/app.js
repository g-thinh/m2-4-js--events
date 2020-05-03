
// #################### DISPLAY CURRENT TIME ##################################

//This functions allows the time format to display as "HH:MM:SS"
//i.e. 1 hr, 1 min and 1 sec is displayed as "01:01:01" instead of "1:1:1"
function addZero(i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}


setInterval(function () {
  let today = new Date();
  let hours = addZero(today.getHours());
  let minutes = addZero(today.getMinutes());
  let seconds = addZero(today.getSeconds());

  let sectionA = document.getElementById('s1');

  // console.log(sectionA);
  sectionA.innerText = 
    `${hours}` + ":" +
    `${minutes}` + ":" +
    `${seconds}`;

},1000)



// ######################### STOP WATCH #####################################

let intervalStart;

function start() {

  //set default start time to 00:00:00
  let hours = 0;
  let minutes = 0;
  let seconds = 0;

  intervalStart = setInterval(function () {

    //always count seconds
    seconds++;

    //once 60 seconds, add 1 minute and reset seconds
    if(seconds == 60) {
      seconds = 0;
      minutes++;
    
    //once 60 minutes, add 1 hour and reset minutes
    } else if (minutes == 60) {
      minutes = 0;
      hours++;
    }
  
    let sectionB = document.getElementById('s2');
  
    // console.log(sectionA);
    sectionB.innerText = 
      `${addZero(hours)}` + ":" +
      `${addZero(minutes)}` + ":" +
      `${addZero(seconds)}`;

  },1000)

  //Remove the button functionality, so you wont mistakenly run multiple 
  //iterations of the function simultaneously.
  document.getElementById("start").removeEventListener('click', start);
}

function stop() {

  clearInterval(intervalStart);

  //set default start time to 00:00:00
  let hours = 0;
  let minutes = 0;
  let seconds = 0;

  let sectionB = document.getElementById('s2');

  // console.log(sectionA);
  sectionB.innerText = 
    `${addZero(hours)}` + ":" +
    `${addZero(minutes)}` + ":" +
    `${addZero(seconds)}`;

  //Add back the start button functionality.
  document.getElementById("start").addEventListener('click', start);
}


//add event listener to the start and stop button
document.getElementById("start").addEventListener('click', start);
document.getElementById("stop").addEventListener('click', stop);

// ######################### TIMER WATCH #####################################

let countdown;

//function to turn off editable fields
function editOff() {
  document.getElementById('hours').setAttribute('contenteditable','false');
  document.getElementById('minutes').setAttribute('contenteditable','false');
  document.getElementById('seconds').setAttribute('contenteditable','false');
}

//function to turn on editable fields
function editOn() {
  document.getElementById('hours').setAttribute('contenteditable','true');
  document.getElementById('minutes').setAttribute('contenteditable','true');
  document.getElementById('seconds').setAttribute('contenteditable','true');
}

//coundown start button
function countdownStart() {

  //prevent start btn from being repeated
  document.getElementById("startTimer").removeEventListener('click', countdownStart);

  //disable content editing while function is running
  editOff();

  //initial time parameters
  let hours = parseInt(document.getElementById('hours').innerText);
  let minutes = parseInt(document.getElementById('minutes').innerText);
  let seconds = parseInt(document.getElementById('seconds').innerText);

  // console.log(hours.length, minutes.length, seconds.length);

  //time input error, exits function if user inputs wrong time
  if(hours > 60 || minutes > 60 || seconds > 60) {
    window.alert('Invalid time input, please use a hh:mm:ss format!');

    //reset timer
    countdownStop();
    
    //exit function
    return;
  }

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
      document.getElementById("startTimer").addEventListener('click', countdownStart);

      //allow text fields to be editable again
      editOn();

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
    
    // else if(seconds == 0 && minutes == 0 && hours > 1) {
    //   seconds = 0;
    //   minutes = 60;
    //   hours--;
    // }

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

  },1000)

}

//stop btn function
function countdownStop() {

  //stop the current timer
  clearInterval(countdown);

  //make the text editable again
  editOn();

  //set default start time to 00:00:00
  let hours = document.getElementById('hours');
  let minutes = document.getElementById('minutes');
  let seconds = document.getElementById('seconds');

  hours.innerText = addZero(0);
  minutes.innerText = addZero(0);
  seconds.innerText = addZero(0);


  //Add back the start button functionality.
  document.getElementById("startTimer").addEventListener('click', countdownStart);
}

//add event listener to the start and stop button
document.getElementById("startTimer").addEventListener('click', countdownStart);
document.getElementById("stopTimer").addEventListener('click', countdownStop);



// #################### RANDOM STUFF THAT WORKS ##############################

/* 
let countdown;

function countdownStart() {
  let timerHours = parseInt(document.getElementById("hours").innerText);
  let timerMinutes = parseInt(document.getElementById("minutes").innerText);
  let timerSeconds = parseInt(document.getElementById("seconds").innerText);

  let timerState = (`${timerHours}:${timerMinutes}:${timerSeconds}`);
  console.log(timerState);

  countdown = setInterval(function() {

    timerSeconds--;

    if (timerSeconds == 0) {
      timerMinutes--;
      timerSeconds = 59;

    } else if (timerMinutes == 0) {
      timerHours--;
      timerMinutes = 59;
    }

    timerHours.innerText = `${addZero(timerHours)}`;
    timerMinutes.innerText = `${addZero(timerMinutes)}`;
    timerSeconds.innerText = `${addZero(timerSeconds)}`;
  
  },1000)


  if(timerHours == "00" && timerSeconds == "00" && timerMinutes == "00") {
    console.log('cannot start the timer, no time given')
    window.alert("Please enter a time");
  } else {
    console.log('timer started!')
    document.getElementById("startTimer").removeEventListener('click', countdownStart);
  }
  
}

document.getElementById("startTimer").addEventListener('click', countdownStart);

*/

//create a function that returns the current time
let timer = function() {

  //use a setInterval() function to create a timer
  setInterval(function () {

    //assign current datetime
    let today = new Date();

    //use the .getHours(), .getMinutes(), and .getSeconds() method to return
    //the respective time values from the variable _today_ and nest it inside
    //the addZero() function for formating
    let time = 
      addZero(today.getHours()) + ":" 
      + addZero(today.getMinutes()) + ":" 
      + addZero(today.getSeconds());

    console.log(time);
  },1000)
}