const startButton = document.getElementById('start-btn');
const nextButton = document.getElementById('next-btn');
const restartButton = document.getElementById('restart-btn');
const questionContainerElement = document.getElementById('question-container');
const resultContainerElement = document.getElementById('result-container');
const questionElement = document.getElementById('question');
const answerButtonsElement = document.getElementById('answer-buttons');
const resultElement = document.getElementById('result');
const scoreElement = document.getElementById('score');
const footerElement = document.getElementById('footer');

let shuffledQuestions, currentQuestionIndex, score;

const questions = [
    {
        question: 'What does FIFO stand for in inventory management?',
        answers: [
            { text: 'First In, First Out', correct: true },
            { text: 'Frequency in inventory ordering', correct: false },
            { text: 'Flow of products in inventory', correct: false },
            { text: 'First to deliver, First to deliver', correct: false }
        ]
    },
    {
        question: 'What is the pricing strategy that involves setting low prices to capture a large market share?',
        answers: [
            { text: 'Psychological pricing', correct: false },
            { text: 'Market penetration', correct: true },
            { text: 'Price skimming', correct: false },
            { text: 'Prestige pricing strategy', correct: false }
        ]
    },
    {
        question: 'What does KPI mean in retail?',
        answers: [
            { text: 'Key Performance Indicator', correct: true },
            { text: 'Key product index', correct: false },
            { text: 'Inventory control point', correct: false },
            { text: 'Sales production index', correct: false }
        ]
    },
    {
        question: 'What is cross-selling in retail?',
        answers: [
            { text: 'Selling products at a cross price', correct: false },
            { text: 'Selling related products together', correct: true },
            { text: 'Selling unrelated products', correct: false },
            { text: 'Selling customized products', correct: false }
        ]
    },
    {
        question: 'What is the primary goal of visual merchandising in a store?',
        answers: [
            { text: 'Reduce waiting time in the store', correct: false },
            { text: 'Enhance customer experience', correct: false },
            { text: 'Increase sales through visual presentation', correct: true },
            { text: 'Optimize inventory processes', correct: false }
        ]
    },
    {
        question: 'What does ROI mean in retail?',
        answers: [
            { text: 'Operating return index', correct: false },
            { text: 'Operating profitability index', correct: false },
            { text: 'Return on investment', correct: true },
            { text: 'Comprehensive operational performance', correct: false }
        ]
    },
    {
        question: 'What is seasonal merchandising in retail?',
        answers: [
            { text: 'Promotion of seasonal products', correct: true },
            { text: 'Sale of past season products', correct: false },
            { text: 'Sale of customized products', correct: false },
            { text: 'Seasonal inventory review', correct: false }
        ]
    },
    {
        question: 'What is a planogram in retail?',
        answers: [
            { text: 'A plan to optimize inventory', correct: false },
            { text: 'A diagram of sales processes', correct: false },
            { text: 'A visual store design', correct: false },
            { text: 'A scheme of product placement in store', correct: true }
        ]
    },
    {
        question: 'What does CRM mean in retail?',
        answers: [
            { text: 'Customer Relationship Management', correct: true },
            { text: 'Marketing control record', correct: false },
            { text: 'Market risk control', correct: false },
            { text: 'Movement control record', correct: false }
        ]
    },
    {
        question: 'What is an SKU in retail?',
        answers: [
            { text: 'A barcode system', correct: false },
            { text: 'An inventory measurement unit', correct: false },
            { text: 'A unique reference number for each product', correct: true },
            { text: 'A category of products in store', correct: false }
        ]
    },
    {
        question: 'What is shrinkage in retail?',
        answers: [
            { text: 'Product return rate', correct: false },
            { text: 'Product damage rate', correct: false },
            { text: 'Inventory loss rate', correct: true },
            { text: 'Product theft rate', correct: false }
        ]
    },
    {
        question: 'What is a loyalty program in retail?',
        answers: [
            { text: 'Program to manage employee loyalty', correct: false },
            { text: 'Program to attract new customers', correct: false },
            { text: 'Program to retain customers through rewards', correct: true },
            { text: 'Program to manage store loyalty', correct: false }
        ]
    },
    {
        question: 'What does POS stand for in retail?',
        answers: [
            { text: 'Product on sale', correct: false },
            { text: 'Point of sale', correct: true },
            { text: 'Product order system', correct: false },
            { text: 'Product organization system', correct: false }
        ]
    },
    {
        question: 'What is a stock keeping unit (SKU) in retail?',
        answers: [
            { text: 'A barcode system', correct: false },
            { text: 'An inventory measurement unit', correct: false },
            { text: 'A unique reference number for each product', correct: true },
            { text: 'A category of products in store', correct: false }
        ]
    },
    {
        question: 'What does CRM mean in retail?',
        answers: [
            { text: 'Customer Relationship Management', correct: true },
            { text: 'Marketing control record', correct: false },
            { text: 'Market risk control', correct: false },
            { text: 'Movement control record', correct: false }
        ]
    },
    {
        question: 'What is inventory turnover in retail?',
        answers: [
            { text: 'Rate of inventory restocking', correct: false },
            { text: 'Rate of inventory selling and replacing', correct: true },
            { text: 'Rate of inventory discounting', correct: false },
            { text: 'Rate of inventory auditing', correct: false }
        ]
    },
    {
        question: 'What is retail analytics?',
        answers: [
            { text: 'Analysis of customer demographics', correct: false },
            { text: 'Analysis of retail store locations', correct: false },
            { text: 'Analysis of sales data to make decisions', correct: true },
            { text: 'Analysis of retail competition', correct: false }
        ]
    },
    {
        question: 'What is a loss prevention strategy in retail?',
        answers: [
            { text: 'Strategy to increase sales', correct: false },
            { text: 'Strategy to reduce customer wait times', correct: false },
            { text: 'Strategy to reduce theft and fraud', correct: true },
            { text: 'Strategy to increase customer satisfaction', correct: false }
        ]
    },
    {
        question: 'What is a merchandising plan in retail?',
        answers: [
            { text: 'Plan for employee scheduling', correct: false },
            { text: 'Plan for product display and promotion', correct: true },
            { text: 'Plan for inventory reordering', correct: false },
            { text: 'Plan for customer service improvement', correct: false }
        ]
    },
    {
        question: 'What is omnichannel retailing?',
        answers: [
            { text: 'Retailing strategy focused on one sales channel', correct: false },
            { text: 'Retailing strategy focused on multiple sales channels', correct: true },
            { text: 'Retailing strategy focused on direct sales only', correct: false },
            { text: 'Retailing strategy focused on offline sales only', correct: false }
        ]
    }
];

startButton.addEventListener('click', startGame);
nextButton.addEventListener('click', () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < shuffledQuestions.length) {
        setNextQuestion();
    } else {
        showResult();
    }
});
restartButton.addEventListener('click', () => {
    startButton.classList.remove('hide');
    resultContainerElement.classList.add('hide');
    shuffledQuestions = shuffle(questions);
    currentQuestionIndex = 0;
    score = 0;
    startGame();
});

function startGame() {
    startButton.classList.add('hide');
    resultContainerElement.classList.add('hide');
    questionContainerElement.classList.remove('hide');
    shuffledQuestions = shuffle(questions);
    currentQuestionIndex = 0;
    score = 0;
    setNextQuestion();
}

function setNextQuestion() {
    resetState();
    showQuestion(shuffledQuestions[currentQuestionIndex]);
}

function showQuestion(question) {
    questionElement.innerText = question.question;
    question.answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerText = answer.text;
        button.classList.add('btn');
        button.addEventListener('click', () => selectAnswer(answer.correct));
        answerButtonsElement.appendChild(button);
    });
}

function resetState() {
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild);
    }
}

function selectAnswer(correct) {
    if (correct) {
        score += 10;
    }
    if (currentQuestionIndex < shuffledQuestions.length - 1) {
        currentQuestionIndex++;
        setNextQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    questionContainerElement.classList.add('hide');
    resultContainerElement.classList.remove('hide');
    resultElement.innerText = `Your score is: ${score}`;
    scoreElement.innerText = `Grade: ${calculateGrade(score)}`;
}

function calculateGrade(score) {
    if (score >= 90) {
        return 'Excellent (A)';
    } else if (score >= 70) {
        return 'Very good (B)';
    } else if (score >= 50) {
        return 'Average (C)';
    } else {
        return 'Needs improvement (D)';
    }
}

function shuffle(array) {
    return array.sort(() => Math.random() - 0.5);
}

startGame();
