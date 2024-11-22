const question = document.getElementById("question");
const choices = Array.from(document.getElementsByClassName('choice-text'));
const progresstext = document.getElementById('progresstext');
const scoretext = document.getElementById('score');
const progressbarfull= document.getElementById("progressbarfull");

let currentquestion = {};
let acceptingAnswers = false;
let score = 0;
let counter = 0;
let availablequestions =[];


let questions = [
    {
        question: "Which gate gives an output of 1 only when both inputs are 1?",
        choice1: "AND Gate",
        choice2: "OR Gate",
        choice3: "XOR Gate",
        choice4: "NOT Gate",
        answer: 1
    },
    
    {
        question: "Which gate produces an output that is the inverse of the input?",
        choice1: "AND Gate",
        choice2: "OR Gate",
        choice3: "NAND Gate",
        choice4: "NOT Gate",
        answer: 4
    },

    {
        question: "Which gate outputs 1 when the inputs are different?",
        choice1: "AND Gate",
        choice2: "OR Gate",
        choice3: "XOR Gate",
        choice4: "NAND Gate",
        answer: 3
    },

    {
        question: "Which gate outputs 0 only when both inputs are 0?",
        choice1: "AND Gate",
        choice2: "NOR Gate",
        choice3: "XOR Gate",
        choice4: "NAND Gate",
        answer: 4
    },

    {
        question: "Which gate gives an output of 1 only when both inputs are 0?",
        choice1: "AND Gate",
        choice2: "NOR Gate",
        choice3: "NAND Gate",
        choice4: "OR Gate",
        answer: 2
    },

    {
        question: "Which gate gives an output of 1 when one of the inputs is 1?",
        choice1: "NAND Gate",
        choice2: "OR Gate",
        choice3: "AND Gate",
        choice4: "NOT Gate",
        answer: 2
    },

    {
        question: "Which gate produces an output of 1 when both inputs are 1?",
        choice1: "XOR Gate",
        choice2: "OR Gate",
        choice3: "AND Gate",
        choice4: "NAND Gate",
        answer: 3
    },

    {
        question: "Which of the following gates is used to perform binary negation?",
        choice1: "NAND Gate",
        choice2: "OR Gate",
        choice3: "NOT Gate",
        choice4: "XOR Gate",
        answer: 3
    },

    {
        question: "Which gate gives an output of 1 when both inputs are the same?",
        choice1: "XOR Gate",
        choice2: "NAND Gate",
        choice3: "NOR Gate",
        choice4: "XNOR Gate",
        answer: 4
    },

    {
        question: "Which gate produces the opposite of the AND Gate output?",
        choice1: "OR Gate",
        choice2: "NAND Gate",
        choice3: "NOR Gate",
        choice4: "XOR Gate",
        answer: 2
    }
];


const correct_bonus = 10;
const max_questions = 5
 
startgame = () => {

    counter = 0;
    score = 0;
    availablequestions = [...questions];
    getnew();
};

getnew = () => {
    if (availablequestions.length === 0 || counter >= max_questions) {
        localStorage.setItem('mostrecentscore', score);
        return window.location.assign("end.html");
      }

    counter++;
    
    progresstext.innerText = 'Question ' + counter + '/' + max_questions;
    const x = (counter/max_questions)*100;
    progressbarfull.style.width = x + "%";

    const questionindex = Math.floor(Math.random() * availablequestions.length);
    currentquestion = availablequestions[questionindex];
    question.innerText = currentquestion.question;
    

    choices.forEach( choice => {
        const number = choice.dataset["number"];
        choice.innerText = currentquestion["choice" + number];
    });

    availablequestions.splice(questionindex,1);
    acceptingAnswers = true;
};

choices.forEach(choice => {
    choice.addEventListener("click", e=> {
        if(!acceptingAnswers) return;

        acceptingAnswers = false;
        const selectedchoice = e.target;
        const selectedanswer = selectedchoice.dataset['number'];
        
        const classtoapply  = selectedanswer == currentquestion.answer ? 'correct' : 'incorrect' ;

        if(classtoapply === 'correct')
        {
            incrementscore(correct_bonus);
        }

        selectedchoice.parentElement.classList.add(classtoapply);

        setTimeout(() => {
            selectedchoice.parentElement.classList.remove(classtoapply);
            getnew();
        }, 1000);
    });
});

incrementscore = num => {
    score += num;
    scoretext.innerText = score;
};

startgame();
