const divContainerElement = document.querySelector('.container');
function creatingDivElements(total) {
  for (let i = 1; i <= total; i++) {
    const divElement = document.createElement('div');
    divElement.classList.add('square');
    divElement.setAttribute(
      'style',
      'width: 30px; height: 30px; border: solid 1px black; display: flex; justify-content: center; align-items: center; font-size: 10px'
    );
    divElement.textContent = i;
    divContainerElement.append(divElement);
  }
}

creatingDivElements(256);

let numberOfSquaresPerSide = 0;

const createNewGridElement = document.querySelector('.create-new-grid');

createNewGridElement.addEventListener('click', () => {
  let userInput = prompt('How many squares per side?. Max: 256');

  while (
    userInput !== null &&
    (isNaN(Number(userInput)) ||
      !Number.isInteger(Number(userInput)) ||
      Number(userInput) > 256)
  ) {
    if (isNaN(Number(userInput))) {
      userInput = prompt('Only number');
    } else if (!Number.isInteger(Number(userInput))) {
      userInput = prompt('Only integer');
    } else if (Number(userInput) > 256) {
      userInput = prompt('Max 256');
    }
  }

  divContainerElement.innerHTML = '';
  creatingDivElements(Number(userInput));
});

const squareElements = document.querySelectorAll('.square');
squareElements.forEach((el) =>
  el.addEventListener('click', () => {
    el.classList.toggle('clicked');
  })
);

const clearElement = document.querySelector('.clear');
clearElement.addEventListener('click', clear);

function clear() {
  squareElements.forEach((el) => el.classList.remove('clicked'));
}
