class PORTFOLIO {
  /**
   * ポートフォリオ画面の menu, avater, chat 要素を制御する
   *
   */
  constructor() {
    this.portfolioDef = {
      menu: {
        /**「はなす」と「しらべる」はメニュー画面を変更しないため定義していない */
        homeMenu: [
          ["はなす", talk()],
          ["どうぐ", item()],
          ["そうび", equip()],
          ["つよさ", states()],
          ["じゅもん", magic()],
          ["せんれき", history()],
          ["しらべる", serach()],
          ["さくせん", strategy()],
        ],
        item: [
          "サンタクロースの衣装",
          "学生証",
          "会員証",
          "内定",
          "資格",
          "本",
          "パソコン",
          "コーヒーメーカー",
          "オロポ",
        ],
        equip: [
          "みぎて：本",
          "ひだりて：パソコン",
          "アタマ：なし",
          "からだ：ポールスミスの服",
          "アクセ１：ポールスミスの靴",
          "アクセ２：ポールスミスの財布",
        ],
        states: ["レベル：", "長所：", "短所："],
        magic: ["メラ"],
        history: [
          "...",
          "名古屋工業大学",
          "名古屋大学",
          "名古屋大学TA",
          "大同大学TA",
          "AKconsulting株式会社インターン",
        ],
        strategy: ["ガンガン行こうぜ", "人生楽しんだもん勝ち"],
      },
      avater: {
        defalut: "デフォルトてつや.png",
        chat: "口開きてつや.png",
        smile: "笑顔てつや.png",
      },
      chat: {
        random: ["おはよう!", "こんにちは！", "こんばんは！"],
      },
      //TODO : 特定のフォルダ内のファイルを全取得できるようにしたい -> backgroundは状態として保持しなくても良いようにする
      background: ["栄サンシャイン.png", "ローマ.png", "名古屋城.png"],
    };
    this.drawDefault();
    /**
     * 画面要素を作成する
     * 　menu要素を作成する（MENUクラスのインスタンス化?）
     * 　avater要素を作成する
     * 　chat要素を作成する
     * cssのスタイルを適応する
     * 　flexなど
     *
     * (画面に表示させる文字, 必要があればonclick時に起動する関数) → MENU → (画面を描画)
     */
  }
  drawDefault() {}
  drawMenu() {}
  /**  drawMenuItem() {}
  drawMenuEquip() {}
  drawMenuStates() {}
  drawMenuMagic() {}
  drawMenuHistory() {}
  drawMenuStrategy() {} */
  drawAvater() {}
  drawChat() {}
}

// const portfolio = {
//   portfolioDef: {
//     menuTxts: [
//       "はなす",
//       "どうぐ",
//       "そうび",
//       "つよさ",
//       "じゅもん",
//       "せんれき",
//       "しらべる",
//       "さくせん",
//     ],
//     avaterImgs: { random: ["デフォルトてつや.png"] },
//     talkContets: { random: ["おはよう!", "こんにちは！", "こんばんは！"] },
//     nodes: {
//       exist: { mainNode: { tag: "main", css: [] } },
//       new: {
//         home: {
//           tag: "portfolio_home",
//           css: ["portfolio_home"],
//           parent: "main",
//         },
//         menuNode: { tag: "div", css: ["menu_frame"], parent: "portfolio_home" },
//         menuFlex: { tag: "div", css: ["menu_flex"], parent: "menuNode" },
//         menu1: { tag: "div", css: ["menu1"], parent: "menuFlex" },
//         menu2: { tag: "div", css: ["menu2"], parent: "menuFlex" },
//         menu3: { tag: "div", css: ["menu3"], parent: "menuFlex" },
//         menu4: { tag: "div", css: ["menu4"], parent: "menuFlex" },
//         menu5: { tag: "div", css: ["menu5"], parent: "menuFlex" },
//         menu6: { tag: "div", css: ["menu6"], parent: "menuFlex" },
//         menu7: { tag: "div", css: ["menu7"], parent: "menuFlex" },
//         menu8: { tag: "div", css: ["menu8"], parent: "menuFlex" },
//         displayNode: {
//           tag: "div",
//           css: ["display_frame"],
//           parent: "portfolio_home",
//         },
//         avaterNode: {
//           tag: "div",
//           css: ["avater_frame"],
//           parent: "displayNode",
//         },
//         avaterImg: { tag: "img", css: [], parent: "avaterNode" },

//         talkNode: { tag: "div", css: ["talk_frame"], parent: "displayNode" },
//         talkerName: { tag: "p", css: [], parent: "talkNode" },
//         talkContent: { tag: "p", css: [], parent: "talkNode" },
//       },
//     },
//     dom: null,
//     isTalk: true,
//   },
//   home() {
//     this.portfolioDef.dom = new DOM(
//       this.portfolioDef.nodes.exist,
//       this.portfolioDef.nodes.new
//     );
//     this.portfolioDef.dom.set();
//     this.menu();
//     this.avater();
//     this.talk();
//   },
//   menu() {
//     Array(8)
//       .fill(0)
//       .map((v, i) => {
//         return this.getTag(`menu${i + 1}`);
//       })
//       .forEach((menuNode, i) => {
//         const title = this.portfolioDef.menuTxts[i];
//         switch (menuNode.id) {
//           case "menu1":
//             menuNode.setAttribute("onclick", "portfolio.randomTalk()");
//             new MODAL(menuNode.id, title, "contents", title, i, false);
//             break;
//           case "menu7":
//             new MODAL(menuNode.id, title, "contents", title, i, false);
//             break;
//           default:
//             new MODAL(menuNode.id, title, "contents", title, i);
//             break;
//         }
//       });
//   },
//   avater() {
//     // const avaterImg = this.getTag("avaterImg");
//     // avaterImg.src = "img/" + this.portfolioDef.avaterImgs.random[0];
//     // avaterImg.style.height = "50%";
//     // avaterImg.style.width = "50%";
//   },
//   talk() {
//     const [talkNode, talkerName, talkContent] = [
//       "talkNode",
//       "talkerName",
//       "talkContent",
//     ].map((str) => this.getTag(str));
//     talkNode.classList.add("nes-container", "is-dark", "with-title");
//     talkerName.classList.add("title");
//     talkerName.innerText = "てっちゃん";
//     this.randomTalk(talkContent);
//   },
//   randomTalk(talkContent = this.getTag("talkContent")) {
//     // const talkNode = this.getTag("talkNode");
//     // talkNode.textContet = "";
//     talkContent.innerText = "";
//     const randomTalk = this.portfolioDef.talkContets.random;
//     const talkTxt =
//       randomTalk[parseInt(Math.random() * (randomTalk.length - 0) + 0)] + "pya";
//     this.pcChat(talkContent, talkTxt, 500);
//   },
//   pcChat(element, txt, delay = 500) {
//     const titleArr = Array.from(txt);
//     const id = setInterval(() => {
//       element.innerText += titleArr.shift();
//       if (titleArr.length === 0) clearInterval(id);
//     }, delay / titleArr.length);
//   },
//   getTag(nodeName, isNewNode = true) {
//     return isNewNode
//       ? this.portfolioDef.nodes.new[nodeName].tag
//       : this.portfolioDef.nodes.exist[nodeName].tag;
//   },
// };
