let num1 = 0;
let num2 = 0;
let sum = 0;
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

    /*
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
                sum = add(num2, num1Int);
                console.log(sum + " in switch." + "num1= " + num1Int + " num2= " +num2 );
                num1 = 0;
                num1 = 0;
                SCREENTEXT.textContent = sum;
                operand = "none";

                break;
        }

        //parse before adding
        //console.log(num2 + num1);

    } */

   // else {
    if (num1 === 0) {
        num1 = n;
        SCREENTEXT.textContent = n;
    }

    else if (n === "add"){
        let fin = parseInt(num1);        
        sum = add(num2, fin);
        num2 = sum;
        num1 = 0;
        console.log(sum);
        SCREENTEXT.textContent = sum;
        // highlight operand colour.
        // BUG: when hitting '+' twice i get NaN which breaks the function.         
    }

    else if (n === "subtract"){
        let fin = parseInt(num1);        
        sum = subtract(fin, num2);
        num2 = sum;
        num1 = 0;
        console.log(sum);
        SCREENTEXT.textContent = sum;
        // highlight operand colour.
        // BUG: when hitting '+' twice i get NaN which breaks the function.         
    }

    else {
        num1 += n;
        console.log(num1);        
        console.log(num2 + " is type " + typeof(num2));
        SCREENTEXT.textContent = num1;
        }
    //}

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