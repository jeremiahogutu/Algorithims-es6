// For stacks the theme is filo (first in and last out)
// key methods
// push() add a record to the stack,
// pop() to remove the 'top' record in the stack
// peek() to return the 'top' record without popping it
// create these methods for the stack data structure

class stack {
    constructor() {
        this.data = []
    }

    push(record) {
        this.data.push(record)
    }

    pop(record) {
        return this.data.pop()
    }

    peek(record) {
        return this.data[this.data.length - 1]
    }
}