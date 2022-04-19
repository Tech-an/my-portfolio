const title = {
  // 状態を定義
  titleDef: {
    titleStr: "TETSUYA SATO",
    endStr: "",
    loadMessage: "Now Loading...",
    loadBarTyle: [
      "is-primary",
      "is-success",
      "is-warning",
      "is-error",
      "is-pattern",
    ],
    loadQuestion: "go next..?",
    nodes: {
      exist: { mainNode: { tag: "main", css: [] } },
      new: {
        titleNode: { tag: "div", css: ["title_display"], parent: "main" },
        titleContent: {
          tag: "div",
          css: ["title_content"],
          parent: "titleNode",
        },
        titleTxt: { tag: "h1", css: ["title_txt"], parent: "titleContent" },
        titleQuestion: { tag: "h3", css: [], parent: "titleContent" },
        radioButton: { tag: "div", css: [], parent: "titleContent" },
        yesLabel: { tag: "label", css: ["title_radio"], parent: "radioButton" },
        yesInput: { tag: "input", css: [], parent: "yesLabel" },
        yesSpan: { tag: "span", css: [], parent: "yesLabel" },
        noLabel: { tag: "label", css: ["title_radio"], parent: "radioButton" },
        noInput: { tag: "input", css: [], parent: "noLabel" },
        noSpan: { tag: "span", css: [], parent: "noLabel" },
        titleBar: { tag: "div", css: ["title_bar"], parent: "titleNode" },
        loadMessage: { tag: "h2", css: [], parent: "titleBar" },
        loadingBar: { tag: "progress", css: [], parent: "titleBar" },
      },
    },
    dom: null,
  },
  // 以下、処理を定義

  // ロード画面の動きを制御
  load(loadTime_ms = 8000) {
    /** ロード画面全体の処理を制御します。
     */
    this.titleDef.dom = new DOM(
      this.titleDef.nodes.exist,
      this.titleDef.nodes.new
    );
    this.titleDef.dom.set();
    this.loadTitle(loadTime_ms / 3);
    this.loadBar(loadTime_ms);
  },
  loadTitle(loadTime_ms) {
    // const titleContent = this.getTag("titleContent");
    const titleTxt = this.getTag("titleTxt");
    const titleArr = Array.from(this.titleDef.titleStr + this.titleDef.endStr);
    const id = setInterval(() => {
      titleTxt.textContent += titleArr.shift();
      if (titleArr.length === 0) clearInterval(id);
    }, loadTime_ms / titleArr.length);
  },
  loadBar(loadTime_ms, divisionNum = 1000) {
    this.loadMesseage();
    const loadingBar = this.getTag("loadingBar");
    const loadingBarType =
      this.titleDef.loadBarTyle[
        Math.floor(Math.random() * this.titleDef.loadBarTyle.length)
      ];
    loadingBar.classList.add("nes-progress", loadingBarType);
    loadingBar.max = 100;
    loadingBar.value = 0;
    const id = setInterval(() => {
      loadingBar.value += 1;
      // divisionNum / (loadTime_ms * (Math.random() * (2 - 0.2) + 0.2));
      if (loadingBar.value === 100) {
        clearInterval(id);
        this.loadEnd();
      }
    }, loadTime_ms / divisionNum);
  },
  loadMesseage() {
    const loadMessage = this.getTag("loadMessage");
    loadMessage.textContent = this.titleDef.loadMessage;
  },
  getTag(nodeName, isNewNode = true) {
    return isNewNode
      ? this.titleDef.nodes.new[nodeName].tag
      : this.titleDef.nodes.exist[nodeName].tag;
  },
  loadEnd() {
    this.question();
    this.radioButton();
  },
  question() {
    const questionTxt = this.getTag("titleQuestion");
    questionTxt.textContent = this.titleDef.loadQuestion;
  },
  radioButton() {
    //   返り値でradiobuttonのyesをそれぞれ返す
    const yesInput = this.getTag("yesInput");
    yesInput.type = "radio";
    yesInput.classList.add("nes-radio", "is-dark");
    yesInput.name = "answer-dark";
    yesInput.setAttribute("onchange", "screenTransition()");

    const yesSpan = this.getTag("yesSpan");
    yesSpan.textContent = "Yes";

    const noInput = this.getTag("noInput");
    noInput.type = "radio";
    noInput.classList.add("nes-radio", "is-dark");
    noInput.name = "answer-dark";
    noInput.checked = true;

    const noSpan = this.getTag("noSpan");
    noSpan.textContent = "No";
  },
  titleEnd() {
    this.titleDef.dom.delete();
    // state++; //global
  },
};

// イベントハンドラ用
function screenTransition() {
  title.titleEnd();
  portfolio.home();
}

/* ロード画面 - 終了 */

/* ロード画面 -> ポートフォリオ画面 への遷移時に、main/titleタグを削除する */

/* ここからportfolio.jsを実行するようにする */
