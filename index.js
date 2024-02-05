let boxes = document.querySelectorAll(".btn");
let resetbtn = document.querySelector("#reset");
let turnO = true;
let newGamebtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
const winPattern = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];
const clickSound = document.getElementById("clickSound");
const resetGame = () => {
  turnO = true;
  enablebtn();
  msgContainer.classList.add("hide");
};
boxes.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (turnO) {
      //player O
      btn.innerText = "O";
      btn.style.color = "blue";
      //   document.querySelector(".btn").style.color = "White"; //Adding Colour to the Button
      turnO = false;
    } else {
      //player x
      btn.innerText = "X";
      btn.style.color = "red";
      // document.querySelector(".btn").color = "red";//Adding Colour to the Button
      turnO = true;
    }
    btn.disabled = true;

    checkWinner(); //this is a Function calling
    clickSound.play();
  });
});
const disablebtn = () => {
  for (let btn of boxes) {
    btn.disabled = true;
  }
};
const enablebtn = () => {
  for (let btn of boxes) {
    btn.disabled = false;
    btn.innerText = "";
  }
};
const showWinner = (winner) => {
  msg.innerText = `Congratulations, Winner is  ${winner}`;
  msgContainer.classList.remove("hide");
  disablebtn();
  //play a sound after winning
  const winSound = document.getElementById("winSound");
  winSound.play();
};

///
const checkWinner = () => {
  for (let pattern of winPattern) {
    // console.log(boxes[pattern[0]], boxes[pattern[1]], boxes[pattern[2]]);
    // console.log(
    //     boxes[pattern[0]].innerText,
    //     boxes[pattern[1]].innerText,
    //     boxes[pattern[2]].innerText,
    // );
    let pos1value = boxes[pattern[0]].innerText;
    let pos2value = boxes[pattern[1]].innerText;
    let pos3value = boxes[pattern[2]].innerText;
    if (pos1value != "" && pos2value != "" && pos3value != "") {
      if (pos1value === pos2value && pos2value === pos3value) {
        showWinner(pos1value);
      }
    }
  }
};

newGamebtn.addEventListener("click", resetGame);
resetbtn.addEventListener("click", resetGame);
