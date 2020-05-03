
//Create a process that will add all 20 buttons
for(let i=0; i<20; i++) {

  //select the main tag
  let main = document.querySelector('main');

  //create a div tag
  let box = document.createElement('div');
  box.classList.add('btn');

  //insert the <div> into <main>
  main.appendChild(box);
  

  //create a button tag
  let button = document.createElement('button');
  button.innerText = 'Click Me';

  //insert the <button> into the <div> tag
  box.appendChild(button);
  
  console.log(i);
}