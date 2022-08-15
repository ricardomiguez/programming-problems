// Codeforces Round #126 (Div. 2)
// B. Drinks

// param[in] n: integer containing the number of orange-containing drinks
// param[in] p: n integers containing the volume fraction of orange juice in the i-th drink
function drinks(n, p) {
    let totalOrangeJuiceVolume = 0;
    p.forEach(i => totalOrangeJuiceVolume += i);
    let cocktailOrangeJuiceVolume = totalOrangeJuiceVolume / n;
    console.log(cocktailOrangeJuiceVolume);
}

drinks(3, [50, 50, 100]);