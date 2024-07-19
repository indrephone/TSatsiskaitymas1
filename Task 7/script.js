"use strict";
/* ------------------------------ TASK 7 -----------------------------------
Parašykite TS kodą, vartotojui atėjus į tinklapį kreipsis į NBA.json failą ir iš jo atvaizduos visas NBA komandas ir jų žaidėjus.
Kiekviena komanda turės savo atvaizdavimo "kortelę", kurioje bus
nurodomas komandos pavadinimas ir papildomose "mini kortelėse" išvardinti žaidėjai su vardais, pavardėmis ir nuoroda į daugiau informacijos apie juos.

Pastaba: Informacija apie komandas bei žaidėjus turi turėti bent minimalų stilių;
-------------------------------------------------------------------------- */
const ENDPOINT = 'NBA.json';
fetch(ENDPOINT)
    .then(response => response.json())
    .then(data => {
    const outputContainer = document.querySelector('#output');
    data.teams.forEach((team) => {
        const teamCard = document.createElement('div');
        teamCard.className = 'team-card';
        const teamTitle = document.createElement('h2');
        teamTitle.textContent = `${team.name} (ID: ${team.id})`;
        teamCard.appendChild(teamTitle);
        const playerList = document.createElement('div');
        playerList.className = 'player-list';
        team.players.forEach((player) => {
            const playerCard = document.createElement('div');
            playerCard.className = 'player-mini-card';
            const playerName = document.createElement('p');
            playerName.textContent = `${player.firstName} ${player.lastName}`;
            playerCard.appendChild(playerName);
            const playerLink = document.createElement('a');
            playerLink.href = player.googleSearch;
            playerLink.textContent = 'More info';
            playerCard.appendChild(playerLink);
            playerList.appendChild(playerCard);
        });
        teamCard.appendChild(playerList);
        outputContainer.appendChild(teamCard);
    });
});
