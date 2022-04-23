function home() {
  // step0. アバターの表情を一定時間間隔で変化させる関数を読み込む
  laugh();

  // step1. <main></main>を空にする
  const main = document.getElementsByTagName("main")[0];
  main.innerHTML = "";
  main.id = "portfolio"; // mainタグに設定されているidをportfolioに書き換える

  // step2. <main></main>の中身を構成する
  // !【step2-1】大枠を構成する
  /* mainの子要素 */
  const menuFrame = document.createElement("div");
  const avaterFrame = document.createElement("div");
  /* menuFrameの子要素 */
  const pankuzu = document.createElement("div");
  const menu = document.createElement("div");
  /* menuの子要素 */
  const talk = document.createElement("div");
  const item = document.createElement("div");
  const equip = document.createElement("div");
  const states = document.createElement("div");
  const magic = document.createElement("div");
  const history = document.createElement("div");
  const search = document.createElement("div");
  const strategy = document.createElement("div");
  const menuItems = [
    talk,
    item,
    equip,
    states,
    magic,
    history,
    search,
    strategy,
  ];
  /* avaterFrameの子要素 */
  const chat = document.createElement("div");
  /* chatの子要素 */
  const chatTitle = document.createElement("p");
  const chatContent = document.createElement("p");

  // !【step2-2】DOMツリーに追加する
  main.append(menuFrame, avaterFrame);
  menuFrame.append(pankuzu, menu);
  menu.append(talk, item, equip, states, magic, history, search, strategy);
  avaterFrame.append(chat);
  chat.append(chatTitle, chatContent);

  // !【step2-3】必要なclassやidを付与する
  /* mainの子要素 */
  menuFrame.id = "menu_frame";
  avaterFrame.id = "avater_frame";
  /* menuFrameの子要素 */
  pankuzu.id = "pankuzu";
  menu.id = "menu";
  /* menuの子要素 */
  [talk, item, equip, states, magic, history, search, strategy].forEach(
    (element) => {
      element.id = "menu_item";
    }
  );
  /* avaterFrameの子要素 */
  chat.id = "chat";
  chat.classList.add("nes-container", "is-dark", "with-title");
  /* chatの子要素 */
  chatTitle.className = "title";

  // !【step2-4】contextを付与する
  /* パンくずリスト */
  pankuzu.textContent = "メニュー";
  /* メニュー画面 */
  const menusContent = [
    "はなす",
    "どうぐ",
    "そうび",
    "つよさ",
    "じゅもん",
    "せんれき",
    "しらべる",
    "さくせん",
  ];
  menuItems.forEach((element, i) => {
    element.textContent = menusContent[i];
  });
  /* チャット画面 */
  chatTitle.textContent = "TETSUYA";
  chatContent.textContent = "はじめまして！○○さん";

  // !【step2-5】onclickに関数を付与する
  // !【step2-5-1】「はなす」
  /* 「はなす」を押すと、ランダムな内容をアバターが話してくれる */
  talk.onclick = () => {
    randomChat(chatContent, talk);
  };

  // !【step2-5-2】「どうぐ」
  /* 「どうぐ」を押すと、メニュー画面が書き変わる */
  item.onclick = () => {
    openMenu("item", pankuzu, menu, [
      [
        "サンタクロースの衣装",
        "サンタ.jpg",
        "NPO法人であるチャリティーサンタで活動した時の写真である",
      ],
      ["学生証", null],
      ["会員証", null],
      ["内定", null],
      ["資格", null],
      ["本", null],
      ["パソコン", null],
      ["コーヒーメーカー", null],
      ["オロポ", null],
    ]);
  };

  // !【step2-5-3】「そうび」
  equip.onclick = () => {
    openMenu("equip", pankuzu, menu, [
      ["ぶき：本", null, null],
      ["たて：パソコン", null],
      ["あたま：なし", null],
      ["からだ：ポールスミスの服", null],
      ["アクセ１：なし"],
      ["アクセ２：なし"],
    ]);
  };

  // !【step2-5-4】「つよさ」
  states.onclick = () => {
    openMenu(pankuzu, menu, [
      ["Lv：25"],
      ["さいだいHP：500"],
      ["さいだいMP：226"],
    ]);
  };

  // !【step2-5-5】「じゅもん」
  magic.onclick = () => {
    openMenu(pankuzu, menu, [
      ["ホイミ"],
      ["バイキルト"],
      ["メラ"],
      ["マヒャド"],
    ]);
  };

  // !【step2-5-6】「せんれき」
  history.onclick = () => {
    openMenu(pankuzu, menu, [
      ["1997年: 生誕 (2/26)"],
      ["2019年: 秋田県立大学卒業"],
      ["2019年: 名古屋工業大学入学 (研究生)"],
      ["2020年: 名古屋大学大学院入学"],
    ]);
  };

  // !【step2-5-7】「しらべる」

  // !【step2-5-8】「さくせん」
  strategy.onclick = () => {
    openMenu(pankuzu, menu, [["ガンガン行こうぜ"]]);
  };
}
