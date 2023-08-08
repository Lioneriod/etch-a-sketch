const canvas = document.querySelector(".canvas");
const starter = document.querySelector(".starter");
const eraser = document.querySelector(".eraser");
const rainbowMode = document.querySelector(".rainbowMode");

function canvasCreator(squares) {
  for (let i = 0; i < squares; i++) {
    let square = document.createElement("div");
    square.id = "n" + i;
    square.classList.add("square");
    canvas.appendChild(square);
    square.addEventListener("mouseenter", () => {
      square.style.cssText = "background-color: #57799d";
    });
    rainbowMode.addEventListener("click", () => {
      let RGB = Math.floor(Math.random() * 6);
      console.log(RGB);
      switch (RGB) {
        case 0:
          square.addEventListener("mouseenter", () => {
            square.style.cssText = "background-color: red";
          });
          break;
        case 0:
          square.addEventListener("mouseenter", () => {
            square.style.cssText = "background-color: red";
          });
          break;
        case 1:
          square.addEventListener("mouseenter", () => {
            square.style.cssText = "background-color: orange";
          });
          break;
        case 2:
          square.addEventListener("mouseenter", () => {
            square.style.cssText = "background-color: yellow";
          });
          break;
        case 3:
          square.addEventListener("mouseenter", () => {
            square.style.cssText = "background-color: green";
          });
          break;
        case 4:
          square.addEventListener("mouseenter", () => {
            square.style.cssText = "background-color: blue";
          });
          break;
        case 5:
          square.addEventListener("mouseenter", () => {
            square.style.cssText = "background-color: indigo";
          });
          break;
        case 6:
          square.addEventListener("mouseenter", () => {
            square.style.cssText = "background-color: violet";
          });
          break;
      }
    });
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
