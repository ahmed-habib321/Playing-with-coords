let height, width, time;

function delay(duration) {
  return new Promise(resolve => setTimeout(resolve, duration));
}

function initialize() {
  height = window.innerHeight - 100;
  width = window.innerWidth - 100;
  document.getElementById("track").style.height = window.innerHeight - 208 + "px";
  document.getElementById("track").style.width = window.innerWidth - 208 + "px";
  document.getElementById("inner-border").style.height = window.innerHeight - 400 + "px";
  document.getElementById("inner-border").style.width = window.innerWidth - 400 + "px";
}

async function moveBallDown(element) {
  let index = 0;
  while (index <= height) {
    element.style.top = index + "px";
    index += 1;
    await delay(time);
  }
  moveBallRight(element);
}

async function moveBallRight(element) {
  let index = 0;
  while (index <= width) {
    element.style.left = index + "px";
    index += 1;
    await delay(time);
  }
  moveBallUp(element);
}

async function moveBallUp(element) {
  let index = height;
  while (index >= 0) {
    element.style.top = index + "px";
    index -= 1;
    await delay(time);
  }
  moveBallLeft(element);
}

async function moveBallLeft(element) {
  let index = width;
  while (index >= 0) {
    element.style.left = index + "px";
    index -= 1;
    await delay(time);
  }
  moveBallDown(element);
}
