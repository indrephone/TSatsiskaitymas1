/* ------------------------------ TASK 4 -----------------------------------
Parašykite TS funkciją, kuri priima tekstą ir grąžina skaičių susidedantį iš vienetų ir nulių tokio ilgio, kokio yra pats žodis. Skaičius visada prasideda vienetu.

Pvz.:
  "labas"   --> 10101
  "kebabas" --> 1010101
  "a"       --> 1
-------------------------------------------------------------------------- */

function binaryTekstas(text: string): number {

  if (text.length === 0) return 0;

  let binary = '1';
  for (let i = 0; i < text.length; i++) {
    binary += i % 2 === 0 ? '0' : '1';
  }
  return parseInt(binary, 10);
}

const result = binaryTekstas("eris");
console.log(result);