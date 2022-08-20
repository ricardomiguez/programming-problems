// Codeforces Round #143 (Div. 2)
// A. Team

// param[in] n: integer number containing the number of problems in the contest
// param[in] p: n group of integers related to each team member opinion about the problem solution
function team(n, p) {
    let numOfProblemsImplemented = 0;
    for (let i = 0; i < n; i++) {
        let sumOfProblemSolutionOpinion = p[i].reduce((previousValue, currentValue) => previousValue + currentValue);
        if (sumOfProblemSolutionOpinion >= 2) numOfProblemsImplemented++;
    }
    console.log(numOfProblemsImplemented);
}

team(3, [[1, 1, 0], [1, 1, 1], [1, 0, 0]]);