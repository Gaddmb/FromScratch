const randomColor = () => {
  let r = Math.floor(Math.random() * 255);
  let g = Math.floor(Math.random() * 255);
  let b = Math.floor(Math.random() * 255);

  const color = `rgb(${r}, ${g}, ${b})`;

  document.body.style.background = color;
  document.body.innerHTML = `<h2>${color}</h2>`;
};

setInterval(randomColor, 2000);
