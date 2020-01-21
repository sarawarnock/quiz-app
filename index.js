'use strict'

//score and question number values values - currentScore/questionNumber
let currentScore = 0;
let questionNumber = 0;

function generateQuestion() {
    //renders each question as user moves through the quiz
    if (questionNumber < STORE.length) {
        return `<div class="question-${questionNumber}">
        <h2>${STORE[questionNumber].question}</h2>
        <form>
        <fieldset>
        <label class="answerOption">
        <input type="radio" value="${STORE[questionNumber].answers[0]}" name="answer" required>
        <span>${STORE[questionNumber].answers[0]}</span>
        </label>
        <label class="answerOption">
        <input type="radio" value="${STORE[questionNumber].answers[1]}" name="answer" required>
        <span>${STORE[questionNumber].answers[1]}</span>
        </label>
        <label class="answerOption">
        <input type="radio" value="${STORE[questionNumber].answers[2]}" name="answer" required>
        <span>${STORE[questionNumber].answers[2]}</span>
        </label>
        <label class="answerOption">
        <input type="radio" value="${STORE[questionNumber].answers[3]}" name="answer" required>
        <span>${STORE[questionNumber].answers[3]}</span>
        </label>
        <button type="submit" class="submitButton">Submit</button>
        </fieldset>
        </form>
        </div>`;
    } else {
        renderResults();
        restartQuiz();
      }
    console.log('`generateQuestion` ran');  
    }

function changeQuestionNumber() {
    questionNumber++;
    $('.question-num').text(questionNumber+1);

    console.log('`changeQuestionNumber` ran');
}    

function changeScore() {
    score++;

    console.log('`changeScore` ran');
}

function handleStartButton() {
    //when a user clicks the "start" button, the quiz begins
    $('.start').on('click', '.start-button', function(event) {
        event.preventDefault; 
        $('.start').remove();
        $('.questionAnswerForm').css('display', 'block');
        $('.question-num').text(1);
    });
    console.log('`handleStartButton` ran');
}

function renderQuestion() {
    $('.questionAnswerForm').html(generateQuestion());

    console.log('`renderQuestion` ran');
}

function handleSubmitButton() {
    //a user selects an answer and clicks "submit"
    //if a user does not select an answer, an alert pops up
    //if question is correct, "yay, correct" 
    //if question is incorrect, "incorrect, the correct answer is..."
    $('#submit-button').on('click', function(event) {
        event.preventDefault;
        let selected = $('.inout:checked');
        let answer = selected.val();
        let correct = `${STORE[questionNumber].correctAnswer}`;
        if (answer === correct) {
            selected.parent().addClass('correct');
        }
    });
    console.log('`handleSubmitButton` ran');
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
    renderQuestion();
    handleStartButton();
    changeQuestionNumber();
    changeScore();
    handleSubmitButton();
    handleNextQuestionButton();
    handleFinalQuestion();
    handleReplay();
}

$(handleQuiz);