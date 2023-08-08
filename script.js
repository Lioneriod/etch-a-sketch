const canvas = document.querySelector(".canvas");
const starter = document.querySelector(".starter");
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

function canvasCreator(pixels) {
  for (let i = 0; i < pixels; i++) {
    let pixel = document.createElement("div");
    pixel.id = "p" + i;
    pixel.classList.add("pixel");
    canvas.appendChild(pixel);
  }
  console.log(pixels);
}
canvasCreator(canvasSize);
