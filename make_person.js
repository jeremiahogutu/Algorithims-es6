let Person = function(firstAndLast) {
    // Complete the method below and implement the others similarly
    let first = firstAndLast.split(' ')[0];
    let last = firstAndLast.split(' ')[1];

    this.getFirstName = () => {
        return first;
    };

    this.getLastName = () => {
        return last;
    };

    this.getFullName = () => {
        return first + ' ' + last;
    };

    this.setFirstName = (str) => {
        first = str;
    };

    this.setLastName = (str) => {
        last = str;
    };

    this.setFullName = (str) => {
        first = str.split(' ')[0];
        last = str.split(' ')[1];
    };
};

var bob = new Person('Bob Ross');
console.log(bob.getFullName());

