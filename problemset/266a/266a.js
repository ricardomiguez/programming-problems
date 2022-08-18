// Codeforces Round #163 (Div. 2)
// A. Stones on the Table

// param[in] n: integer number containing the number of stones on the table
// param[in] s: string containing letters which represents the colors of the stones
function stonesOnTheTable(n, s) {
    let numOfStonesToTake = 0;
    for (let i = 0; i < n; i++) {
        if (s.split("")[i] === s.split("")[i + 1]) {
            numOfStonesToTake++;
        }
    }
    console.log(numOfStonesToTake);
}

stonesOnTheTable(3, "RRG");