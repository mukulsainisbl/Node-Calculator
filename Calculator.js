
let operation = process.argv[2]

let a = process.argv[3];
let b = process.argv[4];

if (operation == "sum") {
  sum(Number(a), Number(b));
}

if(operation == "sub"){
    sub(Number(a) , Number(b))
}

if(operation == "mul"){
    mult(Number(a) , Number(b))
}

if(operation  == "divide"){
    divide(Number(a) , Number(b))
}
if(operation == "sine"){
    sine(Number(a))
}

if(operation == "cosine"){
    cosine(Number(a))
}
if(operation == "tangent"){
    tangent(Number((a)))
}


function sum(a, b) {
  console.log(a + b);
}

function sub(a,b){
    console.log(a-b)
}


function mult(a,b){
    console.log(a*b)
}

function divide(a,b){
    console.log(a/b)
}

function sine(a){
    console.log(Math.sin(a))
}

function cosine(a){
    console.log(Math.cos(a))
}


function tangent(a){
    console.log(Math.tan(a))
}


// Generate Random Numbers//
const {
    randomInt,
  } = require('node:crypto');
  
  randomInt(100, (err, n) => {
    if (err) throw err;
    console.log(`Random number is ${n}`);
  });