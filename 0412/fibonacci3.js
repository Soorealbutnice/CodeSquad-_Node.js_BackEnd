// 함수의 인자로 값을 전달하는 방법으로 만든 피보나치 수열

let memoiztion = {};

let fibonacci = function(x) {

    if (x == 1 || x == 2) {
        return 1;
    } 
    
    return fibonacci(x - 1) + fibonacci(x - 2);

    // return (x === 1 || x ===2) ? 1 : fibonacci(x - 1) + fibonacci(x - 2);  if문 없이 한 줄 처리
}

console.log(fibonacci(10));