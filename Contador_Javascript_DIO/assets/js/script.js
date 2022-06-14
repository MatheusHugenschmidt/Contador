var currentNumberWapper = document.getElementById("currentNumber")
var currentNumber = 0;

function increment() {
    if(currentNumber >= 0)
      currentNumberWapper.style.color = 'black'
  currentNumber = currentNumber + 1;
  currentNumberWapper.innerHTML = currentNumber
}

function decrement() {
    if(currentNumber <= 0)
      currentNumberWapper.style.color = 'red'
  currentNumber = currentNumber - 1;
  currentNumberWapper.innerHTML = currentNumber
}

