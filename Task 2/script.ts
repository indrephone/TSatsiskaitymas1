/* ------------------------------ TASK 2 -----------------------------------
Aprašykite type'us, kad kintamieji, kuriems jie priskirti būtų teisingai aprašyti ir visas kodas veiktų teisingai.
Kur komentare parašyta "error", ta eilutė po tipo priskyrimo kintamąjam turėtų mesti klaidą. Pasitikrinus užkomentuoti visą eilutę, kad leistų sukompiliuoti.-------------------------------------------------------------------------- */

// sukuriam tipa
type One = {
  vardas: string,
  pavarde: string,
  amzius: number
}
// panaudojam
let one2: One = {
  vardas: '',
  pavarde: '',
  amzius: 0
};

// sukuriam tipa
type Two = {
   vardas: string,
   pavarde: string,
   amzius: number,
   ugis?: number,
   svoris?:number
}

// panaudojam
let two2: Two = {
  vardas: '',
  pavarde: '',
  amzius: 0
};
two2 = {
  vardas: '',
  pavarde: '',
  amzius: 0,
  ugis: 0,
  svoris: 0
};



// sukuriam tipa
type Three = {
  vardas: string,
  pavarde: string,
  lytis?: 'vyras' | 'moteris'
}

// panaudojam
let three: Three = {
  vardas: '',
  pavarde: '',
  lytis: 'vyras'
};
three = {
  vardas: '',
  pavarde: '',
  lytis: 'moteris'
};
three = {
  vardas: '',
  pavarde: '',
  // lytis: 'sraigtasparnis' // error
};