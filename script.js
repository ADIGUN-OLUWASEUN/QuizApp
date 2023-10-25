const quizData = [
    {
        question: 'How old is folurin?' ,
        a: '10',
        b: '17',
        c: '26',
        d: '110',
        correct: 'c'
    }, {
        question: 'What is the most used programming language in 2023?',
        a: 'Java',
        b: 'C',
        c: 'Python',
        d: 'Javascript',
        correct: 'd'
    },{
        question: 'Who is the genius among you?',
        a:'Kenny',
        b:'Adigun',
        c:'Chloe',
        d:'Abiola',
        correct:'b'
    },{
        question:'What does HTML stands for?',
        a:'Hypertext Markup Language',
        b:'Cascading style sheet',
        c:'Document Oriented Manipulation',
        d:'Helicopters Terminals Motorboat Lambo',
        correct:'a'
    },{
        question:'What year was Javascript launcged?',
        a:'2020',
        b:'1995',
        c:'2018',
        d:'none of the above',
        correct:'b'
    }
];

const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text"); 
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");

let currentQuiz = 0;

loadQuiz();

function loadQuiz() {
    const currentQuizData = quizData[currentQuiz];

    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;

    currentQuestion++;
}