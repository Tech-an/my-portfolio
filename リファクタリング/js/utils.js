function backImg(imgArr) {
  /**Webページアクセス時にbodyのbackgroundImageをランダムで表示させるための関数 */
  document.body.style.backgroundImage = `url(../img/background/${
    imgArr[parseInt(Math.random() * (imgArr.length - 0))]
  })`;
}
