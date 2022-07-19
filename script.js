const startButton = document.getElementById("start-btn");
const nextButton = document.getElementById("next-btn");
const questionContainerElement = document.getElementById("question-container");
const questionElement = document.getElementById("question")
const answerButtonsElement = document.getElementById("answer-buttons");
const totalScore = document.getElementById("total-score");

startButton.addEventListener("click" ,startGame);
nextButton.addEventListener("click", () => {
    currentQuestionIndex++;
    setNextQuestion();
});

let shuffledQuestions, currentQuestionIndex;


function startGame() {
  startButton.classList.add("hide");
  shuffledQuestions = questions.sort(() => Math.random() - 0.5);
  currentQuestionIndex = 0;
  questionContainerElement.classList.remove("hide");
  setNextQuestion();
}

function setNextQuestion() {
  resetState();
  showQuestion(shuffledQuestions[currentQuestionIndex]);    
}


function showQuestion(question) {
    questionElement.innerText = question.question;
    question.answers.forEach((answer)=> {
        const button = document.createElement("button");
        button.innerText = answer.text;
        button.classList.add("btn");
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click",selectAnswer);
        answerButtonsElement.appendChild(button);
    });
}
function resetState() {
    clearStatusClass(document.body);
    nextButton.classList.add("hide");
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild);
    }
}

function selectAnswer(e) {
    const selectedButton = e.target;
    const correct = selectedButton.dataset.correct;
    setStatusClass(document.body,correct);
    Array.from(answerButtonsElement.children).forEach((button)=>{
      setStatusClass(button,button.dataset.correct);
    });
    if(shuffledQuestions.length > currentQuestionIndex +1){
    nextButton.classList.remove("hide");
    }
    else{
        startButton.innerText = "Restart Game"; 
        startButton.classList.remove("hide");
    }    
}

function setStatusClass(element, correct) {
    clearStatusClass(element);
    if (correct) {
        element.classList.add("correct");
    } else {
      element.classList.add("wrong");
    }
}


function clearStatusClass(element)
{
  element.classList.remove("wrong");
  element.classList.remove("correct");
}
const questions = [
    {
        question: "What is Frontend",
        answers:[
            { text: "Web", correct: false },
            { text: "Web Interface", correct: true },
            { text: "Web Technology", correct: false },
            { text: "Web Server", correct: false },

        ],
    },
    {
        question: "Js stands for?",
        answers:[
            {text: "Javascript" , correct: true},
            {text: "Java selinium" ,correct: false},
            {text: "J Server" , correct: false},
            {text: "None of the above" ,correct: false},
        ],
    },
    {
        question: "What does HTML stand for?",
        answers:[
            {text: "Hyperlinks and Text Markup Language" , correct: false},
            {text: "Home Tool Markup Language" ,correct: false},
            {text: "Hyper Text Markup Language" , correct: true},
            {text: "Hyper Tool Markup Language" ,correct: false},
        ],
    },
    {
        question: "Which of the following keywords is used to define a variable in Javascript?",
        answers:[
            {text: "let" , correct: false},
            {text: "Var" ,correct: false},
            {text: "Both A and B" , correct: true},
            {text: "None of the above" ,correct: false},
        ],
    },
    {
        question: " How can a datatype be declared to be a constant type?",
        answers:[
            {text: "Var" , correct: false},
            {text: "Const" ,correct: true},
            {text: "let" , correct: false},
            {text: "Constant" ,correct: false},
        ],
    },

]
