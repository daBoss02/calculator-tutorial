![Calculator](assets/calculator.jpg "Calculator")

## Tutorial

This is a (hopefully) short tutorial for creating a simple calculator.

## How to Return Numbers
This is a block of JavaScript that returns the numbers when each button is clicked
```JavaScript
  btns.forEach(element => onEvent('click', element, function() {
  if (element.innerText !== 'Clear') {
    inString += element.innerText;
    outString += element.innerText;
    num += element.innerText;
  } else {
    inString = '';
    outString = '';
    num = '';
  }
  valid = true;
  canOp = true;
  input.innerText = inString;
  if (outString !== '') {
    value = eval(outString);
    output.innerText = value;
  } else {
    output.innerText = '';
  }
  }))

```

## Return an operator
```JavaScript
operators.forEach(element => onEvent('click', element, function() {
  outside: if (canOp) {
    switch (element.innerText) {
      case '÷':
        inString += ' ÷ ';
        outString += ' / ';
        op = ' / ';
        break;
      case 'x':
        inString += ' x ';
        outString += ' * ';
        op = ' * ';
        break;
      case '+':
        inString += ' + ';
        outString += ' + ';
        op = ' + ';
        break;
      case '-':
        inString += ' - ';
        outString += ' - ';
        op = ' - ';
        break;
    }
    num = '';
    double = true;
    canOp = false;
  }
  input.innerText = inString;
  }))

```

## Returning the Value
  This is how I return the answer when the equals sign is clicked

```JavaScript
onEvent('click', equals, function() {
  if (valid) {
    next = op + num;
  } else {
    value = eval(value + next)
    
  }
  console.log(value);
  inString = value;
  input.innerText = inString;
  outString = inString;
  valid = false;
  output.innerText = '';
  })

```