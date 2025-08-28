let playOne = true;

window.addEventListener("scroll", () => {
  // navBar
  if (window.scrollY > 50) {
    navbar.style.height = "45px";
  } else {
    navbar.style.height = "90px";
  }

  // dans cette parti je souhaite determiner le niveau de scroll pour faire apparatre mon image
  //image
  //  je vais faire un pourcentage de scroll
  // une valeur initiale que l'on va diviser pour avoir la valeur global
  let scrollValue =
    // value initial / value global  = le %
    (window.scrollY + window.innerHeight) / document.body.offsetHeight;
  console.log(scrollValue);

  if (scrollValue > 0.45) {
    imgImprovise.style.opacity = 1;
    imgImprovise.style.transform = "none";
  }

  //Popup
  // les 2 elments sont imperativement vrmt
  if (scrollValue > 0.85 && playOne) {
    popup.style.opacity = 1;
    popup.style.transform = "none";
  }
});

// even click

closeBtn.addEventListener("click", function () {
  popup.style.opacity = 0;
  popup.style.transform = "translateX(500px)";
  playOne = false;
});

// window.scrollY:
// Cela vous indique le nombre de pixels que vous avez défilés vers le bas depuis le sommet de la page web. Imaginez que vous lisez un livre, et que vous avez un marque-page qui vous montre jusqu'où vous avez lu sur la page.

// window.innerHeight:
//  Cela vous indique la hauteur (en pixels) de la partie visible de la page web, c’est-à-dire la partie de la page qui tient dans la fenêtre de votre navigateur. C’est comme regarder la taille de la fenêtre à travers laquelle vous lisez un livre..

// document.body.offsetHeight:
//  C'est la hauteur totale (en pixels) de la page web entière, y compris les parties que vous ne pouvez pas voir à moins de faire défiler vers le bas. Pensez à cela comme à la longueur totale du livre.
// je souhaite avoir une valeur entre 0 et 1
// gives you this percentage-like value that shows your scroll position relative to the total height of the webpage.

// window.scrollY / par la valeur gloabal donc document.body.offsetHeight
// pourquoi / car je souhaite avoir une valeur entre 0 et 1
// So yes, using / gives you this percentage-like value that shows your scroll position relative to the total height of the webpage.
