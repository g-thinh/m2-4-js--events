
// ###########################################################################
// ######################### HOIST FUNCTIONS #################################
// ###########################################################################

//gets node by id, and toggles the green class
function toggleGreen(event) {
  let id = event.target.id;
  document.getElementById(id).classList.toggle('green');


    // get id
    const buttonId = id.split('-')[1];
    // toggle clickedState value
    clickedState[buttonId] = !clickedState[buttonId];
}

//returns random integer inclusive
function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

//formatting function to add a zero in front of a time integer
function addZero(i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}

function checkArray(arr) {
  return arr.every(function (item) {
    return item;
  });
}

let timer = document.getElementById('seconds');
let BUTTONS = Math.floor(Math.random() * 10) + 1;
let clickedState = [];
let startButton = document.getElementById('start');
let timebox = document.querySelector('ul');

// ###########################################################################
// ############################# GAME START ##################################
// ###########################################################################

startButton.addEventListener('click', gameStart);

function gameStart() {

  startButton.remove();

  //timer
  countdownStart();

  //add buttons
  addButtons();

  //check if buttons are all green
  checkBtnStatus();

}


//timer function
function countdownStart() {

  startButton.removeEventListener('click', gameStart);

  timer.innerText = 0;
  let seconds = randomNumber(5,10);

  const countdown = setInterval(function() {
    if (seconds == 0) {
      timer.innerText = 0;
      endGame();
      clearInterval(countdown);
      
      return;
    }
    timer.innerText = seconds;
    seconds--;
    console.log(seconds);
    
  },1000)

}

//add random buttons
function addButtons() {
  for(let i=0; i<BUTTONS; i++) {
    let main = document.querySelector('main');
    let button = document.createElement('button');
    button.innerText = `${i}`;
    button.id = `btn-${i}`;
    button.style.cssText = `grid-row-start: ${randomNumber(0,4)}`;
    main.appendChild(button);

    clickedState.push(false);

    button.addEventListener('click', toggleGreen);
  }
}

function endGame() {
  // to win the game ALL buttons must be green
  if (checkArray(clickedState)) {
    // console.log('You Win!!!!');
    timer.innerText = 'You Win!!'
    timebox.style.backgroundColor = 'green';
    timebox.style.color = 'white';

  } else {
    // console.log('You Lose...');
    timer.innerText = 'You Lose!!'
    timebox.style.backgroundColor = 'crimson';
    timebox.style.color = 'white';
  }
  console.log(clickedState);
}

function checkBtnStatus(){
  const buttonStatus = setInterval(function () {
    if (checkArray(clickedState)) {
      timer.innerText = 0;
      endGame();
      clearInterval(buttonStatus);
    }
  }, 400);

}
