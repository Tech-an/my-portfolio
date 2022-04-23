class MENU {
  /**
   * メニューを描画するクラス
   * @param {OBJECT} MenudrawDef : {"メニュー表示名":"onclick時に起動する関数", ...} -> {"はなす":"talk()", "どうぐ":"item()", ...}
   * @param {Boolean} isHomeMenu : 描画するメニュー画面がホームメニューかどうかを判別するための変数です
   */
  constructor(menuDrawDef, isHomeMenu) {
    this.menuDrawDef = menuDrawDef;
    this.isHomeMenu = isHomeMenu;
  }
  draw() {
    // メンバー変数の値を元にメニューを描画します
  }
}
