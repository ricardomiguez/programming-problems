// Codeforces Round #200 (Div. 2)
// A. Magnets

// param[in] n: integer number containing the number of magnets
// param[in] p: array containing the strings related to the magnets position
function magnets(n, p) {
    let groupsOfMagnets = 1;
    for (let i = 0; i < n - 1; i++) {
        if (p[i + 1] != p[i]) groupsOfMagnets++;
    }
    console.log(groupsOfMagnets);
}

magnets(6, ["10", "10", "10", "01", "10", "10"]);