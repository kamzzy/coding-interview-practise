// Given a big array, 
// how to efficiently find k’th largest element in it?

const biggestElement = (arr) => {
  const sortedArray = arr.sort((a,b) => b-a);
  return sortedArray[0];
}

biggestElement([10, 21, 3, 4, 15, 36, 47, 28, 9, 20]) // 47