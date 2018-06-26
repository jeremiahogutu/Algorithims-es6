// --- Directions
// Implement the 'weave' function. Weave
// receives two queues as arguments and combines the
// contents of each into a new, third queue.
// The third queue should contain the *alternating* content
// of the two queues, The function should handle
// queues of different lengths without inserting
// 'undefined' into the new one.
// *Do not* access the array inside of any queue, only
// the 'add', 'remove', and 'peek' functions.
// --- Example queue
//     const queueOne = new Queue();
//     queueOne.add(1);
//     queueOne.add(2);

const Queue = require('./queue')

const weave = (dataOne, dataTwo) => {
    const q = new Queue();

    while (dataOne.peek() || dataTwo.peek){
        if (dataOne.peek()) {
            q.add(dataOne.remove())
        }

        if (dataTwo.peek()) {
            q.add(dataTwo.remove())
        }
    }

    return q
}