const sqrs = document.querySelectorAll('.sqr')
const moles = document.querySelectorAll('.mole')
const timeLeft = document.querySelector('#secs-left')
const scr = document.querySelector('#score')
const duration = 5 /*Duration of the game in seconds*/

let time = duration
let score = 0
let hit
let timerMole
let timer


/*Event listener for a 'hit'*/
sqrs.forEach( sqr => sqr.addEventListener('mouseup', checkHit) )


function checkHit() {
    if (this.id == hit) {
        score += 1
        scr.textContent = score
    }
}


/*Randomly postion the mole*/
function randomSqr() {
    sqrs.forEach( sqr => sqr.classList.remove('mole'))

    hit = Math.floor(Math.random() * 9 )
    sqrs[hit].classList.add('mole')
}


function countdown () {
    time -= 1
    timeLeft.textContent = time
    
    if (time === 0) {
        clearInterval(timer)
        clearInterval(timerMole)
        sqrs.forEach( sqr => sqr.removeEventListener('mouseup', checkHit) )
    }
}


timeLeft.textContent = duration
timer = setInterval(countdown, 1000)
timerMole = setInterval(randomSqr, 1000)
