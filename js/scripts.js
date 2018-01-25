//BACKY
function Player(name) {
  this.name = name;
  this.totalScore = 0;
  this.roundScore = 0;
}

function roll() {
  var num = Math.floor(Math.random() * 6) + 1;
  if ( num === 1) {
    return 0;
  } else {
    return num;
  }
}

$(document).ready(function() {
  $("form#playerNameInput").submit(function(event) {
    var player1 = new Player($("#player1").val());
    var player2 = new Player($("#player2").val());
    $("#player1Display").text(player1.name);
    $("#player2Display").text(player2.name);
    $("#currentRoll").text(player1.name + " please hit roll");
    event.preventDefault();
    $("#roll1").last().click(function(){
      var currentRoll = roll();
      $("#currentRoll").text(currentRoll);
      if (currentRoll === 0){
        console.log("You lost Son");
        player1.roundScore = 0;
        $("#bank1").text(player1.roundScore);
        $("#roll1").toggle();
        $("#roll2").toggle();
        $("#hold1").toggle();
        $("#hold2").toggle();
        $("#currentRoll").text(player1.name + " lost all points this round!");
      } else {
        player1.roundScore += currentRoll;
        $("#bank1").text(player1.roundScore);
      }

      });
      $("#roll2").last().click(function(){
        var currentRoll = roll();
        $("#currentRoll").text(currentRoll);
        if (currentRoll === 0){
          console.log("You lost Son");
          player2.roundScore = 0;
          $("#bank2").text(player2.roundScore);
          $("#roll1").toggle();
          $("#roll2").toggle();
          $("#hold1").toggle();
          $("#hold2").toggle();
          $("#currentRoll").text(player2.name + " lost all points this round!");
        } else {
          player2.roundScore += currentRoll;
          $("#bank2").text(player2.roundScore);
        }
        });
    $("#hold1").last().click(function(){
      player1.totalScore += player1.roundScore;
      $("#total1").text(player1.totalScore);
      $("#currentRoll").text(player1.name + " scored " + player2.roundScore + " points!");
      player1.roundScore = 0;
      $("#bank1").text(player1.roundScore);
      if (player1.totalScore >= 50){
        alert(player1.name + " has won because " + player1.name + " is better than " + player2.name + ".");
        location.reload();
      };
      $("#roll1").toggle();
      $("#roll2").toggle();
      $("#hold1").toggle();
      $("#hold2").toggle();
    });
      $("#hold2").last().click(function(){
        player2.totalScore += player2.roundScore;
        $("#total2").text(player2.totalScore);
        $("#currentRoll").text(player2.name + " scored " + player2.roundScore + " points!");
        player2.roundScore = 0;
        $("#bank2").text(player2.roundScore);
        if (player2.totalScore >= 50){
          alert(player2.name + " has won because " + player2.name + " is better than " + player1.name + ".");
          location.reload();
        };
        $("#roll1").toggle();
        $("#roll2").toggle();
        $("#hold1").toggle();
        $("#hold2").toggle();
      });
  });
});
