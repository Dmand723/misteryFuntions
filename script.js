//create event listener for keys to be pressed
document.addEventListener("keydown", (e) => {
  let key = e.key.toLowerCase();
  switch (key) {
    case "d":
      d();
      return;
    case "w":
      w();
      return;
    case "l":
      l();
      return;
    case "v":
      v();
      return;
  }
});
