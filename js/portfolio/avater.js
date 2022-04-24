// 時間を条件にして勝手に笑うようにする
function laugh() {
  setInterval(() => {
    const avaterFrame = document.getElementById("avater_frame");
    // avaterFrame.style.backgroundImage = `url(../img/avater/laughTetsuya.png)`;
    avaterFrame.style.backgroundImage = `url(https://github.com/Tech-an/my-portfolio/blob/master/img/background/img/avater/laughTetsuya.png)`;
    setTimeout(() => {
      avaterFrame.style.backgroundImage = `url(https://github.com/Tech-an/my-portfolio/blob/master/img/background/img/avater/defaultTetsuya.png)`;
    }, 10000);
  }, 60000);
}
