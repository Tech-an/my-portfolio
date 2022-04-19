class DOM {
  /**
   * コンストラクタで指定されたオブジェクト内のノードの定義/CSSのスタイル適応/DOMツリーへの追加を一括処理します。
   *
   * @param {OBJECT} existNodes:HTML(DOM)で既に定義されているノードのオブジェクト, 例：{nodeName: {tag: "div", css:[], parent:"main"}}
   * @param {OBJECT} newNodes:HTML(DOM)でまだ定義されていないノードのオブジェクト
   */
  constructor(existNodes, newNodes) {
    this.main = document.getElementById("main").innerHTML;
    this.existNodes = existNodes;
    this.newNodes = newNodes;
  }
  // DOMツリーの初期構築
  set() {
    Object.entries(this.existNodes).forEach(([node, { tag, css }]) => {
      tag = document.getElementById(tag);
      this.existNodes[node].tag = tag;
      this.__setCssStyle(tag, css);
    });
    Object.entries(this.newNodes).forEach(([node, { tag, css, parent }]) => {
      tag = document.createElement(tag);
      const existedParent = document.getElementById(parent);
      parent =
        existedParent !== null ? existedParent : this.newNodes[parent].tag;
      this.newNodes[node].tag = tag;
      this.newNodes[node].parent = parent;
      this.__setCssStyle(tag, css);
      this.__changeDom(tag, parent);
    });
  }
  __setCssStyle(tag, ids) {
    ids.forEach((id) => {
      tag.setAttribute("id", id);
    });
  }
  __changeDom(tag, parent) {
    parent.appendChild(tag);
  }
  delete() {
    const main = document.getElementById("main");
    main.innerHTML = this.main;
  }
}
