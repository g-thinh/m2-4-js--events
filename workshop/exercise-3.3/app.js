// ###################### CREATE 20 BUTTONS ##################################

function toggleGreen(e) {
  let id = e.target.id;
  document.getElementById(id).classList.toggle('green');
}

//returns random integer inclusive
function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}



//Create a process that will add all 20 buttons
for(let i=0; i<20; i++) {

  //select the main tag
  let main = document.querySelector('main');

  //create a button tag
  let button = document.createElement('button');
  button.innerText = `${i+1}`;
  
  //add an id to each button
  button.id = `btn-${i}`;

  //randomly add box based on grid layout 
  button.style.cssText = 
    `grid-row-start: ${randomNumber(1,4)}`;
    

  //can also be done with columns
  // button.style.cssText = 
  //   `grid-column-start: ${randomNumber(0,5)}`;

  //insert the <button> into the <div> tag
  main.appendChild(button);
  
  
  button.addEventListener('click', toggleGreen);
  // console.log(i);
}



