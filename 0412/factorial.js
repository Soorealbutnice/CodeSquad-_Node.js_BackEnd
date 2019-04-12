let result = 1;

let factorial = function(x) {
    
    result *= x;

    if (x == 1) {
        return result;
    }

    return factorial(x-1);
};

console.log(factorial(5));