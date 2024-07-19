/* ------------------------------ TASK 8 ----------------------------
Parašykite TS kodą, kuris leis vartotojui įvesti ilgį metrais ir pamatyti jo pateikto ilgio konvertavimą į:
1. Centimetrus (cm) | Formulė: cm = m * 100
2. Colius (in) | Formulė: in = m * 39.37
3. Pėdas (ft) | Formulė: ft = m * 3.281
4. Mylias (mi) | Formulė: mi = m / 1609
5. Jardus (yd) | Formulė: yd = m * 1.094

Pastaba: Atvaizdavimas turi būti matomas su kiekviena įvestimi ir pateikiamas <div id="output"></div> viduje, bei turi turėti bent minimalų stilių;
------------------------------------------------------------------- */

const form = document.querySelector('#converter-form') as HTMLFormElement;
  const outputDiv = document.querySelector('#output') as HTMLDivElement;

  form.addEventListener('submit', (event) => {
    event.preventDefault();

    const meterInput = document.querySelector('#meter') as HTMLInputElement;
    const meters = parseFloat(meterInput.value);


    while (outputDiv.firstChild) {
      outputDiv.removeChild(outputDiv.firstChild);
    }

    if (!isNaN(meters)) {
      const centimeters = meters * 100;
      const inches = meters * 39.37;
      const feet = meters * 3.281;
      const miles = meters / 1609;
      const yards = meters * 1.094;

      const p = document.createElement('p');
      p.textContent = `${meters} meters is equal to:`;

      const ul = document.createElement('ul');

      const conversions = [
        { unit: 'centimeters (cm)', value: centimeters.toFixed(2) },
        { unit: 'inches (in)', value: inches.toFixed(2) },
        { unit: 'feet (ft)', value: feet.toFixed(2) },
        { unit: 'miles (mi)', value: miles.toFixed(4) },
        { unit: 'yards (yd)', value: yards.toFixed(2) },
      ];

      conversions.forEach(conversion => {
        const li = document.createElement('li');
        li.textContent = `${conversion.value} ${conversion.unit}`;
        ul.appendChild(li);
      });

      outputDiv.appendChild(p);
      outputDiv.appendChild(ul);
    } else {
      const p = document.createElement('p');
      p.textContent = 'Please enter a valid number of meters.';
      outputDiv.appendChild(p);
    }
  });

