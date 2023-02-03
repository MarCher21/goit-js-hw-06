function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const changeColorButtonRef = document.querySelector('.change-color');
console.log(changeColorButtonRef);

const spanColorValue = document.querySelector('.color');
console.log(spanColorValue);

const bodyBackgroundColor = document.querySelector('body');
console.log(bodyBackgroundColor);

changeColorButtonRef.addEventListener('click', backgroundColorChange);

function backgroundColorChange() {
  bodyBackgroundColor.style.backgroundColor = getRandomHexColor();

  const backgroundColorValue = bodyBackgroundColor.style.backgroundColor;
  console.log(backgroundColorValue);

  spanColorValue.innerHTML = backgroundColorValue;
}