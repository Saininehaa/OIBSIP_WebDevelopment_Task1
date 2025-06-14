let expression = '';
let lastAnswer = '';
const expressionDisplay = document.getElementById('expression');
const resultDisplay = document.getElementById('result');

document.querySelectorAll('.buttons button').forEach(btn => {
  btn.addEventListener('click', () => {
    const value = btn.textContent;

    if (btn.id === 'clear') {
      expression = '';
      resultDisplay.textContent = '0';
    } else if (btn.id === 'del') {
      expression = expression.slice(0, -1);
    } else if (btn.id === 'enter') {
      try {
        const sanitized = expression.replace(/√/g, 'Math.sqrt');
        const result = Function('"use strict"; return (' + sanitized + ')')();
        resultDisplay.textContent = result;
        lastAnswer = result;
        expression = '' + result;
      } catch (err) {
        resultDisplay.textContent = 'Error';
      }
    } else if (btn.id === 'ans') {
      expression += lastAnswer;
    } else if (btn.id === 'plus-minus') {
      if (expression) {
        expression = '-' + expression;
      }
    } else {
      expression += value;
    }

    expressionDisplay.textContent = expression;
  });
});
