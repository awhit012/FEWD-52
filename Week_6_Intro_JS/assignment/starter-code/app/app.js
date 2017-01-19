var rockButton = document.getElementById('rock');
var paperButton = document.getElementById('paper');
var scissorsButton = document.getElementById('scissors');
var computerPlay = document.getElementById('computer-play');
var playerPlay = document.getElementById('player-play');
var rockUrl = "http://geology.com/articles/difficult-rocks/difficult-rock-identification.jpg"
var paperUrl = "http://www.psdgraphics.com/file/crumpled-paper.jpg"
var scissorsUrl = "http://images.wisegeek.com/black-handled-scissors.jpg"

var rps = [
  rockUrl,
  paperUrl,
  scissorsUrl
]
rockButton.onclick = function() {
  playerPlay.src = rps[0]
  getComputerPlay();
}

paperButton.onclick = function() {
  playerPlay.src = rps[1]
  getComputerPlay();
}

scissorsButton.onclick = function() {
  playerPlay.src = rps[2]
  getComputerPlay();
}

var getComputerPlay = function() {
  var randomIndex = Math.floor(Math.random() * 3);
  console.log(randomIndex)
  computerPlay.src = rps[randomIndex];
  calculateWinner();
}

var calculateWinner = function() {
  // YOUR CODE GOES HERE
}
