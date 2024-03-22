// structured the quiz questions (API)
export const data = {
    topic : 'JavaScrip',
    level : 'Beginner',
    totalQuestions : 4,
    perQuestionScore : 5,

    questions : [
        {
            question: 'Which function is used to seralize an object into a JSON in JavaScript?',
            choices: ['stringify()', 'parse()', 'convert()', 'None of the above'],
            type: 'MCQs',
            correctAnswer: 'stringify()',
        },
        {
            question: 'Which of the following keywords is used to define a vaiable in JavaScript?',
            choices: ['var', 'let', 'var and let', 'None of the above'],
            type: 'MCQs',
            correctAnswer: 'var and let',
        },
        {
            question: 'Which of the following methods can be used to display data in some form using JavaScript?',
            choices: ['document.write()', 'console.log()', 'window.alert()', 'All of the above'],
            type: 'MCQs',
            correctAnswer: 'All of the above',
        },
        {
            question: 'How can a datatype be declared to be a costant type?',
            choices: ['const', 'var', 'let', 'constant'],
            type: 'MCQs',
            correctAnswer: 'const',
        }
    ]
}