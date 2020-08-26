// Codeforces Beta Round #40 (Div. 2)
// A. Translation

// param[in] s: first lowercase letters word
// param[in] t: second lowercase letters word
function translation(s, t) {
    if (t === s.split("").reverse().join("")) {
        console.log("YES");
    } else {
        console.log("NO");
    }
}

translation("code", "edoc");