const questions = [
    {
        question: "Which language is used to structure a web page?",
        options: ["CSS", "HTML", "JavaScript", "Python"],
        answer: "HTML"
    },

    {
        question: "Which language is used to style a web page?",
        options: ["HTML", "CSS", "Java", "Python"],
        answer: "CSS"
    },

    {
        question: "Which language is used to make web pages interactive?",
        options: ["HTML", "CSS", "JavaScript", "SQL"],
        answer: "JavaScript"
    },

    {
        question: "Which keyword is used to declare a variable in JavaScript?",
        options: ["var", "int", "string", "define"],
        answer: "var"
    },

    {
        question: "Which company developed JavaScript?",
        options: ["Microsoft", "Netscape", "Google", "Apple"],
        answer: "Netscape"
    }
];


let currentQuestion = 0;
let score = 0;
let selectedAnswer = "";

const questionElement = document.getElementById("question");
const questionNumber = document.getElementById("question-number");
const optionsElement = document.getElementById("options");

const nextButton = document.getElementById("nextBtn");

const quizBox = document.getElementById("quiz-box");
const resultBox = document.getElementById("result-box");

const scoreElement = document.getElementById("score");
const restartButton = document.getElementById("restartBtn");


function showQuestion() {

    selectedAnswer = "";

    let current = questions[currentQuestion];

    questionNumber.innerText =
        "Question " + (currentQuestion + 1) + " of " + questions.length;

    questionElement.innerText = current.question;

    optionsElement.innerHTML = "";

    current.options.forEach(function(option) {

        const button = document.createElement("button");

        button.innerText = option;

        button.classList.add("option");

        button.onclick = function() {

            selectedAnswer = option;

            const allOptions =
                document.querySelectorAll(".option");

            allOptions.forEach(function(item) {
                item.classList.remove("selected");
            });

            button.classList.add("selected");
        };

        optionsElement.appendChild(button);
    });
}


nextButton.onclick = function() {

    if (selectedAnswer === "") {
        alert("Please select an answer!");
        return;
    }

    if (selectedAnswer === questions[currentQuestion].answer) {
        score++;
    }

    currentQuestion++;

    if (currentQuestion < questions.length) {

        showQuestion();

    } else {

        showResult();
    }
};


function showResult() {

    quizBox.style.display = "none";

    resultBox.style.display = "block";

    scoreElement.innerText =
        "Your Score: " + score + " / " + questions.length;
}


restartButton.onclick = function() {

    currentQuestion = 0;

    score = 0;

    quizBox.style.display = "block";

    resultBox.style.display = "none";

    showQuestion();
};


showQuestion();
