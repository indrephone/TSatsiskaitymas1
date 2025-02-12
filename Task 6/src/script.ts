/* ------------------------------ TASK 6 ---------------------------------------------------------------
Sukurkite klasę "Potion", kuri sukuria objektus su 2 savybėm ir 1 metodu:

Savybės:
  color(masyvas tryjų spalvų 0-255), volume
Metodas: 
  mix(potion) - Pateikiamas kitas eliksyras ir jiedu sumaišomi į vieną naują eliksyrą, kuris yra grąžinamas kaip naujas Klasės objektas.

Pvz.: 
  felix_felicis     =  Potion([255, 255, 255],  7)
  polyjuice         =  Potion([ 51, 102,  51], 12)
  new_potion        =  felix_felicis.mix(polyjuice)

  new_potion.color  =  [127, 159, 127]
  new_potion.volume =  19
------------------------------------------------------------------------------------------------------ */

class Potion {
  color: number[];
  volume: number;

  constructor(color: number[], volume: number) {
    this.color = color;
    this.volume = volume;
  }

  mix(potion: Potion): Potion {
    const newColor = this.color.map((color, index) => Math.round((color + potion.color[index]) / 2));
    const newVolume = this.volume + potion.volume;
    return new Potion(newColor, newVolume);
  }
}

const felix_felicis = new Potion([0, 255, 255], 7);
const polyjuice = new Potion([0, 102, 51], 12);
const new_potion = felix_felicis.mix(polyjuice);


console.log(new_potion.color); 
console.log(new_potion.volume);
