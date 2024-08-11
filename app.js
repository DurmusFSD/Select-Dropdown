let selectField = document.getElementById("selectField");
let selectText = document.getElementById("selectText");
let list = document.getElementById("list");
let arrowIcon = document.getElementById("arrowIcon");
let options = document.getElementsByClassName("options");

// console.log(
//   selectField,
//   "===",
//   selectText,
//   "===",
//   list,
//   "===",
//   arrowIcon,
//   "===",
//   options,
//   "==="
// );

selectField.addEventListener("click", () => {
  list.classList.toggle("hide");
  arrowIcon.classList.toggle("rotate");
});
for (option of options) {
  option.addEventListener("click", (e) => {
    (selectText.innerHTML = e.target.innerText), list.classList.toggle("hide");
    arrowIcon.classList.toggle("rotate");
  });
}
