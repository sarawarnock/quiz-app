'use strict'

//score and question number values values - currentScore/questionNumber
let currentScore = 0;
let questionNumber = 0;

function renderQuestion() {
    //renders each question as user moves through the quiz
    
    console.log('`renderQuestion` ran');
}

function handleStartButton() {
    //when a user clicks the "start" button, the quiz begins
    $('#start-button').on('click', function(event) {
        event.preventDefault; 
        renderQuestion();
    });
    console.log('`handleStartButton` ran');
}

function handleSubmitButton() {
    //a user selects an answer and clicks "submit"
    //if a user does not select an answer, an alert pops up
    //if question is correct, "yay, correct" 
    //if question is incorrect, "incorrect, the correct answer is..."
    $('#submit-button').on('click', function(event) {
        event.preventDefault;
    });
    console.log('`handleSubmitButton` ran');
}

function incrementScore() {
    //add +1 to score if question is correct
    (if /*answer*/ === SCORE.correctAnswer (
        currentScore ++ 
        questionNumber ++
    )
    else if /*answer*/ !== SCORE.correctAnswer (
    questionNumber ++))
}

function handleNextQuestionButton() {
    //when a user clicks "next question", 
    //score changes, and the next question appears on the next screen
    console.log('`handleNextQuestionButton` ran');
}

function handleFinalQuestion() {
    //when the final question gets submitted, the screen will display the final score
    //along with a message about how the user did (depending on how many they got correct)
    //turn score into percentage? currentScore/questionNumber
    //there will be a "Replay" button
    console.log('`handleFinalQuestion` ran');
}

function handleReplay() {
    //if the user decides to replay the quiz, they will click the replay button
    //this will take them to the start of the quiz 
    console.log('`handleReplay` ran');
}

function handleQuiz() {
    //responsible for running all of our other functions upon page load
    renderRecyclingQuiz();
    renderQuestion();
    handleStartButton();
    handleSubmitButton();
    handleNextQuestionButton();
    handleFinalQuestion();
    handleReplay();
}

$(handleQuiz);