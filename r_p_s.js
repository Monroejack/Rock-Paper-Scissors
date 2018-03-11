var playerScore = 0;
var computerScore = 0;

function randomThrow() {
  var randomIndex = Math.floor(Math.random() * 3);
  return ['rock', 'paper', 'scissors'][randomIndex];
}

function gameReset() {
  playerScore = 0;
  computerScore = 0;
  updateScoreboard();
  $('tbody').html("");
}

function updateScoreboard() {
  $('#playerScore').html(playerScore);
  $('#computerScore').html(computerScore);
}

function gamePlay(playerThrow) {
  var computerThrow = randomThrow();
  var result;
console.log('playerThrow=' + playerThrow)
console.log('computerThrow=' + computerThrow)
  if (playerThrow == computerThrow) {
    result = 'TIE'
  } else if ((playerThrow == 'rock' && computerThrow == 'scissors') ||
  (playerThrow == 'scissors' && computerThrow == 'paper') ||
  (playerThrow == 'paper' && computerThrow == 'rock')) {
 playerScore++;
 result = 'player win'
  } else {

    computerScore++;
    result = 'computer win';
}

updateScoreboard();

var summary = `You threw ${playerThrow}, computer ${computerThrow}. Result: ${result}.`;
$('tbody').append(`<tr><td>${summary}</td></tr>`)

}

$('#rock').click(function() {
  gamePlay('rock');
});
$('#scissors').click(function() {
  gamePlay('scissors');
});
$('#paper').click(function() {
  gamePlay('paper');
});

$('#reset-game').click(gameReset);
