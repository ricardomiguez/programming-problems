// Codeforces Beta Round #65 (Div. 2)
// A. Way Too Long Words

// param[in] n: integer number containing the number of words to be evaluated
// param[in] s: array containing the words to be evaluated
function wayTooLongWords(n, s) {
    for (i = 0; i < n; i++) {
        if (s[i].split("").length > 10) {
            let tooLongWord = s[i].split(""),
                firstLetter = tooLongWord[0],
                lettersInBetween = tooLongWord.length - 2,
                lastLetter = tooLongWord.reverse()[0],
                abbreviation = `${firstLetter}` + `${lettersInBetween}` + `${lastLetter}`;
            console.log(`${abbreviation}`);
        } else {
            console.log(`${s[i]}`);
        }
    }
}

wayTooLongWords(4, ["word", "localization", "internationalization", "pneumonoultramicroscopicsilicovolcanoconiosis"]);