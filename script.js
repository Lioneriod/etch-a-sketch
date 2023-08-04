const canvas = document.querySelector(".canvas");
const starter = document.querySelector(".starter");
const canvasSize = 26 ** 2;

function canvasCreator(pixels) {
  for (let i = 0; i < pixels; i++) {
    let pixel = document.createElement("div");
    pixel.id = "p" + i;
    pixel.classList.add("pixel");
    canvas.appendChild(pixel);
  }
  console.log(pixels);
}

starter.addEventListener("click", () => {
  canvasCreator(canvasSize);
});
