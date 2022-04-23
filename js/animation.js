function animation(doExec) {
  if (!doExec) return;
  const animeStyle = ["fadeinCenter", "rotate"];
  const execIndex = Math.floor(Math.random() * animeStyle.length);
  switch (execIndex) {
    case 0:
      fadeinCenter();
      break;
    case 1:
      rotate();
      break;
  }
}

function fadeinCenter() {
  setAnimation("fadein_center");
}

function rotate() {
  setAnimation("rotate");
}

function setAnimation(cssClassName) {
  document.body.classList.add(cssClassName);
  setTimeout(() => {
    document.body.classList.remove(cssClassName);
  }, 3000);
}
