const portfolio = {
  portfolioDef: {
    menuContents: [
      "はなす",
      "どうぐ",
      "そうび",
      "つよさ",
      "じゅもん",
      "せんれき",
      "しらべる",
      "さくせん",
    ],
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
        menu1: { tag: "div", css: ["menu_item", "menu1"], parent: "menuNode" },
        menu2: { tag: "div", css: ["menu_item", "menu2"], parent: "menuNode" },
        menu3: { tag: "div", css: ["menu_item", "menu3"], parent: "menuNode" },
        menu4: { tag: "div", css: ["menu_item", "menu4"], parent: "menuNode" },
        menu5: { tag: "div", css: ["menu_item", "menu5"], parent: "menuNode" },
        menu6: { tag: "div", css: ["menu_item", "menu6"], parent: "menuNode" },
        menu7: { tag: "div", css: ["menu_item", "menu7"], parent: "menuNode" },
        menu8: { tag: "div", css: ["menu_item", "menu8"], parent: "menuNode" },

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

        talkNode: { tag: "div", css: [], parent: "displayNode" },
        talkerName: { tag: "p", css: [], parent: "talkNode" },
        talkContent: { tag: "p", css: [], parent: "talkNode" },
      },
    },
    dom: null,
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
    const menus = Array(8)
      .fill(0)
      .map((v, i) => {
        return this.getTag(`menu${i + 1}`);
      });
    menus.forEach((menuNode, i) => {
      const title = this.portfolioDef.menuContents[i];
      new MODAL("menu" + (i + 1), title, "contents", title);
      // menu.innerText = this.portfolioDef.menuContents[i];
      // menuNode.classList.add("is-dark");
    });
  },
  avater() {
    const avaterImg = this.getTag("avaterImg");
    avaterImg.src = "img/" + this.portfolioDef.avaterImgs.random[0];
    avaterImg.style.height = "50%";
    avaterImg.style.width = "50%";
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
    const randomTalk = this.portfolioDef.talkContets.random;
    const talkTxt =
      randomTalk[parseInt(Math.random() * (randomTalk.length - 0) + 0)] + "pya";
    this.pcChat(talkContent, talkTxt, 500);
  },
  pcChat(element, txt, delay) {
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
