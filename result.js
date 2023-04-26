const btn_reset = document.querySelector('.restart-button')
const final_score = document.querySelector('.final-score')
const score = localStorage.getItem('score')

final_score.innerHTML += `${score}점 입니다`


function gameRestart() {
    history.back()  //게임 시작 화면으로 이동
}
btn_reset.addEventListener('click', gameRestart)