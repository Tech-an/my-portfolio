// 時間を条件にして勝手に笑うようにする
function laugh() {
  setInterval(() => {
    const avaterFrame = document.getElementById("avater_frame");
    avaterFrame.style.backgroundImage = `url(../img/avater/laughTetsuya.png)`;
    setTimeout(() => {
      avaterFrame.style.backgroundImage = `url(../img/avater/defaultTetsuya.png)`;
    }, 10000);
  }, 60000);
}
