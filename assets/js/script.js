// * DOM Selectors

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
    // correct answers
    correct = 0,
    // wrong answers
    wrong = 0,
    // final score
    score = 0,
    n = 0,
    // all correct answers in a array
    correctAnswers = [2, 0, 4, 4, 1, 0, 1, 1, 1, 5, 3, 0, 3, 6, 1, 2, 0, 5, 4, 7, 3, 3, 6, 5, 3, 6, 6, 2, 1, 7];



// * Adding the questions
// * By clicking on the options : score , correctAnswers and wrong answers will be count
function questionBox() {
    // if current question was 30 or less
    if (currentQuestion <= 30) {
        // if it was 12 or less
        if (currentQuestion <= 12) {
            // optionsHtml will be empty
            optionsHtml = ''
            // answers will be loop 6 times
            for (let i = 1; i <= 6; i++) {
                optionsHtml += answerFunction(i)
            }
            // if it was between 13 to 30
        } else if (13 <= currentQuestion && 30 >= currentQuestion) {
            // optionsHtml will be empty
            optionsHtml = ''
            // answers will be loop 6 times
            for (let i = 1; i <= 8; i++) {
                optionsHtml += answerFunction(i)
            }
        }
        // calling the questionsHtml to work
        questionsHtml()
        // selecting the answerImages
        let options = $.querySelectorAll('.options img')
        options.forEach(item => {
            item.addEventListener('click', () => {
                // if it had the true class
                if (item.classList.contains('true')) {
                    correct++
                    score = correct * 5
                } else {
                    wrong++
                }
                currentQuestion++;
                // when options been clicked : questionBox will be work again
                questionBox();
            });
        });
        // calling the questionImage to work
        updateQuestionImage()
        // if currentQuestion was more than 30 :
    } else {
        endPage()
    }
    markCorrectAnswers()
}

// * updatingTheQuestionImage Function
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

// * returning the answerImages function to use it wherever we want
function answerFunction(number) {
    return `
    <div class="options">
        <img src="assets/Images/${currentQuestion}/${currentQuestion}-${number}.png">
    </div>
    `
}

// * when startBtn has been clicked
startBtn.addEventListener('click', () => {
    // call startFunction
    startFunction()
})

// * adding 1 to currentQuestion for the first question be in loop
// * adding hide class to startPage
// * calling questionBox to work
function startFunction() {
    currentQuestion++
    changeDisplay(startPage)
    questionBox()
}


// * endPage html
// * calling  PlayAgain and iqStatus to work whenever the endPage has been called
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

// * giving an iqLevelText based on your score
function iqStatus() {
    let iqLevel = $.querySelector('#iq-level p')
    switch (score) {
        case 10:
        case 15:
        case 20:
            if (n < `Your iQ is the lowest level`.length) {
                iqLevel.innerHTML += `Your iQ is the lowest level`.charAt(n); n++; setTimeout(iqStatus, 50)
            }
            break;
        case 25:
        case 30:
        case 35:
            if (n < 'Your IQ is low, try harder to get better results'.length) {
                iqLevel.innerHTML += `Your IQ is low, try harder to get better results`.charAt(n); n++; setTimeout(iqStatus, 50)
            }
            break;
        case 40:
        case 45:
        case 50:
            if (n < 'Your IQ is below average'.length) {
                iqLevel.innerHTML += `Your IQ is below average`.charAt(n); n++; setTimeout(iqStatus, 50)
            }
            break;
        case 55:
        case 60:
        case 65:
            if (n < 'Your IQ is lower than Ass Kardashian My bad my bad Kim Kardashian'.length) {
                iqLevel.innerHTML += `Your IQ is lower than Ass Kardashian My bad my bad Kim Kardashian`.charAt(n); n++; setTimeout(iqStatus, 50)
            }
            break;
        case 70:
        case 75:
        case 80:
        case 85:
            if (n < 'Your IQ is average'.length) {
                iqLevel.innerHTML += `Your IQ is average`.charAt(n); n++; setTimeout(iqStatus, 50)
            }
            break;
        case 90:
        case 95:
        case 100:
            if (n < 'Congratulations, your IQ is high'.length) {
                iqLevel.innerHTML += `Congratulations, your IQ is high`.charAt(n); n++; setTimeout(iqStatus, 50)
            }
            break;
        case 105:
        case 110:
        case 115:
            if (n < 'You are a SMART person bro'.length) {
                iqLevel.innerHTML += `You are a SMART person bro`.charAt(n); n++; setTimeout(iqStatus, 50)
            }
            break;
        case 120:
        case 125:
        case 130:
            if (n < 'Your IQ is SUPER HIGH , dude'.length) {
                iqLevel.innerHTML += `Your IQ is SUPER HIGH , dude`.charAt(n); n++; setTimeout(iqStatus, 50)
            }
            break;
        case 135:
        case 140:
        case 145:
            if (n < 'You are a Genius bro'.length) {
                iqLevel.innerHTML += `You are a Genius bro`.charAt(n); n++; setTimeout(iqStatus, 50)
            }
            break;
        case 150:
            if (n < 'Tesla my friend , is that you?'.length) {
                iqLevel.innerHTML += `Tesla my friend , is that you?`.charAt(n); n++; setTimeout(iqStatus, 50)
            }
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