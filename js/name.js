/* ユーザーの名前を確認するための関数です */
function confirmName() {
  const name = localStorage.name;
  if (name === undefined) {
    inputForm();
  } else {
    document.getElementById("dialog-confirm").showModal();
    document.getElementById("user-name").textContent = name + "?";
  }
}

function inputForm() {
  const name = localStorage.name;
  const value = name === undefined ? "Guest" : name;
  document.getElementById("dialog-input").showModal();
  document.getElementById("name_field").value = value;
}

function inputName() {
  const name = document.getElementById("name_field").value;
  localStorage.name = name;
}
