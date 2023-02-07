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