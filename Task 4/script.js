/* ------------------------------ TASK 4 -----------------------------------
Parašykite TS funkciją, kuri priima tekstą ir grąžina skaičių susidedantį iš vienetų ir nulių tokio ilgio, kokio yra pats žodis. Skaičius visada prasideda vienetu.

Pvz.:
  "labas"   --> 10101
  "kebabas" --> 1010101
  "a"       --> 1
-------------------------------------------------------------------------- */
function binaryTekstas(text) {
    if (text.length === 0)
        return 0;
    var binary = '1';
    for (var i = 0; i < text.length; i++) {
        binary += i % 2 === 0 ? '0' : '1';
    }
    return parseInt(binary, 10);
}
var result = binaryTekstas("eris");
console.log(result);
