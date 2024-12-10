let gamSeq = [];
let useSeq = [];
let btns = ["yellow", "green", "blue", "red"];
let started = false;
let level = 0;
let h1 = document.querySelector("h3");

document.addEventListener("keypress", function () {
  if (!started) {
    console.log("game started ");
    started = true;
    upCall();
  }
});
function gameFlash(btn) {
  btn.classList.add("flash");
  setTimeout(() => btn.classList.remove("flash"), 500);
}
function UserFlash(btn) {
  btn.classList.add("userflash");
  setTimeout(() => btn.classList.remove("userflash"), 250);
}
function upCall() {
  useSeq = [];
  level++;
  h1.innerText = `Level ${level}`;
  let ranIdx = Math.floor(Math.random() * 4);
  let randClr = btns[ranIdx];
  let ranbtn = document.querySelector(`.${randClr}`);
  gamSeq.push(randClr);
  console.log(gamSeq);
  gameFlash(ranbtn);
}
function checkAns(idx) {
  if (gamSeq[idx] === useSeq[idx]) {
    if (gamSeq.length == useSeq.length) {
      setTimeout(upCall(), 500);
    }
  } else {
    h1.innerHTML = `Game over! Your Score was ${level}</b> <br> Press any key to play the game again `;
    document.querySelector("body").style.backgroundColor = "red";
    setTimeout(function () {
      document.querySelector("body").style.backgroundColor = "white";
    }, 150);

    reset();
  }
}

function btnPress() {
  let btn = this;
  UserFlash(btn);
  let usercolor = btn.getAttribute("id");
  useSeq.push(usercolor);
  checkAns(useSeq.length - 1);
}
let allbtn = document.querySelectorAll(".btn");
for (btn of allbtn) {
  btn.addEventListener("click", btnPress);
}
function reset() {
  started = false;
  gamSeq = [];
  useSeq = [];
  level = 0;
}
