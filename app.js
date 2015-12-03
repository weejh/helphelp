var choiceOne = document.getElementById('choice1')
var choiceTwo = document.getElementById('choice2')

var totalOne = 0
var totalTwo = 0

document.querySelector('#score1').textContent = 1

// Add vote function - Button 1
function addVoteOne () {
  totalOne = totalOne + 1
}
choiceOne.onclick = addVoteOne()

// Add vote function - Button 2
function addVoteTwo () {
  totalTwo = totalTwo + 1
}
choiceTwo.onclick = addVoteTwo()

// Reset button with function
function reset () {
  totalOne = 0
  totalTwo = 0
}
reset.onclick = reset()
