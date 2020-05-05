// ###################### CREATE 20 BUTTONS ##################################
let clickedState = [];
function toggleGreen(e) {
  let id = e.target.id;
  document.getElementById(id).classList.toggle('green');
  // console.log((id).split('-')[1]);

  //count the number of btns that got clicked
  const idCount = id.split('-')[1];
  clickedState[idCount] = !clickedState[idCount];
}

//returns random integer inclusive
function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}


function gameStart() {
  //Create a process that will add all 20 buttons
  for(let i=1; i<=10; i++) {

    //select the main tag
    let main = document.querySelector('main');

    //create a button tag
    let button = document.createElement('button');
    button.innerText = `${i}`;
    
    //add an id to each button
    button.id = `btn-${i}`;

    //randomly add box based on grid layout 
    button.style.cssText = 
      `grid-row-start: ${randomNumber(1,4)}`;

    //insert the <button> into the <div> tag
    main.appendChild(button);
    
    button.addEventListener('click', toggleGreen);
    // console.log(i);
  }

  //start the coundown timer.
  countdownStart();






}
document.getElementById("start").addEventListener('click', gameStart);



