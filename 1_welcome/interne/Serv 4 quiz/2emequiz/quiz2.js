
const quizContainer2 = document.getElementById('quiz-2');
const resultContainer2 = document.getElementById('result-2');
const submitButton2 = document.querySelector('button');

const questions2 = [
    {
        question: 'What is your favorite color?',
        options: ['Blue', 'Red', 'Green', 'Yellow'],
    },
    {
        question: 'Which animal do you like the most?',
        options: ['Dog', 'Cat', 'Bird', 'Fish'],
    },
    {
        question: 'What is your preferred mode of transportation?',
        options: ['Car', 'Bicycle', 'Bus', 'Walking'],
    },
];

function buildQuiz2() {
    questions2.forEach((question, index) => {
        const questionContainer = document.createElement('div');
        questionContainer.classList.add('question');
        questionContainer.innerHTML = `
            <h3>${index + 1}. ${question.question}</h3>
            <div class="options">
                ${question.options.map((option, i) => `<label><input type="radio" name="q${index}" value="${i}">${option}</label>`).join('')}
            </div>
        `;
        quizContainer2.appendChild(questionContainer);
    });
}

function submitQuiz2() {
    const answers = [];
    const answerElements = document.querySelectorAll('#quiz-2 input:checked');

    answerElements.forEach(answerElement => {
        answers.push(parseInt(answerElement.value));
    });

    if (answers.length === questions2.length) {
        const personalityType = analyzePersonality2(answers);
        resultContainer2.innerHTML = `<p>Your preferences indicate: ${personalityType}</p>`;
    } else {
        resultContainer2.innerHTML = '<p>Please answer all questions before submitting.</p>';
    }
}

function analyzePersonality2(answers) {
    const totalPoints = answers.reduce((acc, value) => acc + value, 0);

    if (totalPoints < 2) {
        return 'You lean towards a calm and relaxed personality.';
    } else if (totalPoints < 4) {
        return 'You have a vibrant and energetic personality.';
    } else {
        return 'Your preferences are diverse and adaptable.';
    }
}

buildQuiz2();
