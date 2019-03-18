// what do i need to do
/* 
1. instantiate what the board should first look like when loaded
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
var currentPlayer = 'x';

function playXorO() {
  if (/* the current press has no plays*/true) {
    // change the text of what is pressed 
    // to be whatever is stored in current player
    this.innerHTML=currentPlayer;
  } 
  
  // the below is so the next play is the correct player
  if (currentPlayer === 'x') {
    currentPlayer = 'o';
  } else if (currentPlayer === 'o') {
    currentPlayer ='x';
  }
}

var clickListener = document.getElementsByTagName('td');

document.addEventListener('click', playXorO)
