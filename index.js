// Loop takes an initial value and end value
// Within the body is a body function (FizzBuzz) 
// and iterate (another function), acting like a for loop,
// but with the structure of a while loop. 

const loop = (init = 1, end) => {
    // Sanitise for positive integers only
    if (typeof init === 'number' && init > 0) {
        while (init <= end) {
            body(init);
            init = iterate(init);
        }
        // This is an error condition.
    } else {
        return -1;
    }
}

const body = init => {
    if (init % 15 === 0) {
        return 'FizzBuzz';
    } else if (init % 3 === 0) {
        return 'Fizz';
    } else if (init % 5 === 0) {
        return 'Buzz';
    } else {
        return init;
    }
};

const iterate = i => {
    return i++;
}

module.exports = loop;