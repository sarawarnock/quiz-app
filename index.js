'use strict'

let currentScore = 0;
let questionNumber = 0;

function generateQuestion() {
    if (questionNumber < STORE.length) {
        return `<div class="question-${questionNumber} showquestion">
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
        <button type="submit" class="submit-button">Submit</button>
        </fieldset>
        </form>
        </div>`;
    } else {
        renderResults();
        handleReplay();
        $('.question-num').text(10)
      }
    }

function changeQuestionNumber() {
    questionNumber++;
    $('.question-num').text(questionNumber+1);
}    

function changeScore() {
    currentScore++;
}

function handleStartButton() {
    $('.start').on('click', '.start-button', function(event) {
        $('.start').hide();
        $('.questionAnswerForm').css('display', 'block');
        $('.question-num').text(1);
        renderQuestion();
    });
}

function renderQuestion() {
    $('.questionAnswerForm').html(generateQuestion());
    handleSubmit();
}

function handleSubmit() {
    $('form').on('submit', function(event) {
        event.preventDefault();
        let selected = $('input:checked');
        let answer = selected.val();
        let correct = `${STORE[questionNumber].correctAnswer}`;
        if (answer === correct) {
            selected.parent().addClass('correct');
            ifAnswerIsCorrect();
        } else {
            selected.parent().addClass('wrong');
            ifAnswerIsIncorrect();
        }
    });
}

function updateScore() {
    changeScore();
    $('.score').text(currentScore);   
}

function ifAnswerIsCorrect() {
    correctFeedback();
    updateScore();   
}

function ifAnswerIsIncorrect() {
    incorrectFeedback();
}

function correctFeedback() {
    let correctAnswer = `${STORE[questionNumber].correctAnswer}`;
    $('.questionAnswerForm').html(`<div class="correctFeedback">
    <img src="${STORE[questionNumber].img}" alt= "${STORE[questionNumber].alt}"/>
    <p>Yes! You're right!</p>
    <button type=button class="next-button">Next Question</button></div>`);
}

function incorrectFeedback() {
    let correctAnswer = `${STORE[questionNumber].correctAnswer}`;
    $('.questionAnswerForm').html(`<div class="incorrectFeedback">
    <img src="${STORE[questionNumber].img}" alt= "${STORE[questionNumber].alt}"/>
    <p>Oops, that's not right!</p>
    <p>The correct answer is <span>"${correctAnswer}"</span>
    </p><button type=button class="next-button">Next Question</button></div>`);
}

function renderResults() {
    if (currentScore === 10) {
        $('.questionAnswerForm').html(`<div class="results correctFeedback">
        <h3>Perfect score! You're a green guru!</h3>
        <img src="images/greenguru (1).jpg" alt="smiling peacful earth icon"/><p>You got 10/10 correct!</p>
        <button class="replay-button">Replay</button></div>`);
    } else if (currentScore < 10 && currentScore >=7) {
        $('.questionAnswerForm').html(`<div class="results correctFeedback">
        <h3>Good work, you're on your way to becoming a recycling master!</h3>
        <img src="images/smiling earth.jpeg" alt="smiling earth icon "/><p>You got ${currentScore} /10 correct!</p>
        <button class="replay-button">Replay</button></div>`);
    } else if (currentScore < 7 && currentScore >= 3) {
        $('.questionAnswerForm').html(`<div class="results correctFeedback">
        <h3>You've got some studying to do, but you can certainly become a recycling expert!</h3>
        <img src="images/sad earth (1).jpg" alt="sad earth icon"/><p>You got ${currentScore} /10 correct!</p>
        <button class="replay-button">Replay</button></div>`);
    } else {
        $('.questionAnswerForm').html(`<div class="results correctFeedback">
        <h3>You need to work on your recycling knowledge, the Earth is counting on you!</h3>
        <img src="images/burningearth (1).jpg" alt="burning earth icon"/><p>You got ${currentScore} /10 correct!</p>
        <button class="replay-button">Replay</button></div>`);
    }
}

function renderNextQuestion() {
    $('main').on('click', '.next-button', function(event) {
        changeQuestionNumber();
        renderQuestion();
    });
}

function handleReplay() {
    $('main').on('click', '.replay-button', function(event) {
        location.reload();
    });
}

function handleQuiz() {
    handleStartButton();
    renderNextQuestion();
}

$(handleQuiz);