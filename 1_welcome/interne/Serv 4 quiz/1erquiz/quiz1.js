const quizContainer = document.getElementById('quiz');
const resultContainer = document.getElementById('result');
const submitButton = document.querySelector('button');

const questions = [
    {
        question: 'How would you describe yourself?',
        options: ['Introverted', 'Extroverted', 'Ambivert'],
    },
    {
        question: 'What is your preferred working style?',
        options: ['Team collaboration', 'Independent work', 'Both'],
    },
    {
        question: 'How do you handle stress?',
        options: ['Stay calm and focused', 'Seek support from others', 'Take a break and relax'],
    },
];

function buildQuiz() {
    questions.forEach((question, index) => {
        const questionContainer = document.createElement('div');
        questionContainer.classList.add('question');
        questionContainer.innerHTML = `
            <h3>${index + 1}. ${question.question}</h3>
            <div class="options">
                ${question.options.map((option, i) => `<label><input type="radio" name="q${index}" value="${i}">${option}</label>`).join('')}
            </div>
        `;
        quizContainer.appendChild(questionContainer);
    });
}

function submitQuiz() {
    const answers = [];
    const answerElements = document.querySelectorAll('input:checked');

    answerElements.forEach(answerElement => {
        answers.push(parseInt(answerElement.value));
    });

    if (answers.length === questions.length) {
        const personalityType = analyzePersonality(answers);
        resultContainer.innerHTML = `<p>Your personality type is: ${personalityType}</p>`;
    } else {
        resultContainer.innerHTML = '<p>Please answer all questions before submitting.</p>';
    }
}

function analyzePersonality(answers) {
    const totalPoints = answers.reduce((acc, value) => acc + value, 0);

    if (totalPoints < 3) {
        return 'Introvert';
    } else if (totalPoints < 6) {
        return 'Ambivert';
    } else {
        return 'Extrovert';
    }
}

buildQuiz();
