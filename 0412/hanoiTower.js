let temp; 

let hanoi = function(n, s, g) {
    temp = 6 - s- g; 

    if (n == 0) {
        return
    }

    hanoi(n-1, s, temp);
    console.log(n, s, g);
    hanoi(n-1, temp, g);
} 