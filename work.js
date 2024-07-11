// 1507. Reformat Date

var reformatDate = function(date) {
    const monthsMapping = {
        Jan: '01',
        Feb: '02',
        Mar: '03',
        Apr: '04',
        May: '05',
        Jun: '06',
        Jul: '07',
        Aug: '08',
        Sep: '09',
        Oct: '10',
        Nov: '11',
        Dec: '12'
    };
    const [date, month, year] = str.split(' ');
    const updatedDate = (function () {
        let store = '';
        for (let index = 0; index < date.length; index++) {
            if (date[index] > 'a') {
                break;
            }
            store += date[index];
        }
        if (store.length === 1) {
            store = `0${store}`;
        }
        return store;
    })();
    return `${year}-${monthsMapping[month]}-${updatedDate}`;
};

date = "20th Oct 2052"
// console.log(reformatDate(date))


// 500. Keyboard Row

var findWords = function(words) {
    const first = "qwertyuiop"
    const second = "asdfghjkl"
    const third = "zxcvbnm"

    for (let i = 0; i < words.length; i++) {
        for (let j = words[i]; j < words.length; j++) {
            
        }
    }
};

words = ["Hello","Alaska","Dad","Peace"]
// words = ["omk"]
// words = ["adsdf","sfd"]
console.log(findWords(words))