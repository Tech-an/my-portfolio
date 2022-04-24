// 文章をコマ送りにして表示するための関数
function chatText(element, txt, button = null, delay = 100) {
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
  return [chatTextId, chatAvaterId];
}

// アバターが喋っているように表示するための関数
function __chatAvater(delay = 200) {
  const avaterFrame = document.getElementById("avater_frame");
  let i = 0;
  avaterImgs = ["chatTetsuya.png", "defaultTetsuya.png"];
  return setInterval(() => {
    avaterFrame.style.backgroundImage = `url(https://raw.githubusercontent.com/Tech-an/my-portfolio/master/img/avater/${
      avaterImgs[i++ % 2]
    })`;
    // avaterFrame.style.backgroundImage = `url(../img/avater/${
    //   avaterImgs[i++ % 2]
    // })`;
  }, delay);
}

// デフォルトの表情に戻すための関数
function defaultAvater() {
  document.getElementById(
    "avater_frame"
    // ).style.backgroundImage = `url(../img/avater/defaultTetsuya.png)`;
  ).style.backgroundImage = `url(https://raw.githubusercontent.com/Tech-an/my-portfolio/master/img/avater/defaultTetsuya.png)`;
}

// 「はなす」をクリックしたときに日本時刻に合わせて挨拶をするための関数
function greetChat(element) {
  const texts = [
    "まだ起きてたの？",
    "おはよう！",
    "こんにちは！",
    "こんばんは！",
  ];
  const hourIndex = Math.floor(new Date().getHours() / 6);
  const name = localStorage.name === undefined ? "Geust" : localStorage.name;
  chatText(element, name + "さん、" + texts[hourIndex]);
}

const textDB = [
  "実は私はサンタクロースです。",
  "最近はオロポにハマっているよ！",
  "ファッションはポールスミスが好きだよ..(高いけど..)",
  "こんばんみ！",
  "最近新聞を購読したよ！もう4日分も溜まってしまった..笑",
  "海外旅行に行きたいなぁ～",
  "youtubeは東海オンエア9割..笑",
  "今年はやりたいこと全部やってくよ!",
  "アメリカではbucket listと言って死ぬまでにやりたいことリストを作る習慣があるらしいよ！",
  "エンジニア仲間がほしいなぁ～(..ﾁﾗ)",
];
let textStack = [];

// 「はなす」をクリックしたときにランダムに話すための関数
function randomChat(element, button) {
  if (textStack.length === 0) textStack = [...textDB];
  const text = textStack.splice(
    Math.floor(Math.random() * textStack.length),
    1
  )[0];
  const [textId, avaterId] = chatText(element, text, button);
  button.onclick = () => {
    clearInterval(textId);
    clearInterval(avaterId);
    randomChat(element, button);
  };
}

function resetTrigger(button) {
  button.onclick = () => {};
}

function setTrriger(element, button) {
  button.onclick = () => {
    randomChat(element, button);
  };
}
