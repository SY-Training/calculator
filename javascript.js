
const numbers = document.querySelectorAll('button');
numbers.forEach((number) => {
    number.addEventListener('click', () => {
        console.log(number.id)
        console.log(typeof(number.id));
    })
});



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