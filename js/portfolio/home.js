function home() {
  const main = document.getElementsByTagName("main")[0];

  // step0-1. アバターの表情を一定時間間隔で変化させる関数を読み込む
  laugh();

  // step0-2. ふわっと表示するアニメーションを加える
  const isFirstLoad = main.id === "load";
  animation(isFirstLoad);

  // step1. <main></main>を空にする
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
  const myWay = document.createElement("div");
  const skill = document.createElement("div");
  const license = document.createElement("div");
  const organization = document.createElement("div");
  const todo = document.createElement("div");
  const bucket = document.createElement("div");
  const memory = document.createElement("div");
  const menuItems = [
    talk,
    myWay,
    skill,
    license,
    organization,
    todo,
    bucket,
    memory,
  ];
  /* avaterFrameの子要素 */
  const chat = document.createElement("div");
  /* chatの子要素 */
  const chatTitle = document.createElement("p");
  const chatContent = document.createElement("p");

  // !【step2-2】DOMツリーに追加する
  main.append(menuFrame, avaterFrame);
  menuFrame.append(pankuzu, menu);
  menu.append(talk, myWay, skill, license, organization, todo, bucket, memory);
  avaterFrame.append(chat);
  chat.append(chatTitle, chatContent);

  // !【step2-3】必要なclassやidを付与する
  /* mainの子要素 */
  menuFrame.id = "menu_frame";
  avaterFrame.id = "avater_frame";
  /* menuFrameの子要素 */
  pankuzu.id = "pankuzu";
  pankuzu.classList.add("from-left", "nes-pointer");
  menu.id = "menu";
  /* menuの子要素 */
  [talk, myWay, skill, license, organization, todo, bucket, memory].forEach(
    (element) => {
      element.id = "menu_item_default";
      element.classList.add("from-left", "nes-pointer", "menu_item");
    }
  );
  /* avaterFrameの子要素 */
  chat.id = "chat";
  chat.classList.add("nes-container", "is-dark", "with-title");
  /* chatの子要素 */
  chatTitle.className = "title";
  chatContent.id = "chat_content";

  // !【step2-4】contextを付与する
  /* パンくずリスト */
  pankuzu.textContent = "メニュー";
  /* メニュー画面 */
  const menusContent = [
    "はなす",
    "道のり",
    "スキル・経験",
    "資格・実績",
    "所属組織",
    "ToDo List",
    "Bucket List",
    "思い出",
  ];
  menuItems.forEach((element, i) => {
    element.textContent = menusContent[i];
  });
  chatTitle.textContent = "TETSUYA";
  /* チャット画面 */
  if (isFirstLoad) {
    chatContent.textContent = greetChat(chatContent);
  } else {
    chatContent.textContent = randomChat(chatContent, talk);
  }

  // !【step2-5】onclickに関数を付与する
  // !【step2-5-1】「はなす」
  /* 「はなす」を押すと、ランダムな内容をアバターが話してくれる */
  talk.onclick = () => {
    randomChat(chatContent, talk);
  };

  // !【step2-5-2】「道のり」
  /* 「道のり」を押すと、メニュー画面が書き変わる */
  myWay.onclick = () => {
    openMenu("myWay", pankuzu, menu, [
      ["【0歳】静岡で生誕"],
      ["【2歳】秋田に引っ越し"],
      ["【2~18歳】有浦小→東中→国際情報学院高等学校"],
      ["【18歳】秋田県立大学-システム科学技術学部へ"],
      ["【22歳】名古屋工業大学へ(研究生)"],
      ["【23歳-】名古屋大学大学院-情報学研究科へ"],
      ["【24歳】長期インターン(AKconsulting株式会社)"],
      ["【25歳(NOW!)】ラストモラトリアム！"],
    ]);
  };

  // !【step2-5-3】「スキル・経験」
  skill.onclick = () => {
    openMenu("skill", pankuzu, menu, [
      ["【HTML/CSS/JavaScript】大学でTAの経験有り(継続)", null, null],
      ["【C言語】大学でTAの経験有り(継続)", null, null],
      ["【python】長期インターンで業務経験有り", null, null],
      ["【GoogleAppsScript】長期インターンで業務経験有り", null, null],
      [
        "【タイピング】寿司打で1万円お得にできます(6.4回/s)",
        "sushida.png",
        "挑戦待ってます!笑",
      ],
      ["【未習得】TypeScript, React, Vue, Flask, Docker, AWS", null, null],
    ]);
  };

  // !【step2-5-4】「資格・実績」
  license.onclick = () => {
    openMenu("license", pankuzu, menu, [
      ["【学会発表1】平成30年電気学会全国大会(2019.3)", null, null],
      ["【学会発表2】電気学会C部門大会(沖縄)2019年09月", null, null],
      ["【業務経験】AKconsulting株式会社('21/5-'22/3)", null, null],
      ["【資格1】応用情報技術者試験", null, null],
      ["【資格2】G検定", null, null],
      ["【資格3】TOEIC-720点", null, null],
      ["【資格-挑戦中】E資格", null, null],
      ["【資格-そのうち..】プロマネ, 中小企業診断士", null, null],
    ]);
  };

  // !【step2-5-5】「所属組織」
  organization.onclick = () => {
    openMenu("organization", pankuzu, menu, [
      [
        "【'20-】チャリティーサンタ-名古屋支部(副代表)",
        "santa.png",
        "チャリティーサンタはクリスマスイブにサンタの恰好をして子どもたちの家にプレゼントを届けに行くボランティアだよ！",
      ],
      [
        "【'20-】名古屋大学 情報学研究科 複雑系科学専攻",
        "nagoyaUniversity.jpg",
        "名古屋大学は広すぎます（笑）テーマパークかって思うくらい広いので、一度来てみてください（笑）",
      ],
      [
        "【'22-】GeekSalon(受講生-14期生)",
        "webex.png",
        "大学生限定プログラミング学習コミュニティ『Geek Salon』! エンジニア仲間と出会えて楽しいです！",
      ],
      ["【'22-】AVILEN-全人類が分かるE資格コース(受講生)", null, null],
    ]);
  };

  // !【step2-5-6】「今やってること」
  todo.onclick = () => {
    openMenu("todo", pankuzu, menu, [
      ["【英会話】英会話のハードルを下げる"],
      ["【海外】学生期間中に海外旅行に1回は行く"],
      ["【筋肉】いわゆるムキムキになる"],
      ["【E資格】講座を修了して資格を獲得する"],
      ["【Geek】成果物を作り出せるようになる"],
      ["【研究】楽しく修論を執筆して卒業する"],
      ["【サンタ】メンバーが主体的に輝ける場を作る"],
      ["【ビジネス】投資・副業・個人事業の経験を持つ"],
    ]);
  };

  // !【step2-5-7】「死ぬまでにやりたいこと」
  bucket.onclick = () => {
    openMenu("bucket", pankuzu, menu, [
      ["【1】タワーマンションに住む"],
      ["【2】年齢 + 1ヵ国 の旅行経験を持つ"],
      ["【3】海外に住みながら働く"],
      ["【4】トライアスロンに参加する"],
      ["【5】会社を起業・経営する"],
      ["【6】親孝行をする"],
      ["【7】就職先で30までに年収1,000万を達成する"],
      ["【8】めっちゃ良い車に乗る"],
    ]);
  };
  // !【step2-5-8】「思い出」
  memory.onclick = () => {
    openMenu("memory", pankuzu, menu, [["coming soon...笑"]]);
  };
}
