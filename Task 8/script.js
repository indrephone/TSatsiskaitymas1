"use strict";
/* ------------------------------ TASK 8 ----------------------------
Parašykite TS kodą, kuris leis vartotojui įvesti ilgį metrais ir pamatyti jo pateikto ilgio konvertavimą į:
1. Centimetrus (cm) | Formulė: cm = m * 100
2. Colius (in) | Formulė: in = m * 39.37
3. Pėdas (ft) | Formulė: ft = m * 3.281
4. Mylias (mi) | Formulė: mi = m / 1609
5. Jardus (yd) | Formulė: yd = m * 1.094

Pastaba: Atvaizdavimas turi būti matomas su kiekviena įvestimi ir pateikiamas <div id="output"></div> viduje, bei turi turėti bent minimalų stilių;
------------------------------------------------------------------- */
var form = document.querySelector('#converter-form');
var outputDiv = document.querySelector('#output');
form.addEventListener('submit', function (event) {
    event.preventDefault();
    var meterInput = document.querySelector('#meter');
    var meters = parseFloat(meterInput.value);
    while (outputDiv.firstChild) {
        outputDiv.removeChild(outputDiv.firstChild);
    }
    if (!isNaN(meters)) {
        var centimeters = meters * 100;
        var inches = meters * 39.37;
        var feet = meters * 3.281;
        var miles = meters / 1609;
        var yards = meters * 1.094;
        var p = document.createElement('p');
        p.textContent = "".concat(meters, " meters is equal to:");
        var ul_1 = document.createElement('ul');
        var conversions = [
            { unit: 'centimeters (cm)', value: centimeters.toFixed(2) },
            { unit: 'inches (in)', value: inches.toFixed(2) },
            { unit: 'feet (ft)', value: feet.toFixed(2) },
            { unit: 'miles (mi)', value: miles.toFixed(4) },
            { unit: 'yards (yd)', value: yards.toFixed(2) },
        ];
        conversions.forEach(function (conversion) {
            var li = document.createElement('li');
            li.textContent = "".concat(conversion.value, " ").concat(conversion.unit);
            ul_1.appendChild(li);
        });
        outputDiv.appendChild(p);
        outputDiv.appendChild(ul_1);
    }
    else {
        var p = document.createElement('p');
        p.textContent = 'Please enter a valid number of meters.';
        outputDiv.appendChild(p);
    }
});
