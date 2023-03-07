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

// When does the worst case of QuickSort occur?
// ################
// Answer:
// The worst case occurs when the partition process always 
// picks greatest or smallest element as pivot.
// ##########################
// Remove Nth Node From End of List
// Given the head of a linked list, 
// remove the nth node from the end of the list and return its head.

const removeNthFromEnd = (head, n) => {
  const listLength = head.length;
  const position = listLength - n;
  head.splice(position, 1);
  return head;
 }

removeNthFromEnd([1,2,3,4,5], 2) // [1,2,3,5]

