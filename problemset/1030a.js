// Technocup 2019 - Elimination Round 1
// A. In Search of an Easy Problem

// param[in] n: array to be evaluated
function inSearchOfAnEasyProblem(n) {
    let nMax = Math.max.apply(null, n);
    (nMax > 0)
    ? console.log("Hard")
    : console.log("Easy");
}

inSearchOfAnEasyProblem([0, 0, 1]);