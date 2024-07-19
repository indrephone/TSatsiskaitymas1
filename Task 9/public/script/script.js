"use strict";
const TEAMS_ENDPOINT = '../src/teams.json';
const PLAYERS_ENDPOINT = '../src/players.json';
document.addEventListener('DOMContentLoaded', () => {
    fetchTeams();
});
async function fetchTeams() {
    try {
        const response = await fetch(TEAMS_ENDPOINT);
        const data = await response.json();
        displayTeams(data.teams);
    }
    catch (error) {
        console.error('Error fetching teams:', error);
    }
}
function displayTeams(teams) {
    const outputDiv = document.querySelector('#output');
    if (outputDiv) {
        teams.forEach(team => {
            const teamCard = document.createElement('div');
            teamCard.className = 'team-card';
            const teamName = document.createElement('h2');
            teamName.textContent = team.teamName;
            teamCard.appendChild(teamName);
            const teamDetails = document.createElement('p');
            teamDetails.textContent = `${team.simpleName} (${team.abbreviation}) - ${team.location}`;
            teamCard.appendChild(teamDetails);
            const playersButton = document.createElement('button');
            playersButton.textContent = 'Players';
            playersButton.addEventListener('click', () => fetchPlayers(team.id));
            teamCard.appendChild(playersButton);
            outputDiv.appendChild(teamCard);
        });
    }
}
async function fetchPlayers(teamId) {
    try {
        const response = await fetch(PLAYERS_ENDPOINT);
        const data = await response.json();
        const teamPlayers = data.players.filter((player) => player.teamId === teamId);
        displayPlayers(teamPlayers);
    }
    catch (error) {
        console.error('Error fetching players:', error);
    }
}
function displayPlayers(players) {
    const modal = document.createElement('div');
    modal.className = 'modal';
    const modalContent = document.createElement('div');
    modalContent.className = 'modal-content';
    const closeButton = document.createElement('span');
    closeButton.className = 'close-button';
    closeButton.textContent = '×';
    closeButton.addEventListener('click', () => modal.remove());
    modalContent.appendChild(closeButton);
    const playerList = document.createElement('ul');
    players.forEach(player => {
        const playerItem = document.createElement('li');
        playerItem.textContent = `${player.firstName} ${player.lastName}`;
        playerList.appendChild(playerItem);
    });
    modalContent.appendChild(playerList);
    modal.appendChild(modalContent);
    document.body.appendChild(modal);
}
