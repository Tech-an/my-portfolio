/* モーダルウインドウ用のjsです */

/* モーダルを作成するためのクラス */
class MODAL {
  constructor(parentNodeName, title, contents, openTxt) {
    console.log(parentNodeName, title, contents, openTxt);
    this.title = title;
    this.contents = contents;
    this.openTxt = openTxt;
    this.nodes = {
      exist: { [parentNodeName]: { tag: parentNodeName, css: [] } },
      new: {
        modalWrap: { tag: "div", css: [], parent: parentNodeName },
        trigger: { tag: "input", css: ["trigger"], parent: "modalWrap" },
        modalOverlay: { tag: "div", css: [], parent: "modalWrap" },
        modalTrigger: { tag: "label", css: [], parent: "modalOverlay" },
        modalContent: { tag: "div", css: [], parent: "modalOverlay" },
        closeButton: { tag: "label", css: [], parent: "modalContent" },
        modalTitle: { tag: "h2", css: [], parent: "modalContent" },
        modalTxT: { tag: "p", css: [], parent: "modalContent" },
        openButton: { tag: "label", css: [], parent: parentNodeName },
      },
    };
    this.dom = this.__domSet();
    this.genModal();
  }
  __domSet() {
    const dom = new DOM(this.nodes.exist, this.nodes.new);
    dom.set();
    return dom;
  }
  /**作成したmodalの親要素を返す */
  genModal() {
    const [
      modalWrap,
      trigger,
      modalOverlay,
      modalTrigger,
      modalContent,
      closeButton,
      modalTitle,
      modalTxT,
      openButton,
    ] = Object.keys(this.nodes.new).map((nodeName) => this.getTag(nodeName));
    modalWrap.classList.add("modal_wrap");
    trigger.type = "checkbox";
    modalOverlay.classList.add("modal_overlay");
    modalTrigger.classList.add("modal_trigger");
    modalTrigger.htmlFor = "trigger";
    modalContent.classList.add("modal_content");
    closeButton.classList.add("close_button");
    closeButton.htmlFor = "trigger";
    closeButton.innerText = "✖️";
    modalTitle.innerText = this.title;
    modalTxT.innerText = this.contents;
    openButton.classList.add("open_button");
    openButton.innerText = this.openTxt;
    openButton.htmlFor = "trigger";
    return this.nodes.new.modalWrap;
  }
  getTag(nodeName, isNewNode = true) {
    return isNewNode
      ? this.nodes.new[nodeName].tag
      : this.nodes.exist[nodeName].tag;
  }
}
