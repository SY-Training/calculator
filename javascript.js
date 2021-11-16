let num1 = 0;
let num2 = 0;
let operand = "none";

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

    if (operand != "none"){  


        if (num1 === 0) { // Add label if anotehr operator clicked to avoid crash
            num1 = n;
            SCREENTEXT.textContent = n;
        }


        else {
            num1 += n;
            SCREENTEXT.textContent = num1;
        }

        switch (operand){
            case "add":
                num1 = 0;
                num1 += n;
                add(num2 + num1);
                break;
        }

        //parse before adding
        //console.log(num2 + num1);

    }

    else {
        if (num1 === 0) {
            num1 = n;
            SCREENTEXT.textContent = n;
        }

        else if (n === "add"){
            num2 = num1;
            num1 = 0;
            operand = "add";
        }

        else {
            num1 += n;
            SCREENTEXT.textContent = num1;
        }
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