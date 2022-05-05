const username = document.getElementById('username');
const saveScoreBtn = document.getElementById('saveScoreBtn');
const finalScore = document.getElementById('finalScore');
const rating = document.getElementById('Rating');
const mostRecentScore = localStorage.getItem('mostRecentScore');

const highScores = JSON.parse(localStorage.getItem('highScores')) || [];

const MAX_HIGH_SCORES = 5;

finalScore.innerText = mostRecentScore;
rating.innerText=Rating();
username.addEventListener('keyup', () => {
    saveScoreBtn.disabled = !username.value;
});

saveHighScore = (e) => {
    e.preventDefault();

    const score = {
        score: mostRecentScore,
        name: username.value,
    };
    highScores.push(score);
    highScores.sort((a, b) => b.score - a.score);
    highScores.splice(5);

    localStorage.setItem('highScores', JSON.stringify(highScores));
    window.location.assign('/');
};

function Rating()
{
    if(mostRecentScore >=40)
    {
    return ("very strong");
    }
    else if(mostRecentScore >=30)
    {
    return ("strong");
    }
    else if(mostRecentScore >=20)
    {
    return ("good");
    }
    else if(mostRecentScore >=10)
    {
    return ("bad");
    }
    else 
    {
    return ("poor");
    }
}