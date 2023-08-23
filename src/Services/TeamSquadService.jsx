import api from '../APi/APIconfig'; // Importando sua configuração do axios.

// Em ../Services/TeamSquadService.js

export const getTeamSquad = (teamId) => {
  return new Promise((resolve) => {
      setTimeout(() => {
          resolve({
              data: [
                  { id: 1, name: "Jogador 1", photoUrl: "https://via.placeholder.com/50" },
                  { id: 2, name: "Jogador 2", photoUrl: "https://via.placeholder.com/50" },
                  // ... adicione mais jogadores mockados conforme necessário
              ]
          });
      }, 1000);  // Simulando um delay de 1 segundo
  });
}
