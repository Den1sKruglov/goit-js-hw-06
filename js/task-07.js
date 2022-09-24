const refs = {
   fontSizeControl: document.querySelector('#font-size-control'),
   carrentText: document.querySelector('#text')
};

refs.fontSizeControl.value = refs.fontSizeControl.min;

refs.fontSizeControl.addEventListener("input", onInputChange);

function onInputChange() {
   refs.carrentText.style.fontSize = this.value + 'px';
};