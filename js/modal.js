/* モーダルウインドウ用のjsです */

/* モーダルを作成するためのクラス */
class MODAL {
  constructor(parentNodeName, title, contents, openTxt, i, isModal = true) {
    this.title = title;
    this.contents = contents;
    this.openTxt = openTxt;
    this.nodes = {
      exist: { [parentNodeName]: { tag: parentNodeName, css: [] } },
      new: {
        modalWrap: { tag: "div", css: [], parent: parentNodeName },
        trigger: {
          tag: "input",
          css: ["trigger" + (i + 1)],
          parent: "modalWrap",
        },
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
    this.genModal(isModal, i);
    return this;
  }
  __domSet() {
    const dom = new DOM(this.nodes.exist, this.nodes.new);
    dom.set();
    return dom;
  }
  /**作成したmodalの親要素を返す */
  genModal(isModal, i) {
    const trigger = this.getTag("trigger");
    const [
      modalWrap,
      _,
      modalOverlay,
      modalTrigger,
      modalContent,
      closeButton,
      modalTitle,
      modalTxT,
      openButton,
    ] = Object.keys(this.nodes.new).map((nodeName) => this.getTag(nodeName));
    if (isModal) {
      trigger.type = "checkbox";
      modalTrigger.htmlFor = "trigger" + (i + 1);
      closeButton.htmlFor = "trigger" + (i + 1);
      openButton.htmlFor = "trigger" + (i + 1);
    }
    modalOverlay.classList.add("modal_overlay");
    modalWrap.classList.add("modal_wrap");
    modalTrigger.classList.add("modal_trigger");
    modalContent.classList.add("modal_content");
    closeButton.classList.add("close_button");
    closeButton.innerText = "✖️";
    modalTitle.innerText = this.title;
    modalTxT.innerText = this.contents;
    openButton.classList.add("open_button");
    openButton.innerText = this.openTxt;
    return this.nodes.new.modalWrap;
  }
  getTag(nodeName, isNewNode = true) {
    return isNewNode
      ? this.nodes.new[nodeName].tag
      : this.nodes.exist[nodeName].tag;
  }
}
