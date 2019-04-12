let list = [0,1,2,3,4,5,6,7,8,9];
let target = 3;

let x = list.length - 1;
let count = 0;
let result = "1";

function binarySearch(x) {

    if ( target === list.indexOf(x)) {
        result = "값 :" + list.indexOf(x) + ", 계산횟수 : " + count;
        return result;
    }

    x = ( target < list.indexOf(x)) ? Math.round(x / 2) : + Math.round(x / 2);

    count += 1;

    return binarySearch(x);
}

console.log(binarySearch(x));