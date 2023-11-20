score = 0;
cross = true;

audio = new Audio('free.m4a')
audioover = new Audio('leash.mp3')
setTimeout(() => {
    audio.play()
}, 1000);
document.onkeydown = function (e) {
    console.log(e.keyCode)
    if (e.keyCode == 32) {
        men = document.querySelector('.men');
        men.classList.add('jumpmen');
        setTimeout(() => {
            men.classList.remove('jumpmen')
        }, 700);
    }
    if (e.keyCode == 39) {
        men = document.querySelector('.men');
        menX = parseInt(window.getComputedStyle(men, null).getPropertyValue('left'))
        men.style.left = menX + 120 + "px"
    }
    if (e.keyCode == 37) {
        men = document.querySelector('.men');
        menX = parseInt(window.getComputedStyle(men, null).getPropertyValue('left'))
        men.style.left = (menX - 120) + "px"
    }
}

setInterval(() => {
    men = document.querySelector('.men');
    fighter = document.querySelector('.fighter');
    gameOver = document.querySelector('.gameOver');

    mx = parseInt(window.getComputedStyle(men, null).getPropertyValue('left'))
    my = parseInt(window.getComputedStyle(men, null).getPropertyValue('top'))

    fx = parseInt(window.getComputedStyle(fighter, null).getPropertyValue('left'))
    fy = parseInt(window.getComputedStyle(fighter, null).getPropertyValue('top'))

    offsetX = Math.abs(mx - fx);
    offsetY = Math.abs(my - fy);
    // console.log(offsetX,offsetY)
    if (offsetX < 80 && offsetY < 52) {
        fighter.classList.remove('fighterMoves')
        gameOver.style.visibility = 'visible'
        audioover.play();
        setTimeout(() => {
            audio.pause()
        }, 100);

    }
    else if (offsetX < 80 && cross) {
        score += 1;
        updateScore(score)
        cross = false;
        setTimeout(() => {
            cross = true;
        }, 1000)
        setTimeout(() => {
            aniDur = parseFloat(window.getComputedStyle(fighter, null).getPropertyValue('animation-duration'))
            newDur = aniDur - 0.1;
            fighter.style.animationDuration = newDur + 's'
        }, 300)
    }
}, 10)

function updateScore(score) {
    scoreC = document.querySelector('.scoreC')
    scoreC.innerHTML = "Your Score: " + score
}