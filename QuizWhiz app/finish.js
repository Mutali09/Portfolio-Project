const username = document.getElementById('username');
const saveScoreBtn = document.getElementById('saveScoreBtn');
const finalScore = document.getElementById('finalScore');
const mostRecentScore = localStorage.getItem('mostRecentScore');

const bestScores = JSON.parse(localStorage.getItem('bestScores')) || [];

const MAX_BEST_SCORES = 5;

finalScore.innerText = mostRecentScore;

username.addEventListener('keyup', () => {
    saveScoreBtn.disabled = !username.value;
});

saveBestScore = (e) => {
    e.preventDefault();

    const score = {
        score: mostRecentScore,
        name: username.value,
    };
    bestScores.push(score);
    bestScores.sort((a, b) => b.score - a.score);
    bestScores.splice(5);

    localStorage.setItem('bestScores', JSON.stringify(bestScores));
    window.location.assign('/');
};