// 함수의 인자로 값을 전달하는 방법으로 만든 피보나치 수열

let fibonacci = function(x, y, count) {

    console.log(x);

    if (count == 0) {
        return;
    }

    count--;
    
    fibonacci(y, x + y, count);
}

fibonacci(1, 1, 10);