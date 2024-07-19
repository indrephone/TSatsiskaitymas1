/* ------------------------------ TASK 3 -----------------------------------
Perpanaudokite aprašytą type'ą, kad sukurti naujus tipus, kuriuos priskyrus kintamiesiems, visas kodas veiktų teisingai.
Kur komentare parašyta "error", ta eilutė po tipo priskyrimo kintamąjam turėtų mesti klaidą. Pasitikrinus užkomentuoti visą eilutę, kad leistų sukompiliuoti.

Pastaba: Aprašyto tipo NEKEISTI
-------------------------------------------------------------------------- */

type TipasNaudoti = {
  marke: string,
  modelis: string,
  metai: number,
  spalva: string,
  kilometrazas: number
};
// sukuriam dviracio tipa
type Dviraciai ={
  metai: number,
  spalva: string
}

// remove the existing declaration of 'dviratis3'
// const dviratis3: Dviraciai = {

// assign a new value to 'dviratis3'
const dviratis: Dviraciai = {
  metai: 1999,
  spalva: 'juoda'
};

// sukuriam NaujaMasina tipa

type NaujaMasina = {
  marke: string,
  modelis: string,
  metai: number,
  spalva: string
}

const naujaMasina : NaujaMasina= {
  marke: 'Volvo',
  modelis: '234',
  metai: 2025,
  spalva: 'melyna'
};

// sukuriam SenaMasina tipa sujungiam su TipasNaudoti

type SenaMasina = TipasNaudoti & {
  kilometrazas: number
  surudyjesDugnas: boolean
};


const senaMasina : SenaMasina= {
  marke: '',
  modelis: '',
  metai: 2025,
  spalva: '',
  kilometrazas: 999999,
  surudyjesDugnas: true  
};