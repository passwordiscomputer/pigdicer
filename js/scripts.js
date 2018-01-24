function playerFirst(min, max) {
    Math.floor(Math.random() * 2) + 1;
}

function roll() {
  var num = Math.floor(Math.random() * 6) + 1;
  if ( num === 1) {
    return 0;
  } else {
    return num;
  }
}
