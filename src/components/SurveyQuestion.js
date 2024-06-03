export default class SurveyQuestion {
    constructor(title, maxScore, score) {
        this.title = title;
        this.maxScore = maxScore;
        this.score = score;
    }

    setScore(score) {
        this.score = score;
    }
}