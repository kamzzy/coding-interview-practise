// Q10: FizzBuzz Challenge 
// Problem
// Create a for loop that iterates up to 10 while outputting 
// "fizz" at multiples of 3, "buzz" at multiples of 5 and 
// "fizzbuzz" at multiples of 3 and 5.

for(let i=1; i <=5; i++){
  if((i % 3) === 0){
    console.log('fizz')
  } else if((i % 5) === 0) {
    console.log('buzz')
  }else if( (i % 15) === 0) {
    console.log('fizzbuzz')
  } else {
    console.log(i)
  }
}

// Q11: Given two strings, return true if they are anagrams of one another
// Problem
// For example: Mary is an anagram of Army

const anagram = (word1, word2) => {
  // change words to upper or toLowerCase
// takeout white spaces
// sort the words, join and compare them
   firstWord = word1.toLowerCase().split("").sort().join("")
   secondWord = word2.toLowerCase().split("").sort().join("")
  if(firstWord === secondWord) {
    return "this is an anagram"
  }else {return "this is not an anagram"}
}
console.log(anagram("john", "nojh"))
//??????????????????????????????????????
// A closure is a function that preserves the outer scope in its inner scope.
// example 1
// function greeting() {
//   let message = 'Hi';
//   function sayHi() {
//       console.log(message);
//   }
//   return sayHi;
// }
// let hi = greeting();
// hi()
// sayHi() is a closure
// ?????????????????????????
// Example 2
// function greeting(message) {
//   return function(name){
//        return message + ' ' + name;
//   }
// }
// let sayHi = greeting('Hi');
// let sayHello = greeting('Hello');

// console.log(sayHi('John')); // Hi John
// console.log(sayHello('John')); // Hello John
// sayHi and sayHello are closures. They share the same function body but store different scopes.
//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
// Q12: How would you use a closure to create a private counter?
// You can create a function within an outer function (a closure)
//  that allows you to update a private variable but the variable wouldn't be accessible 
//  from outside the function without the use of a helper function.

const counterFunction = () => {
  let counter = 0;
  const closureFunction = () => {
    return console.log(counter +=1)
  }
  return closureFunction
}
const caller = counterFunction()
caller()
caller()
caller()

// Q13: Provide some examples of non-boolean value coercion to a boolean one
// The question is when a non-boolean value is coerced to a boolean, 
// does it become true or false, respectively?

// The specific list of "falsy" values in JavaScript is as follows:
// $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
// "" (empty string)
// 0, -0, NaN (invalid number)
// null, undefined
// false
// Any value that's not on this "falsy" list is "truthy." Here are some examples of those:

// "hello"
// 42
// true
// [ ], [ 1, "2", 3 ] (arrays)
// { }, { a: 42 } (objects)
// function foo() { .. } (functions)


