
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
  //assign current datetime
  let today = new Date();

  //use the .getHours(), .getMinutes(), and .getSeconds() method to return
  //the respective time values from the variable _today_ and nest it inside
  //the addZero() function for formating
  let time = 
    addZero(today.getHours()) + ":" 
    + addZero(today.getMinutes()) + ":" 
    + addZero(today.getSeconds());

  // console.log(time);
},1000)