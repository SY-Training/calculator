let num1 = 0;


const numbers = document.querySelectorAll('button');
numbers.forEach((number) => {
    number.addEventListener('click', () => {
            operate(number.id);
    })
});

/*
const numbers = document.querySelectorAll('button');
numbers.forEach((number) => {
    number.addEventListener('click', () => {
        console.log(number.id)
        console.log(typeof(number.id));
    })
});
*/


const SCREEN = document.querySelector('.screen')
const SCREENTEXT = document.createElement('div')
SCREENTEXT.classList.add('screenText');
SCREENTEXT.textContent = num1;
SCREEN.appendChild(SCREENTEXT);

// The main function of the program
function operate(n){

    let sum = n;

    
    console.log(n + ", Gotcha!");
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