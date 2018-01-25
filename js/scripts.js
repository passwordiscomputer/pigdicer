//BACKY
function Player(name) {
  this.name = name;
  this.points = 0;
}

function Game() {
  this.playerArray = [];

}

function roll() {
  var num = Math.floor(Math.random() * 6) + 1;
  if ( num === 1) {
    return 0;
  } else {
    return num;
  }
}

Player.prototype.turn = function() {
  var choice = true;
  var points = 0;
  while(choice === true) {
    var num = roll();
    $("#currentRoll").text(num);
    if (num === 0) {
    points = 0;
    return points;
  } if (choice === false) {
      points = (points + num);
      this.points = this.points + points;
      return points;
    } else if (choice === true) {
      this.points = (points + num);
    }
  }
}

function playerStart() {
  var num = Math.floor(Math.random() * 2) + 1;
  if (num === 1) {
    return alert("Player X starts.");
  } else {
    return alert("Player Y starts.");
  }
}

// function play() {
//   while (100 > player.points) {
//   }
// }
//FRONTY

$(document).ready(function() {
  $("form#playerNameInput").submit(function(event) {
    var game1 = new Game();
    game1.playerArray.push(new Player("Chase"));
    game1.playerArray.push(new Player("Johnny"));
    game1.playerArray[1].turn();
    event.preventDefault();
  });
});

$("#roll").click(function() {
});
