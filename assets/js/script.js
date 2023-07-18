// ! DOM Selectors

let $ = document,
    // body
    bodyEl = $.body,
    // start button
    startBtn = $.querySelector('#start-btn button'),
    // whole start page
    startPage = $.querySelector('.start-page'),
    // current question
    currentQuestion = 0,
    // end page
    endSection = $.querySelector('.end-page'),
    // options html
    optionsHtml = '',
    // final point
    correct = 0,
    wrong = 0,
    score = 0,
    correctAnswers = [2, 0, 4, 4, 1, 0, 1, 1, 1, 5, 3, 0, 3, 6, 1, 2, 0, 5, 4, 7, 3, 3, 6, 5, 3, 6, 6, 2, 1, 7];


function questionBox() {
    if (currentQuestion <= 30) {
        if (currentQuestion <= 12) {
            optionsHtml = ''
            for (let i = 1; i <= 6; i++) {
                optionsHtml += answerFunction(i)
            }
        } else if (13 <= currentQuestion && 30 >= currentQuestion) {
            optionsHtml = ''
            for (let i = 1; i <= 8; i++) {
                optionsHtml += answerFunction(i)
            }
        }
        questionsHtml()

        let options = $.querySelectorAll('.options img')
        options.forEach(item => {
            item.addEventListener('click', () => {
                if (item.classList.contains('true')) {
                    correct++
                    score = correct * 5
                } else {
                    wrong++
                }
                currentQuestion++;
                questionBox();
            });
        });
        updateQuestionImage()
    } else {
        endPage()
    }
    markCorrectAnswers()
}

function updateQuestionImage() {
    let questionImage = $.querySelector('.picture');
    let questionImagePath = '';
    questionImagePath = `assets/Images/${currentQuestion}/test${currentQuestion}.png`;
    questionImage.querySelector('img').setAttribute('src', questionImagePath);
}

function markCorrectAnswers() {
    // Get all the options for the current question
    let options = $.querySelectorAll('.options img');
    // Get the correct answer for the current question
    let correctAnswer = correctAnswers[currentQuestion - 1];
    // Add the 'true' class to the correct option
    options[correctAnswer].classList.add('true');
}

function answerFunction(number) {
    return `
    <div class="options">
        <img src="assets/Images/${currentQuestion}/${currentQuestion}-${number}.png">
    </div>
    `
}

startBtn.addEventListener('click', () => {
    startFunction()
    updateQuestionImage()
})

function startFunction() {
    currentQuestion++
    changeDisplay(startPage)
    questionBox()
}

function endPage() {
    bodyEl.innerHTML =
        `<section class="end-page">
    <div class="container">
        <div class="start-end-page">
            <div class="top-title" id="display">
                <h3 id="final-result">${score}</h3>
                <span>/ 150</span>
            </div>
            <div id="iq-level">
                <p></p>
            </div>
            <div id="right-answer" class="btn">
                <button>
                    Right Answer: <span>${correct}</span>
                </button>
            </div>
            <div id="wrong-answer" class="btn">
                <button>
                    Wrong Answer: <span>${wrong}</span>
                </button>
            </div>
            <div id="play-again" class="btn">
                <button>Play Again</button>
            </div>
        </div>
    </div>
</section>`
    playAgain()
    iqStatus()
}

// FIXME: changing the innerHtml
function iqStatus() {
    let iqLevel = $.querySelector('#iq-level p')
    switch (score) {
        case 10:
        case 15:
        case 20:
            iqLevel.innerHTML = `Worse`
            break;
        case 25:
        case 30:
        case 35:
            iqLevel.innerHTML = `Worse`
            break;
        case 45:
        case 50:
        case 55:
            iqLevel.innerHTML = `Worse`
            break;
        case 60:
        case 65:
        case 70:
            iqLevel.innerHTML = `Worse`
            break;
        case 75:
        case 80:
        case 85:
            iqLevel.innerHTML = `Worse`
            break;
        case 80:
        case 85:
        case 90:
            iqLevel.innerHTML = `Worse`
            break;
        case 95:
        case 100:
        case 105:
            iqLevel.innerHTML = `Worse`
            break;
        case 110:
        case 115:
        case 120:
            iqLevel.innerHTML = `Worse`
            break;
        case 125:
        case 130:
        case 135:
            iqLevel.innerHTML = `Worse`
            break;
        case 140:
        case 145:
            iqLevel.innerHTML = `nnn`
            break;
            default:
            iqLevel.innerHTML = `Your Genius`
            break;
    }

}

// TODO : timerBox

function playAgain() {
    let playAgainBtn = $.querySelector('#play-again');
    playAgainBtn.addEventListener('click', () => {
        window.location.reload()
    });
}

function changeDisplay(element) {
    element.classList.toggle('hide')
}

function questionsHtml() {
    bodyEl.innerHTML = `<div class="container" id="images-page">
        <div id="test">
            <div class="top-test">
                <div class="page-counter">
                    <span class="page">${currentQuestion}</span>
                    <span>/</span>
                    <span>30</span>
                </div>
                <div class="timer">
                    <span class="minutes">04</span>
                    <span>:</span>
                    <span class="seconds">60</span>
                </div>
            </div>
            <div class="main-test">
                <div class="picture">
                    <img src="assets/Images/1/test1.png">
                </div>
                <div class="question">
                    <span>- Which one is the answer ?</span>
                </div>
                <div class="answerBox" id="answerBox">${optionsHtml}</div>
            </div>
        </div>
    </div>`;
}