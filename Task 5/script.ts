/* ------------------------------ TASK 5 -----------------------------------
Parašykite TS funkciją, kuri atlieka žirklės/popierius/akmuo žaidimo patikrinimą ir grąžina atsakymą.
Funkcija priima du tekstus ir grąžina tekstą.

Pvz.:
  "scissors", "paper" --> "Player 1 won!"
  "scissors", "rock" --> "Player 2 won!"
  "paper", "paper" --> "Draw!"
-------------------------------------------------------------------------- */

const rockPaperScissors = (player1: string, player2: string): string => {

  const taisykles: {
    [key: string]: string} = {
      'akmuo': 'zirkles',
      'zirkles': 'popierius',
      'popierius': 'akmuo'
  };


  if (player1 === player2) {
    return 'Draw!';
  }

  if (taisykles[player1] === player2) {
    return 'Player 1 won!';
  }else{
    return 'Player 2 won!';
  }
}

console.log(rockPaperScissors("popierius", 'popierius'));