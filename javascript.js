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

    
    let sum = parseInt(n);

    //input[input.length] = sum;
    input.push(sum);

    for (i = 0; i <= input.length; i++){
        SCREENTEXT.textContent = input[i];
        console.log(input[i]);
    }

    //console.log(input);
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