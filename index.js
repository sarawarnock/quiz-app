//'use strict'

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
        <button type="submit" class="submit-button">Submit</button>
        </fieldset>
        </form>
        </div>`;
    } else {
        renderResults();
        handleReplay();
        $('.question-num').text(10)
      }
    console.log('`generateQuestion` ran');  
    }

function changeQuestionNumber() {
    questionNumber++;
    $('.question-num').text(questionNumber+1);

    console.log('`changeQuestionNumber` ran');
}    

function changeScore() {
    currentScore++;

    console.log('`changeScore` ran');
}

function handleStartButton() {
    //when a user clicks the "start" button, the quiz begins
    $('.start').on('click', '.start-button', function(event) {
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
            ifAnswerIsWrong();
        }
    });
    console.log('`handleSubmit` ran');
}

function updateScore() {
    changeScore();
    $('.score').text(currentScore);   
}

function ifAnswerIsCorrect() {
    correctFeedback();
    updateScore();   
}

function ifAnswerIsWrong() {
    incorrectFeedback();
}

function correctFeedback() {
    //let correctAnswer = `${STORE[questionNumber].correctAnswer}`;
    $('.questionAnswerForm').html(`<div class="correctFeedback"><div class="img"<img src="${STORE[questionNumber].img}"> 
    <alt= "${STORE[questionNumber].alt}"/></div><p>Yes! You're right!</p>
    <button type=button class="next-button">Next Question</button></div>`);
}

function incorrectFeedback() {
    let correctAnswer = `${STORE[questionNumber].correctAnswer}`;
    $('.questionAnswerForm').html(`<div class="correctFeedback"><div class="img"<img src="${STORE[questionNumber].img}"> 
    <alt= "${STORE[questionNumber].alt}"/></div><p>Oops, that's not right!</p><p>The correct answer is <span>"${correctAnswer}"</span>
    </p><button type=button class="next-button">Next Question</button></div>`);
}

function renderResults() {
    if (currentScore === 10) {
        $('.questionAnswerForm').html(`<div class="results correctFeedback"><h3>Perfect score! You're as green as grass!</h3>
        <img src=" " alt="green grass icon"/><p>You got 10/10 correct!</p><button class="replay-button">Replay</button></div>`);
    } else if (currentScore < 10 && currentScore >=7) {
        $('.questionAnswerForm').html(`<div class="results correctFeedback"><h3>Good work, you're on your way to becoming a green guru!</h3>
        <img src=" " alt="green grass icon"/><p>You got ${currentScore} /10 correct!</p><button class="replay-button">Replay</button></div>`);
    } else if (currentScore < 7 && currentScore >= 3) {
        $('.questionAnswerForm').html(`<div class="results correctFeedback"><h3>You've got some studying to do, but you can certainly become a recycling expert!</h3>
        <img src=" " alt="smiling recycling bin icon"/><p>You got ${currentScore} /10 correct!</p><button class="replay-button">Replay</button></div>`);
    } else {
        $('.questionAnswerForm').html(`<div class="results correctFeedback"><h3>You need to work on your recycling knowledge, the Earth is counting on you!</h3>
        <img src=" " alt="sad earth icon"/><p>You got ${currentScore} /10 correct!</p><button class="replay-button">Replay</button></div>`);
    }

    console.log('`renderResults` ran');
}

function renderNextQuestion() {
    //when a user clicks "next question", 
    //score changes, and the next question appears on the next screen
    $('main').on('click', '.next-button', function(event) {
        changeQuestionNumber();
        renderQuestion();
        handleSubmit();
    });
    console.log('`renderNextQuestion` ran');
}

function handleReplay() {
    //if the user decides to replay the quiz, they will click the replay button
    //this will take them to the start of the quiz 
    $('main').on('click', '.replay-button', function(event) {
        location.reload();
    });
    console.log('`handleReplay` ran');
}

function handleQuiz() {
    handleStartButton();
    renderQuestion();
    handleSubmit(); 
    renderNextQuestion();
}

$(handleQuiz);