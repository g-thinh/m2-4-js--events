// Exercise 1.1
// ------------
// Write an app that gives the user 1s (or 1000ms) to click anywhere on the screen.
//
// If they click inside of the required time, you should tell them that they've won,
// else let them know that they've lost.

// Hints:
// - Target the <body>
// - setTimout is your friend.
// - You'll need a variable to keep track of whether the user has won or lost

// OPTIONAL
// Feel free to add some CSS to this once you're done
// --------------------------------------------------

let body = document.body;
body.style.height = '100vh';
body.style.backgroundColor = 'goldenrod';

let result = document.getElementById('result');

let win = false;

function click() {
  console.log('You were faster, you win!');
  win = true;
  result.innerText = 'You Win!!!';

  //remove event listern because you won
  body.removeEventListener('click',click);
}

body.addEventListener('click', click);

function lose() {
  if(!win) {
    result.innerText = 'You Lose!!!';
    console.log('you were slower, you lose!')

  //remove the event listener because you lost
  body.removeEventListener('click',click);
  }

}

setTimeout(lose, 2000);