// Codeforces Round #366 (Div. 2)
// A. Hulk

// param[in] n: integer number containing Hulk's number of layers of love and hate
function hulk(n) {
    let feeling = "I hate ";
    for (i = 2; i <= n; i++) {
        (i % 2 === 0)
        ? feeling += "that I love "
        : feeling += "that I hate ";
    }
    feeling += "it";
    console.log(feeling);
}

hulk(3);