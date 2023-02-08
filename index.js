// Given a string, reverse each word in the sentence
const string = "Welcome to this Javascript Guide!";
const reverseBySeparator = (string, seperator) => {
  return string.split(seperator).reverse().join(seperator);
}

const reverseEntireSentence = reverseBySeparator(string, "");
const reverseEachWord = reverseBySeparator(reverseEntireSentence, " ");

console.log(reverseEachWord)

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// Q3: How to check if an object is an array or not? Provide some code.
const arrayList = [1,2,4];
if(Object.prototype.toString.call(arrayList) === '[object Array]') {
  console.log('Array')
}
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// Q4: How to empty an array in JavaScript?
const arrayLis =  ['a', 'b', 'c', 'd', 'e', 'f'];
// method 1
arrayLis = []; 
// Above code will set the variable arrayLis to a new empty array. 
// This is recommended if you don't have references to the original array anywhere else 
// because It will actually create a new empty array. 
// You should be careful with this way of empty the array, because 
// if you have referenced this array from another variable, 
// then the original reference array will remain unchanged

var arrayLi = ['a', 'b', 'c', 'd', 'e', 'f']; // Created array
var anotherArrayList = arrayLi;  // Referenced arrayLi by another variable
arrayLi = []; // Empty the array
console.log(anotherArrayList); // Output ['a', 'b', 'c', 'd', 'e', 'f']

// method 2
arrayLis.length = 0;
// Above code will clear the existing array by setting its length to 0. 
// This way of emptying the array also updates all the referenced variables which point to the original array. 
// This way of emptying the array is useful when you want to update all the referenced variables which point to the array.

var arrayL = ['a', 'b', 'c', 'd', 'e', 'f']; // Created array
var anotherArrayList = arrayL;  // Referenced arrayList by another variable
arrayL.length = 0; // Empty the array by setting length to 0
console.log(anotherArrayList); // Output []

// Method 3
arrayList.splice(0, arrayList.length);
// Above implementation will also work perfectly. 
// This way of emptying the array will also update all the references of the original array.

var arrayLit = ['a', 'b', 'c', 'd', 'e', 'f']; // Created array
var anotherArrayList = arrayLit;  // Referenced arrayLit by another variable
arrayLit.splice(0, arrayList.length); // Empty the array by setting length to 0
console.log(anotherArrayList); // Output []

// Method 4

while(arrayList.length) {
  arrayList.pop();
}

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// Q5: How would you check if a number is an integer?

// A very simply way to check if a number is a decimal or integer is to 
// see if there is a remainder left when you divide by 1.

function isInt(num) {
  return num % 1 === 0;
}

console.log(isInt(4)); // true
console.log(isInt(12.2)); // false
console.log(isInt(0.3)); // false