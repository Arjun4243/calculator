let screen = document.getElementsByClassName('screen')[0];
let buttons = document.querySelectorAll('button');
let screenValue = "";

for (item of buttons) {
  item.addEventListener('click' ,  (e) => {
    let buttonText = e.target.innerHTML;

    if (buttonText === '=') {
      screenValue = evalExpression(screenValue);
      screen.value = screenValue;
    } else if (buttonText === 'AC') {
      screenValue = "";
      screen.value = screenValue;
    } 
     else if (buttonText === 'DEL') {
      // Delete the last character from the screenValue
      screenValue = screenValue.slice(0, -1);
      screen.value = screenValue;
    } else {
      screenValue += buttonText;
      screen.value = screenValue;
    }
  });
}

// Function to safely evaluate the expression
function evalExpression(expr) {
  try {
    return eval(expr);
  } catch (error) {
    return 'Error';
  }
}
