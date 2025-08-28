// let scrollValue = 0;

// window.addEventListener("scroll", () => {
//   window.scrollY < scrollValue
//     ? // The ternary operator (condition) ? trueValue : falseValue is used to decide what to do based on the condition
//       (navbar.style.top = "0px")
//     : (navbar.style.top = "-60px");
//   scrollValue = window.scrollY;
// });

let lastScroll = 0;

window.addEventListener("scroll", () => {
  if (window.scrollY < lastScroll) {
    navbar.style.top = 0;
  } else {
    navbar.style.top = "-60px";
  }

  lastScroll = window.scrollY;
});
