// 배열을 이용한 피보나치 수열 

let result = [1, 1];
let temp = 0;

let fibonacci = function(count) {
    console.log(result[0]);

    if (count == 1) {
        return;
    }

    temp = result[0] + result[1];

    result[0] = result[1];
    result[1] = temp;

    count--;
    
    fibonacci(count);
}

fibonacci(10);