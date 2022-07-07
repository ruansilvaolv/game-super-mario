const mario = document.querySelector(".super-mario");
const pipe = document.querySelector(".pipe-game");
const gameOver = document.querySelector(".game-over");
const buttonRestart = document.querySelector(".bt-restart");
const scoreGame = document.querySelector(".score");

const jump = () => {
  mario.classList.add("jump-mario");

  setTimeout(() => {
    mario.classList.remove("jump-mario");
  }, 500);
};

let score1 = 0;
let cross = true;

setInterval(() => {
  const pipePosition = pipe.offsetLeft;
  const marioPosition = +window
    .getComputedStyle(mario)
    .bottom.replace("px", "");

  if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 115){
    if (score1 != 0)
        scoreGame.innerHTML = "Score " + score1;
} else if (marioPosition > 115 && cross) {
    score1 += 10;
    updateScore(score1);
    cross = false;
    setTimeout(() => {
        cross = true;
    }, 1000);
  }
}, 10);

function updateScore(score1) {
  scoreGame.innerHTML = "Score " + score1
}



const loopGame = setInterval(() => {
  const pipePosition = pipe.offsetLeft;
  const marioPosition = +window
    .getComputedStyle(mario)
    .bottom.replace("px", "");

  if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 115) {
    pipe.style.animation = "none";
    pipe.style.left = `${pipePosition}px`;

    mario.style.animation = "none";
    mario.style.bottom = `${marioPosition}px`;

    mario.src = "./images/mario-game-over.png";
    mario.style.width = "75px";
    mario.style.marginLeft = "45px";

    gameOver.style.visibility = "visible";

    clearInterval(loopGame);
  }
}, 10);

document.addEventListener("keydown", jump);
document.addEventListener("click", jump);
document.addEventListener("touchstart", jump);