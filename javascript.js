let num1 = 0;
const input = [];

const numbers = document.querySelectorAll('button');
numbers.forEach((number) => {
    number.addEventListener('click', () => {
            operate(number.id);
    })
});

const SCREEN = document.querySelector('.screen')
const SCREENTEXT = document.createElement('div')
SCREENTEXT.classList.add('screenText');
SCREENTEXT.textContent = num1;
SCREEN.appendChild(SCREENTEXT);

// The main function of the program
function operate(n){

    if (num1 === 0) {
        num1 = n;
        SCREENTEXT.textContent = n;
    }

    else {
        num1 += n;

        SCREENTEXT.textContent = num1;
    }

}

function add (a, b)
{
    
    return a + b;
}

function subtract (a, b) 
{
    return a - b;
}

function multiply (a, b) 
{
  return a * b;
}

function divide (a, b) 
{
  if (b <= 0){
      return "nice try"
  }

  else {
      return a / b;
  }
}