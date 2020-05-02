// Exercise 1.0
// ------------
// Write an app that registers a click anywhere on the screen.
// Once the user clicks, add some text to the page.

// Hints:
// - Target the <body>
// - By default, the <body> will be 0px tall. You can add a style in the
//   `<style>` tags to fill the viewport height.

// OPTIONAL
// Feel free to add some CSS to this once you're done
// --------------------------------------------------

//SOLUTION
//created a function to randomly choose an rgb color


let body = document.body;
body.style.height = '100vh';

//changes the background color randomly on click
body.addEventListener('click',function() {
  // body.style.backgroundColor = 'pink';
  body.style.backgroundColor = randomRGB();
})

function randomRGB() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  // console.log(`rgb(${r},${b},${g})`);
  return `rgb(${r},${b},${g})`;
}