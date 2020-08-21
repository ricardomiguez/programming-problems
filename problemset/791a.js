// Codeforces Round #405 (rated, Div. 2, based on VK Cup 2017 Round 1)
// A. Bear and Big Brother

// param[in] a: integer number containing Limak's weight at year 0
// param[in] b: integer number containing Bob's weight at year 0
function bearAndBigBrother(a, b) {
    let numOfYears = 0;
    while (a <= b) {
        a *= 3,
        b *= 2,
        numOfYears++;
    }
    console.log(numOfYears);
}

bearAndBigBrother(4, 9);