"use strict";
class Potion {
    constructor(color, volume) {
        this.color = color;
        this.volume = volume;
    }
    mix(potion) {
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
