// Codeforces Round #166 (Div. 2)
// A. Beautiful Year

// param[in] y: integer containing the year number
function beautifulYear(y) {
    for (let currentYearNumber = y + 1; 1000 <= currentYearNumber <= 9000; currentYearNumber++) {
        let currentYearNumberArray = currentYearNumber.toString().split("");
        let hasOnlyDistinctDigits = (new Set(currentYearNumberArray)).size === currentYearNumberArray.length;
        if (hasOnlyDistinctDigits) {
            console.log(currentYearNumber);
            break;
        }
    }
}

beautifulYear(1987);