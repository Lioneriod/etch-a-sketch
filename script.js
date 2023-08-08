const canvas = document.querySelector(".canvas");
const starter = document.querySelector(".starter");
const eraser = document.querySelector(".eraser");

function canvasCreator(squares) {
  for (let i = 0; i < squares; i++) {
    let square = document.createElement("div");
    square.id = "p" + i;
    square.classList.add("square");
    canvas.appendChild(square);
  }
}
starter.addEventListener("click", () => {
  const canvasSize = canvasAsk();
  function canvasAsk(size) {
    let maxSize = 550;
    size = prompt("How many squares you want?", `The max value is ${maxSize}`);
    if (size < maxSize) {
      return size;
    } else {
      return (size = maxSize);
    }
  }
  canvasCreator(canvasSize);
});

eraser.addEventListener("click", () => {
  while (canvas.firstChild) {
    canvas.removeChild(canvas.firstChild);
  }
});
