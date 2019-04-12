// 메모이제이션 피보나치 수열

let memoization = {1 : 1, 2 : 1}; 

let fibonacci = function(x) {
    if (memoization.hasOwnProperty(x)){
        return memoization[x];
    } else {
        memoization[x] = fibonacci(x - 1) + fibonacci(x - 2);
        return memoization[x];
    }

}

console.log(fibonacci(5));