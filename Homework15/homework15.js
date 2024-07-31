let score = 0
function question(questionText, answers, correctIndex) {
    const questionEL = document.getElementById('question')
    questionEL.textContent = questionText

    const answerEL = document.querySelectorAll('.answer')
    answerEL.forEach((element, index) => {
        element.textContent = answers[index]
        element.classList.remove('correct', 'wrong')
    })
    
    window.correctIndex = correctIndex
}
function check(selectedElement) {
    const answerEL = document.querySelectorAll('.answer')
    const selectedindex = Array.from(answerEL).indexOf(selectedElement)
    if (selectedindex === window.correctIndex) {
        selectedElement.classList.add('correct')
        score++
    } else {
        selectedElement.classList.add('wrong')
    }
    updateScore()
}

function updateScore() {
    const scoreEL = document.getElementById('score')
    scoreEL.textContent = `Score: ${score}`
}

const questionText = 'რომელ წელს მოხდა კრწანისის ბრძოლა?'
const answers = ['1795', '2024', '2008', '1121']
correctIndex = 0
question(questionText, answers, correctIndex)