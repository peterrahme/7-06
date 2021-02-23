// connects "Age Guess" button to "checking" function
document.getElementById('button').addEventListener('click', checking)
let realAge = 16

function checking () {
  // Get realAge and converts it to a integer
  realAge = document.getElementById('input').value
  realAge = parseInt(realAge)

  // Looping until the user guess the correct age number
  while (realAge !== 16) {
    realAge = prompt('Would you like to guess my age?')
    realAge = parseInt(realAge)
    if (realAge === 16) {
      alert('You got it rigth! Do you want to play again? ')
    } else if (realAge < 16) {
      alert('You guessed too small, please try again.')
    } else if (realAge > 16) {
      alert('You guessed too big, please try again.')
    } else {
      alert('Invalid answer. Please try again.')
    }
  }
}
