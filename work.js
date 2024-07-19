// 1507. Reformat Date

// var reformatDate = function(date) {
//     const monthsMapping = {
//         Jan: '01',
//         Feb: '02',
//         Mar: '03',
//         Apr: '04',
//         May: '05',
//         Jun: '06',
//         Jul: '07',
//         Aug: '08',
//         Sep: '09',
//         Oct: '10',
//         Nov: '11',
//         Dec: '12'
//     };
//     const [date, month, year] = str.split(' ');
//     const updatedDate = (function () {
//         let store = '';
//         for (let index = 0; index < date.length; index++) {
//             if (date[index] > 'a') {
//                 break;
//             }
//             store += date[index];
//         }
//         if (store.length === 1) {
//             store = `0${store}`;
//         }
//         return store;
//     })();
//     return `${year}-${monthsMapping[month]}-${updatedDate}`;
// };

date = "20th Oct 2052"
// console.log(reformatDate(date))


// 500. Keyboard Row

var findWords = function(words) {
    const rows = [/^[qwertyuiop]+$/, /^[asdfghjkl]+$/, /^[zxcvbnm]+$/];
  
    return words.filter(word => rows.some(row => row.test(word.toLowerCase())));
};

words = ["Hello","Alaska","Dad","Peace"]
// words = ["omk"]
// words = ["adsdf","sfd"]
// console.log(findWords(words))


// 520. Detect Capital

var detectCapitalUse = function(word) {
    const capitalAlpha = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

    let count = 0
    for (let i = 0; i < word.length; i++) {
        if (capitalAlpha.includes(word[i])) {
            count++
        }
    }
    if (count === word.length) {
        return true
    } else {
        return false
    }
};

// word = "USA"
word = "FlaG"
console.log(detectCapitalUse(word))