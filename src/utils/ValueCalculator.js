export const calculateFinalScore = (surveyScores) => {
    let totalPoints = 0;
    for (let [key, question] of Object.entries(surveyScores)) {
        totalPoints += question.score;
    }
    return totalPoints;
}