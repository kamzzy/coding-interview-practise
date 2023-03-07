// Given a big array, 
// how to efficiently find k’th largest element in it?

const biggestElement = (arr) => {
  const sortedArray = arr.sort((a,b) => b-a);
  return sortedArray[0];
}

biggestElement([10, 21, 3, 4, 15, 36, 47, 28, 9, 20]) // 47


// Write an efficient program for printing K largest elements in an array. 
// Elements in an array can be in any order

const KLargest = (arr, k) => {
  const sortedArray = arr.sort((a,b) => b-a);
  return sortedArray.slice(0, k);
}
KLargest([10, 21, 3, 4, 15, 36, 47, 28, 9, 20], 3) // [47, 36, 28]