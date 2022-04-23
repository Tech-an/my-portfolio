// 文章をコマ送りにして表示するための関数
function chatText(element, txt, button = null, delay = 150) {
  if (button !== null) resetTrigger(button);
  element.textContent = "　";
  const titleArr = Array.from(txt);
  const chatAvaterId = __chatAvater();
  const chatTextId = setInterval(() => {
    element.textContent += titleArr.shift();
    if (titleArr.length === 0) {
      clearInterval(chatAvaterId);
      clearInterval(chatTextId);
      defaultAvater();
      if (button !== null) setTrriger(element, button);
    }
  }, delay);
}

// アバターが喋っているように表示するための関数
function __chatAvater(delay = 200) {
  const avaterFrame = document.getElementById("avater_frame");
  let i = 0;
  avaterImgs = ["口開きてつや.png", "デフォルトてつや.png"];
  return setInterval(() => {
    avaterFrame.style.backgroundImage = `url(../img/avater/${
      avaterImgs[i++ % 2]
    })`;
  }, delay);
}

// デフォルトの表情に戻すための関数
function defaultAvater() {
  document.getElementById(
    "avater_frame"
  ).style.backgroundImage = `url(../img/avater/デフォルトてつや.png)`;
}

// 「はなす」をクリックしたときにランダムに話すための関数
function randomChat(element, button) {
  button.onclick = () => {};
  const texts = ["おはよう", "こんにちは", "こんばんは"];
  const text = texts[parseInt(Math.random() * texts.length)];
  chatText(element, text, button);
}

function resetTrigger(button) {
  button.onclick = () => {};
}

function setTrriger(element, button) {
  button.onclick = () => {
    randomChat(element, button);
  };
}
