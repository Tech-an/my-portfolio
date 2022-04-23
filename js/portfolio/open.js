function openMenu(menuName, pankuzu, menu, menuItemDef) {
  /**
   * menuItemDef : [["textContent", "oncilckの対象となる関数"]]
   * 例：["サンタクロースの衣装", null],
    ["学生証", null],
    ["会員証", null],
    ["内定", null],
    ["資格", null],
    ["本", null],
    ["パソコン", null],
    ["コーヒーメーカー", null],
    ["オロポ", null],
   */
  pankuzu.textContent = "メニューにもどる";
  pankuzu.onclick = () => {
    home();
  };
  // step1. menuFrameがリセットされる
  menu.innerHTML = "";
  // step2. idにmenu_expansionを付与する
  menu.id = "menu_expansion";
  [...menuItemDef].forEach(([value, img = null, text = null]) => {
    // step3. 必要な要素を作成する(pタグでいいかな?)
    const p = document.createElement("p");
    // step4. 作成した要素をDOMに加える
    menu.appendChild(p);
    // step5. 作成した要素にidを付与する（ここで付与するidもexpansion時のものに変更する）
    p.id = "menu_item";
    // step6.作成した要素に値を付与する;
    p.textContent = value;
    // step7. 作成した要素にonclick時のイベントを付与する
    if (img !== null && text !== null)
      modal(p, value, `${menuName}/${img}`, text);
  });
}
