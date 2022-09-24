const getInput = document.querySelector('input');


getInput.addEventListener('blur', inputChangeValidColor);

function inputChangeValidColor(event) {

   if (event.currentTarget.value.length === Number(getInput.dataset.length)) {
      return getInput.classList.add('valid') || getInput.classList.remove('invalid');
   }
   return getInput.classList.add('invalid') || getInput.classList.remove('valid');
};