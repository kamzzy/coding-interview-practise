// Given a string, reverse each word in the sentence
const string = "Welcome to this Javascript Guide!";
const reverseBySeparator = (string, seperator) => {
  return string.split(seperator).reverse().join(seperator);
}

const reverseEntireSentence = reverseBySeparator(string, "");
const reverseEachWord = reverseBySeparator(reverseEntireSentence, " ");

console.log(reverseEachWord)
