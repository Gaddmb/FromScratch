//je stock cette object identifier
let item;

document.addEventListener("dragstart", (e) => {
  //stock dans ma variable qu'est ce qui a etait bouger
  item = e.target;
});

//event pour arreter le comportement par default
document.addEventListener("dragover", (e) => {
  e.preventDefault();
});

// event ou je laisse l'element
//event pour arreter le comportement par default lorsque je le fait tomber
// pour eviter que ca soit dans le body ou autre part
document.addEventListener("drop", (e) => {
  if (e.target.getAttribute("data-draggable") == "target") {
    e.preventDefault(e);
    e.target.appendChild(item);
  }
});
document.addEventListener("dragend", () => (item = null));
