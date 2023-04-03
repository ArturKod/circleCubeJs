let box = document.querySelector('.box');

function random(min = 0, max = 255) {
    return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
  }
let countW = 0;
let countH = 0;
let isLeft = true;
let isTop = true;
box.style = `background-color:rgb(${random()}, ${random()}, ${random()})`;
  setInterval(() => {
   
    if (countW <=  window.outerWidth - 127 && isLeft) {
    box.style.setProperty('left', `${countW+=5}px`);
    } else if (countH <= window.outerHeight - 247 && isTop) {
      isLeft = false;
      box.style.setProperty('top', `${countH+=5}px`);
    } else if (countW >= 0 && !isLeft) {
      console.log(isLeft);
      isTop = false;
      box.style.setProperty('left', `${countW-=5}px`);
    } else if (countH >= 0 && !isTop) {
      box.style.setProperty('top', `${countH-=5}px`);
    }
  }, 10);
console.log(isLeft);

