const form = document.querySelector('.form')
const btn_start = document.querySelector('.start-button')

const game = document.querySelector('.game')
const current_word = document.querySelector('.current-word')
const input = document.querySelector('.start-input')
const time_score = document.querySelector('.time-score')
const score = document.querySelector('.score');
const timer = document.querySelector('.timer')
const lists = ['hello', 'welcome', 'typinggame', 'basketball', 'picnic', 'nice', 'day', 'excellent', 'love', 'yourself', 'byebye']
const time = [6, 8, 13, 11, 5, 4, 4, 10, 7, 8, 6]



let currentTime = +timer.innerHTML
let timeLeft = currentTime;


function countdown() {

    input.classList.remove('nonactivation')
    input.disabled = false;


    btn_start.classList.add('stop')
    btn_start.innerHTML = '중지'
    const btn_stop = input.nextElementSibling

    if (timeLeft > 0) {
        const timeoutId = setTimeout(countdown, currentTime * 100)
        timer.innerHTML = timeLeft;
        timeLeft--;

        function stopCount() {
            if (input.value !== '' && input.value !== current_word.innerHTML) return
            clearTimeout(timeoutId)
            if (i === 0) {
                timer.innerHTML = 8;
                timeLeft = 8
            }
            else {
                timer.innerHTML = time[i - 1];
                timeLeft = time[i - 1];
            }

            btn_start.classList.remove('stop')
            btn_start.innerHTML = '시작'
            btn_stop.removeEventListener('click', stopCount)
            btn_start.addEventListener('click', countdown)

        }
    } else {
        if (i === lists.length + 1 && timeLeft === 0) return;
        random();

    }

    btn_start.removeEventListener('click', countdown)
    btn_stop.addEventListener('click', stopCount)


}



function showresult() {
    localStorage.setItem('score', `${score.innerHTML}`)
    window.location.href = "gameResult.html"

}


let i = 0;
function random() {
    if (lists[i] !== undefined) {
        current_word.innerHTML = lists[i]
        timer.innerHTML = time[i];
        timeLeft = time[i]
        countdown()
        i++;
    }
    else {
        showresult();
        i++;
    }

}

function typing(word) {
    let current_score = +score.innerText
    current_score++
    score.innerHTML = current_score
    random()
}



function typingSubmit(event) {
    event.preventDefault();
    const word = input.value
    if (word !== '' && word === current_word.innerHTML) typing(word)
    input.value = ''

}

form.addEventListener('submit', typingSubmit)


btn_start.addEventListener('click', countdown)





