let num1 = 0;
let num2 = 0;
let firstOperator = null;
let secondOperator = null;
let result = 0;

const numbers = document.querySelectorAll('button');
numbers.forEach((number) => {
    number.addEventListener('click', () => {
            operate(number.id);
    })
});

const SCREEN = document.querySelector('.screen')
const SCREENTEXT = document.createElement('div')
SCREENTEXT.classList.add('screenText');
SCREEN.appendChild(SCREENTEXT);

updateDisplay();

// The main function of the program
function operate(n){

    if (firstOperator === null && secondOperator === null) { // 1st click
        num1 += n;
        let sum = parseInt(num1);
        updateDisplay(sum);
        console.log("sum is " + sum + " and type " + typeof(sum));
        
        if (n === "add" || n === "divide" || n === "subtract" || n === "multiply"){
            result = sum;
            updateDisplay(result);
            sum = 0;
            firstOperator = n;
            console.log(firstOperator);
        }
    }


}

function updateDisplay(n) {
    SCREENTEXT.textContent = n;
    if (!n){
        SCREENTEXT.textContent = 0;
    }
}

function add (a, b)
{
    console.log(a + b);
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