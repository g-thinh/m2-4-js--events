// ###################### CREATE 20 BUTTONS ##################################

function toggleGreen(e) {
  let id = e.target.id;
  document.getElementById(id).classList.toggle('green');
}


//Create a process that will add all 20 buttons
for(let i=0; i<20; i++) {

  //select the main tag
  let main = document.querySelector('main');

  //create a div tag
  // let box = document.createElement('div');
  // box.classList.add('btn');

  //insert the <div> into <main>
  // main.appendChild(box);
  

  //create a button tag
  let button = document.createElement('button');
  button.innerText = `${i+1}`;
  
  //add an id to each button
  button.id = `btn-${i}`;

  //insert the <button> into the <div> tag
  main.appendChild(button);
  
  
  button.addEventListener('click', toggleGreen);
  // console.log(i);
}

// ################## CHANGE COLOR UPON CLICK #################################


//create a function to change the background color of a button element to green


