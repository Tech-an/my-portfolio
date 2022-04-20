const portfolio = {
  portfolioDef: {
    menuTxts: [
      "はなす",
      "どうぐ",
      "そうび",
      "つよさ",
      "じゅもん",
      "せんれき",
      "しらべる",
      "さくせん",
    ],
    menuContents: {
      menu1: null,
      menu2: {},
      menu3: {},
      menu4: {},
      menu5: {},
      menu6: {},
      menu7: {},
      menu8: {},
    },
    avaterImgs: { random: ["デフォルトてつや.png"] },
    talkContets: { random: ["おはよう!", "こんにちは！", "こんばんは！"] },
    nodes: {
      exist: { mainNode: { tag: "main", css: [] } },
      new: {
        home: {
          tag: "portfolio_home",
          css: ["portfolio_home"],
          parent: "main",
        },
        menuNode: { tag: "div", css: ["menu_frame"], parent: "portfolio_home" },
        menuFlex: { tag: "div", css: ["menu_flex"], parent: "menuNode" },
        menu1: { tag: "div", css: ["menu1"], parent: "menuFlex" },
        menu2: { tag: "div", css: ["menu2"], parent: "menuFlex" },
        menu3: { tag: "div", css: ["menu3"], parent: "menuFlex" },
        menu4: { tag: "div", css: ["menu4"], parent: "menuFlex" },
        menu5: { tag: "div", css: ["menu5"], parent: "menuFlex" },
        menu6: { tag: "div", css: ["menu6"], parent: "menuFlex" },
        menu7: { tag: "div", css: ["menu7"], parent: "menuFlex" },
        menu8: { tag: "div", css: ["menu8"], parent: "menuFlex" },
        displayNode: {
          tag: "div",
          css: ["display_frame"],
          parent: "portfolio_home",
        },
        avaterNode: {
          tag: "div",
          css: ["avater_frame"],
          parent: "displayNode",
        },
        avaterImg: { tag: "img", css: [], parent: "avaterNode" },

        talkNode: { tag: "div", css: ["talk_frame"], parent: "displayNode" },
        talkerName: { tag: "p", css: [], parent: "talkNode" },
        talkContent: { tag: "p", css: [], parent: "talkNode" },
      },
    },
    dom: null,
    isTalk: true,
  },
  home() {
    this.portfolioDef.dom = new DOM(
      this.portfolioDef.nodes.exist,
      this.portfolioDef.nodes.new
    );
    this.portfolioDef.dom.set();
    this.menu();
    this.avater();
    this.talk();
  },
  menu() {
    Array(8)
      .fill(0)
      .map((v, i) => {
        return this.getTag(`menu${i + 1}`);
      })
      .forEach((menuNode, i) => {
        const title = this.portfolioDef.menuTxts[i];
        switch (menuNode.id) {
          case "menu1":
            menuNode.setAttribute("onclick", "portfolio.randomTalk()");
            new MODAL(menuNode.id, title, "contents", title, i, false);
            break;
          case "menu7":
            new MODAL(menuNode.id, title, "contents", title, i, false);
            break;
          default:
            new MODAL(menuNode.id, title, "contents", title, i);
            break;
        }
      });
  },
  avater() {
    // const avaterImg = this.getTag("avaterImg");
    // avaterImg.src = "img/" + this.portfolioDef.avaterImgs.random[0];
    // avaterImg.style.height = "50%";
    // avaterImg.style.width = "50%";
  },
  talk() {
    const [talkNode, talkerName, talkContent] = [
      "talkNode",
      "talkerName",
      "talkContent",
    ].map((str) => this.getTag(str));
    talkNode.classList.add("nes-container", "is-dark", "with-title");
    talkerName.classList.add("title");
    talkerName.innerText = "てっちゃん";
    this.randomTalk(talkContent);
  },
  randomTalk(talkContent = this.getTag("talkContent")) {
    // const talkNode = this.getTag("talkNode");
    // talkNode.textContet = "";
    talkContent.innerText = "";
    const randomTalk = this.portfolioDef.talkContets.random;
    const talkTxt =
      randomTalk[parseInt(Math.random() * (randomTalk.length - 0) + 0)] + "pya";
    this.pcChat(talkContent, talkTxt, 500);
  },
  pcChat(element, txt, delay = 500) {
    const titleArr = Array.from(txt);
    const id = setInterval(() => {
      element.innerText += titleArr.shift();
      if (titleArr.length === 0) clearInterval(id);
    }, delay / titleArr.length);
  },
  getTag(nodeName, isNewNode = true) {
    return isNewNode
      ? this.portfolioDef.nodes.new[nodeName].tag
      : this.portfolioDef.nodes.exist[nodeName].tag;
  },
};
