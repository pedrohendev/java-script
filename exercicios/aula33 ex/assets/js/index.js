const paragrafos = document.querySelector(`.paragrafos`);
const ps = paragrafos.querySelectorAll(`p`);

const cor0 = getComputedStyle(document.body);
const background = cor0.backgroundColor;

for (let p of ps) {
  p.style.background = background;
  p.style.color = `#fff`
}




