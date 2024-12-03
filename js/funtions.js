//Create consts for things we will be changing or adding to
const body = document.querySelector("body");
const header = document.querySelector("header");

function d() {
  // change header backgound color to random color
  let randColor = `rgb(${Math.round(Math.random() * 255)},${Math.round(
    Math.random() * 255
  )},${Math.round(Math.random() * 255)})`;
  header.style = `background-color: ${randColor};`;
}

let isDisplayShow = true;
let displayInt = 0;
function w() {
  //Hide header
  if (isDisplayShow) {
    header.style = "display: none";
    isDisplayShow = false;
    if (displayInt === 0)
      setTimeout(() => {
        alert(
          "Don't worry you can bring it back you just have to find out how ;)"
        );
        displayInt = 1;
      }, 10);
  }
}
function l() {
  //show header if hidden
  if (!isDisplayShow) {
    header.style = "display: block";
    isDisplayShow = true;
  }
}

function v() {
  //change  body backgound color to random color
  let randColor = `rgb(${Math.round(Math.random() * 255)},${Math.round(
    Math.random() * 255
  )},${Math.round(Math.random() * 255)})`;
  body.style = `background-color: ${randColor};`;
}
