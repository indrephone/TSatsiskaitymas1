/* ------------------------------ TASK 9 -----------------------------------
Parašykite TS kodą, vartotojui atėjus į tinklapį kreipsis į NBA.json failą ir iš jo atvaizduos visas NBA komandas. 
Kiekviena komanda turės savo atvaizdavimo "kortelę", kurioje bus 
nurodomas komandos: pilnas pavadinimas, paprastas pavadinimas, trumpinys, lokacija ir mygtukas "Players", kurį paspaudus bus kreipiamasi į players.json ir atidaromas modalas su visais TOS komandos žaidėjais.

Pastaba: Informacija apie komandas bei žaidėjus turi turėti bent minimalų stilių;
-------------------------------------------------------------------------- */

const TEAMS_ENDPOINT = '../src/teams.json';
const PLAYERS_ENDPOINT = '../src/players.json';

interface Team {
    id: number;
    abbreviation: string;
    teamName: string;
    simpleName: string;
    location: string;
  }
  
  interface Player {
    firstName: string;
    lastName: string;
    id: number;
    teamId: number;
  }
  
  document.addEventListener('DOMContentLoaded', () => {
    fetchTeams();
  });
  
  async function fetchTeams() {
    try {
      const response = await fetch(TEAMS_ENDPOINT);
      const data = await response.json();
      displayTeams(data.teams);
    } catch (error) {
      console.error('Error fetching teams:', error);
    }
  }
  
  function displayTeams(teams: Team[]) {
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
  
  async function fetchPlayers(teamId: number) {
    try {
      const response = await fetch(PLAYERS_ENDPOINT);
      const data = await response.json();
      const teamPlayers = data.players.filter((player: Player) => player.teamId === teamId);
      displayPlayers(teamPlayers);
    } catch (error) {
      console.error('Error fetching players:', error);
    }
  }
  
  function displayPlayers(players: Player[]) {
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
