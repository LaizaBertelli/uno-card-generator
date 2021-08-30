
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
  const max = 9;
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
  let mainColor = document.getElementById('main-color');
  mainColor.style.backgroundColor = `${color}`;
}

const button = document.querySelector('.generate');
button.addEventListener('click', generateCard);
