// Codeforces Beta Round #55 (Div. 2)
// A. Word

// param[in] s: string containing uppercase and lowercase letters
function word(s) {
    let length = s.length;
    let numOfUppercase = s.match(/[A-Z]/g).length;
    if (length / 2 < numOfUppercase) {
        console.log(s.toUpperCase());
    }
    else {
        console.log(s.toLowerCase());
    }
}

word('HoUse');