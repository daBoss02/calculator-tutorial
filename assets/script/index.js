'use-strict';

/*
  Seth Vandenbos

  JavaScript Basics
  Avatar changes
*/

// Utility Functions
function onEvent(event, selector, callback) {
  return selector.addEventListener(event, callback);
}

function select(selector, parent = document) {
  return parent.querySelector(selector);
}

function selectAll(selector, parent = document) {
  return parent.querySelectorAll(selector);
}

function sleep(duration) {
  return new Promise(resolve => {
    setTimeout(resolve, duration);
  })
}

const input = select('.input');
const output = select('.output');
const btns = selectAll('.btn');
const operators = selectAll('.operator');
const equals = select('.equals')
let inString = '';
let outString = '';
let canOp = false;
let value = '';
let op = '';
let num = '';
let next = '';
let valid = true;
let double = false;


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