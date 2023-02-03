const inputEl = document.querySelector('#validation-input');


const checkNumbers = () => {
    if (inputEl.value.length === Number(inputEl.dataset.length)) {
        inputEl.classList.remove(`invalid`);
        inputEl.classList.add(`valid`);
        return;
    } else {
        inputEl.classList.remove(`valid`);
        inputEl.classList.add(`invalid`);
    };
}

inputEl.addEventListener('blur', checkNumbers);


