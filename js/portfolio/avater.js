// 時間を条件にして勝手に笑うようにする
function laugh() {
  setInterval(() => {
    const avaterFrame = document.getElementById("avater_frame");
    // avaterFrame.style.backgroundImage = `url(../img/avater/laughTetsuya.png)`;
    avaterFrame.style.backgroundImage = `url(https://raw.githubusercontent.com/Tech-an/my-portfolio/master/img/avater/laughTetsuya.png)`;
    setTimeout(() => {
      // avaterFrame.style.backgroundImage = `url(../img/avater/defaultTetsuya.png)`;
      avaterFrame.style.backgroundImage = `url(https://raw.githubusercontent.com/Tech-an/my-portfolio/master/img/avater/defaultTetsuya.png)`;
    }, 10000);
  }, 60000);
}
