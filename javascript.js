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

    if (n === "cancel"){
        result = 0;
        num1 = 0;
        firstOperator = null;
        secondOperator= null;
        updateDisplay();
    }

    else if (firstOperator === null && n === "equal"){
        n = "cancel";
    }

    else if (firstOperator === null && secondOperator === null) { // 1st click
        
        if (n === "add" || n === "divide" || n === "subtract" || n === "multiply"){

            let sum = parseInt(num1, 10);
            result = sum;
            updateDisplay(result);
            sum = 0;
            num1 = 0;
            firstOperator = n;
        }

        else {
            num1 += n;
            let sum = parseInt(num1, 10);            
            updateDisplay(sum);
        }
    }

    else if (n === "equal" && firstOperator != null){
        let sum = parseInt(num1);
        switch(firstOperator){
            case "add":
               result = add(sum, result);
               updateDisplay(result);
               secondOperator = null;
               sum = 0;
               num1 = 0;
               break;

            case "subtract":
                result = subtract(result, sum)
                updateDisplay(result);
                secondOperator = null;
                sum = 0;
                num1 = 0;
                break;
            
            case "multiply":
                result = multiply(result, sum);
                updateDisplay(result);
                secondOperator = null;
                sum = 0;
                num1 = 0;
                break;
            
            case "divide":
                result = divide(result, sum);
                updateDisplay(result);
                secondOperator = null;
                sum = 0;
                num1 = 0;
                break;
        }
    }

    else if (firstOperator != null && secondOperator === null){ // second click
        num1 += n;
        let sum = parseInt(num1);
        updateDisplay(sum);

        

        if (n === "add" || n === "divide" || n === "subtract" || n === "multiply"){


            secondOperator = n;
            
            console.log(secondOperator + "  " + firstOperator);

            switch(firstOperator){
                case "add":
                   result = add(sum, result)
                   console.log("in switch " + result);
                   updateDisplay(result);
                   firstOperator = secondOperator;
                   secondOperator = null;
                   sum = 0;
                   num1 = 0;
                   break;

                case "subtract":
                    result = subtract(result, sum)
                    console.log("in switch " + result);
                    updateDisplay(result);
                    firstOperator = secondOperator;
                    secondOperator = null;
                    sum = 0;
                    num1 = 0;
                    break;
                
                case "multiply":
                    result = multiply(result, sum);
                    console.log("in switch " + result);
                    updateDisplay(result);
                    firstOperator = secondOperator;
                    secondOperator = null;
                    sum = 0;
                    num1 = 0;
                    break;
                
                case "divide":
                    result = divide(result, sum);
                    console.log("in switch " + result);
                    updateDisplay(result);
                    firstOperator = secondOperator;
                    secondOperator = null;
                    sum = 0;
                    num1 = 0;
                    break;
            }
            

        }

    }



}

function updateDisplay(n) {      

    if (!n){
        SCREENTEXT.textContent = 0;

        //Round to 12 places. 
    }
    
    let b = n.toString()
    SCREENTEXT.textContent = b;
    console.log(b);

    if (b.length > 11){
        SCREENTEXT.textContent = b.substring(0, 11);
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