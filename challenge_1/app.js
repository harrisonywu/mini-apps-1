/*
2. on click...
    a. place a marker at that position (rerender the button so it includes an x/o in it)
        The click is player X
    b. check if this is a winning play (or a tie)
        IF it is, then send alert -> winning message
    c. prevent being clicked on again
    d. switch the next click to be that of player O
    e. 
3. have a button available that always resets the game to starting board state
    remember, player X must be first again
4. 

we are going to add EventListeners to... something.



EXTRA
add a button to the winning/tie alert that will allow for game to be reset

*/
// i need to create it so that when i click, i edit the matrix
// aka need to do multiple things
// onclick...
//    1. change visually
//    2. change the inner x and o's
//      3. check if anyone had won or tied


var currentPlayer = 'x';

function playXorO() {
  if (/* the current press has no plays*/true) {
    this.innerText = currentPlayer;
    // change the text of what is pressed
    // to be whatever is stored in current player
  }
}

function changePlayer() {
  if (currentPlayer === 'x') {
    currentPlayer = 'o';
  } else if (currentPlayer === 'o') {
    currentPlayer = 'x';
  }
}

var clickListener = document.getElementsByTagName('td');

document.addEventListener('click', playXorO)

