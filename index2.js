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