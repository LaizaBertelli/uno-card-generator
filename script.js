
function generateColor(){
  let colors = ['red', 'yellow', 'green', 'blue'];
  const max = 3;
  const min = 0;
  const random = Math.random() * (max-min) + min;
  const intRandom = Math.round(random);
  return colors[intRandom];
}
// generateColor();

function generateNumber(){
  const max = 10;
  const min = 0;
  const random = Math.random() * (max-min) + min;
  const number = Math.round(random);

  return number;
}

function generateCard(){
  let number = generateNumber();
  let color = generateColor();
  let p = document.querySelectorAll('.number');
  for (let key of p) {
    key.innerText = number;
  }
  console.log(color, number);
  let cardColor = document.querySelector('.main-color');
  cardColor.style.backgroundColor = color.toString;
}

const button = document.querySelector('.generate');
button.addEventListener('click', generateCard);