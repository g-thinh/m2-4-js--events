
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



// #################### RANDOM STUFF THAT WORKS ##############################

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