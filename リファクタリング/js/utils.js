function backImg(imgArr) {
  /**Webページアクセス時にbodyのbackgroundImageをランダムで表示させるための関数 */
  document.body.style.backgroundImage = `url(../img/background/${
    imgArr[parseInt(Math.random() * (imgArr.length - 0))]
  })`;
}

// !【注意】modalImg は item/サンタクロース.png のような入力値を求める
function modal(openElement, modalTitle, modalImg, modalText) {
  // step0. 必要な要素を取得する
  const main = document.getElementsByTagName("main")[0];
  const mask = document.getElementById("mask");
  const open = openElement;
  // step1. 必要な要素を生成する
  const modal = document.createElement("section");
  /* modalの子要素 */
  const header = document.createElement("div");
  const contents = document.createElement("div");
  /* headerの子要素 */
  const title = document.createElement("h1");
  const close = document.createElement("div");
  /* contentsの子要素 */
  const capture = document.createElement("div");
  const img = document.createElement("img");
  const text = document.createElement("p");

  // step2. 要素をDOMに追加する
  main.append(modal);
  modal.append(header, contents);
  header.append(title, close);
  contents.append(capture, text);
  // capture.append(img);

  // step3. 要素に必要なclass,idを追加する
  modal.id = "modal";
  modal.classList.add("hidden");
  header.id = "modal_header";
  title.id = "modal_title";
  close.id = "modal_close";
  contents.id = "modal_contents";
  capture.id = "modal_capture";
  text.id = "modal_text";
  img.id = "modal_img";

  // step4. 要素に値を追加する
  title.textContent = modalTitle;
  close.textContent = "×";
  text.style.backgroundImage = `url(img/${modalImg})`;
  // img.src = `img/${modalImg}`;
  text.textContent = modalText;

  // step5. 要素にイベントを追加する
  open.onclick = () => {
    modal.classList.remove("hidden");
    mask.classList.remove("hidden");
  };

  close.onclick = () => {
    modal.classList.add("hidden");
    mask.classList.add("hidden");
  };

  mask.onclick = () => {
    close.click();
  };
}
