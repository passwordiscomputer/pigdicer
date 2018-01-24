//BACK END
function roll() {
  var num = Math.floor(Math.random() * 6) + 1;
  if ( num === 1) {
    return 0;
  } else {
    return num;
  }
}

function turn() {
  var choice = true;
  var points = 0;
  while(choice === true) {
    choice = confirm("Would you like to roll again?"); /*REMOVE CONFIRM BOX WHEN INTEGRATING PLAYER FUNCTIONS*/
    var num = roll();
    if (num === 0) {
    points = 0;
    return points;
  } if (choice === false) {
      points = (points + num);
      return points;
    } else if (choice === true) {
      points = (points + num);
    }
  }
}

function play() {
  var pointTotal = 0;
  if points = 100; {
    /*DISPLAY WIN MESSAGE*/
  } else {
    /*DISPLAY WIN CONDITION NOT MET*/
  }
}

//FRONT END
