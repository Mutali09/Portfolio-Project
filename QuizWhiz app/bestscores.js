const bestScoresList = document.getElementById("bestScoresList");
const bestScores = JSON.parse(localStorage.getItem("bestScores")) || [];

bestScoresList.innerHTML = bestScores
  .map(score => {
    return `<li class="best-score">${score.name} - ${score.score}</li>`;
  })
  .join("");