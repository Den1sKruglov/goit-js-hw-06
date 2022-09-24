const refs = {
  getBody: document.querySelector('body'),
  getColorString: document.querySelector('.widget .color'),
  getColorBtn: document.querySelector('.widget .change-color'),
};


refs.getColorBtn.addEventListener('click', () => {
  refs.getColorString.textContent = getRandomHexColor();
  refs.getBody.style.backgroundColor = refs.getColorString.textContent;
});

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}