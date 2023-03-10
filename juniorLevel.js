// Q6: Implement enqueue and dequeue using only two stacks
// Enqueue means to add an element, dequeue to remove an element.

const inputStack = [];
const outputStack = [];

// For enqueue, just push the item into the first stack
const enqueue = (item) => {
  inputStack.push(item)
  console.log(inputStack)
}

const dequeue = () => {
// Reverse the stack such that the first element of the output stack is the
// last element of the input stack. After that, pop the top of the output to
// get the first element that was ever pushed into the input stack
  if(outputStack.length === 0) {
    while(inputStack.length > 0){
      const element = inputStack.pop()
      outputStack.push(element)
    }
  }
  console.log(outputStack.pop())
}

enqueue(20)
enqueue(63)
enqueue(8)
dequeue()
dequeue()

// Q7: Make this work
// Problem
// duplicate([1, 2, 3, 4, 5]); // [1,2,3,4,5,1,2,3,4,5]

const duplicate = (element) => {
  return console.log(element.concat(element))
}

 duplicate([1, 2, 3, 4, 5]);

//Q8: Write a "mul" function which will properly when invoked as below syntax 
// Problem
// console.log(mul(2)(3)(4)); // output : 24
// console.log(mul(4)(3)(4)); // output : 48
////////////////////////////////////
// The MUL function is a miniature of the multiplication function. 
// In this function, we call the function that required an argument as a first number,
//  and that function calls another function that required another argument 
//  and this step goes on. 

const mul = (num1) =>{
  return function(num2){
    return function(num3){
      return num1 * num2 * num3;
    }
  }
}
console.log(mul(2)(3)(4)); // output : 24
console.log(mul(4)(3)(4)); // output : 48

// Q9: Write a function that would allow you to do this?
// Problem
// const addSix = createBase(6);
// addSix(10); // returns 16
// addSix(21); // returns 27

const createBase = (baseNumber) => {
  return function(N) {
    return baseNumber + N
  }
}
const addSix = createBase(6);
console.log(addSix(10)); // returns 16
console.log(addSix(21)); // returns 27

// Create a for loop that iterates up to 100 while outputting 
// "fizz" at multiples of 3, "buzz" at multiples of 5 and 
// "fizzbuzz" at multiples of 3 and 5.

// const fizzbuzz = () => {
for(let i = 1; i<=100; i++) {
  
  if((i % 15) === 0) {
    console.log('fizzbuzz')
  }
  else if ((i % 5) === 0) {
     console.log('buzz')
  }else if((i % 3) === 0){
    console.log("fizz")
  } else {
    console.log(i)
  }
  
}

// fizzbuzz()












