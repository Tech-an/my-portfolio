// 時間を条件にして勝手に笑うようにする
function laugh() {
  setInterval(() => {
    const avaterFrame = document.getElementById("avater_frame");
    avaterFrame.style.backgroundImage = `url(../img/avater/笑顔てつや.png)`;
    setTimeout(() => {
      avaterFrame.style.backgroundImage = `url(../img/avater/デフォルトてつや.png)`;
    }, 10000);
  }, 60000);
}
