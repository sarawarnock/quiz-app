'use strict'

const STORE = [ 
    
    {
        question: 'How many common types of recycling are there?',
        answers: [5, 12, 8, 2],
        correctanswer: 8
    },

    {
        question: 'Which of these cannot be recycled in a regular curbside bin?',
        answers: ['Styrofoam and bubble wrap', 'Plasic grocery bags and paper towels','Batteries and electronics', 'All of the above'],
        correctanswer: 'All of the above'
    },

    {
        question: 'What are three things that are not considered traditional recycling, but can be recycled?',
        answers: ['Coffee cups and packing peanuts', 'Crayons, running shoes, and wine corks', 'Hardcover books, plastic shower curtains, and hangers', 'All of the above'],
        correctanswer: 'Crayons, running shoes, and wine corks'
    },

    {
        question: 'How much trash does the average American throw away PER DAY (in lbs)?',
        answers: [7.6,  1.5, 4.4, 10],
        correctanswer: 4.4
    },

    {
        question: 'What percentage of that trash could instead be recycled?',
        answers: [100, 25, 50, 60],
        correctanswer: 60
    },

    {
        question: 'What is one of the biggest problems caused by landfills?',
        answers: ['They take up too much space', 'They are ugly', 'They leak toxic substances into the soil and water', 'They start fires'],
        correctanswer: 'They leak toxic substances into the soil and water'
    },

    {
        question: 'Which recyclable items are commonly forgotton about?',
        answers: ['Beer bottles and cans', 'Plastic water bottles', 'Cereal boxex', 'Shampoo and conditioner bottles'],
        correctanswer: 'Shampoo and conditioner bottles'
    },

    {
        question: 'How many plastic bottles are thrown away EACH HOUR in the United States?',
        answers: ['2.5 million', '10 million', '100,000',  '50,000'],
        correctanswer: '2.5 million'
    },

    {
        question: 'How long does it take for an average size plastic bottle to decompose?',
        answers: ['100 years', '450 years', '10 years', '250 years'],
        correctanswer: '450 years'
    },

    {
        question: 'What is the biggest mistake people make when recycling?',
        answers: ['Recycling dirty food containers', 'Bagging up all recyclables like trash', 'Recycling materials with a plastic or wax coating', 'Not checking with their local recycing program'],
        correctanswer: 'Not checking with their local recycling program'
    }
];

//score and question values - currentScore/questionNumber
let currentScore = 0;
let questionNumber = 0;

function renderQuiz() {
    //start page appears 
    console.log('`renderQuiz` ran');
}

function handleStartButton() {
    //when a user clicks the "start" button, the quiz begins
    console.log('`handleStartButton` ran');
}

function handleSubmitButton() {
    //a user selects an answer and clicks "submit"
    //if a user does not select an answer, an alert pops up
    //if question is correct, "yay, correct" 
    //if question is incorrect, "incorrect, the correct answer is..."
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
    renderQuiz();
    handleStartButton();
    handleSubmitButton();
    handleNextQuestionButton();
    handleFinalQuestion();
    handleReplay();
}

$(handleQuiz);