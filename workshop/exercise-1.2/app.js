// Exercise 1.2
// ------------
// DON'T COPY/PASTE THE LAST EXERCISE. REWRITE IT FROM SCRATCH!
// Similar to the last exercise, write an app that gives the user
// a random amount of time (between 3 and 5 seconds) to click anywhere on the
// screen.
//
// But this time, let's let the user know how much time they have to actually
// 'click'. If they click inside of the required time, you should tell them
// that they've won, else let them know that they've lost.

// In short,
// Replicate (and I mean, REWRITE it from scratch) the last exercise, and add
// - random amount of time to click (between 3 and 5 seconds)
// - tell the user how much time they have to click.

// HINTS:
// - You can use Math.random to generate a random number betwen 0 and 1, and
//   use math operators to scale it between 3 and 5 seconds

// Stretch goal
// Make the countdown live (show a countdown that updates several times a
// second)

const body = document.body;
body.style.height = '100vh';
body.style.backgroundColor = 'salmon';

let result = document.getElementById('result');
let win = false;

//this function will run if you win
function click() {
  win = true;
  result.innerText = 'You Win!';

  body.removeEventListener('click',click);
}

body.addEventListener('click',click);

//this function will run in the lose case
function lose() {
  if(!win) {
    result.innerText = 'You lose!';

    body.removeEventListener('click',click);
  }

  //the countdown should happen the moment the page starts
}

//this function returns an integer between min and max, inclusive.
function randomTime(min,max) {
  return Math.floor(Math.random()* (max - min + 1)) + min;
}

//test the function
// console.log(randomTime(3,5)*1000);

//define the start time
let time = randomTime(3,5);
document.getElementById('time').innerText = `${time}`;
console.log(time);

// function countdown () {
//   let timer = document.getElementById('time');

//   timer.innerText = `${time}`;
//   // console.log(timer)
//   timer--;
//   if(timer <= 0) {
//     timer = 0;
//     clearInterval(countdown);
//   }
// }

let countdown = setInterval(function () {
  time -= 1;
  document.getElementById('time').innerText = `${time}`;
  console.log(time);

  if(time == 0) {
    time = 0;
    clearInterval(countdown);
  } else if (win) {
    time = 0;
    clearInterval(countdown);
  }


}, 1000);

//lose function activates between 3-5 seconds
setTimeout(lose, time*1000);