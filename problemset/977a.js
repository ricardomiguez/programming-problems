// Code Forces Round #479 (Div. 3)
// A. Wrong Subtraction

// param[in] n: integer to be subtracted
// param[in] k: number of subtrations performed
function wrongSubtraction(n, k) {
    for (i = 0; i < k; i++) {
        if (n % 10 !== 0) {
            n--;
        } else {
            n /= 10;
        }
    }
    console.log(n);
}

wrongSubtraction(1000000000, 9);