const refs = {
   counterShell: document.querySelector('#counter'),
   decrBtn: document.querySelector('[data-action="decrement"]'),
   incrBtn: document.querySelector('[data-action="increment"]'),
   valueNumber: document.querySelector('#value'),
};

let counterValue = 0;

refs.decrBtn.addEventListener('click', () => {
   counterValue -= 1;
   refs.valueNumber.textContent = counterValue;
});

refs.incrBtn.addEventListener('click', () => {
   counterValue += 1;
   refs.valueNumber.textContent = counterValue;
});