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
    if(word.toLowerCase() == word || word.toUpperCase() == word) 
        return true;
    else if((word[0] + word.slice(1).toLowerCase()) == word) 
        return true 
    else 
        return false
};

// word = "USA"
word = "FlaG"
// console.log(detectCapitalUse(word))




//521. Longest Uncommon Subsequence I

var findLUSlength = function(a, b) {
    return a === b ? -1 : Math.max(a.length, b.length);
    
};

a = "aba", b = "cdc"
// a = "aaa", b = "bbb"
// a = "aaa", b = "aaa"
// console.log(findLUSlength(a, b))



//522. Longest Uncommon Subsequence II
function isSubsequence(x, y) {
    let j = 0;
    for (let i = 0; i < y.length && j < x.length; i++) {
      if (x[j] === y[i]) {
        j++;
      }
    }
    return j === x.length;
  }
  
  // Function to find the length of the longest uncommon subsequence
  function findLUSlength(strs) {
    let maxLength = -1;
    for (let i = 0; i < strs.length; i++) {
      let isUncommon = true;
      for (let j = 0; j < strs.length; j++) {
        if (i !== j && isSubsequence(strs[i], strs[j])) {
          isUncommon = false;
          break;
        }
      }
      if (isUncommon) {
        maxLength = Math.max(maxLength, strs[i].length);
      }
    }
    return maxLength;
  }

strs = ["aba","cdc","eae"]
// strs = ["aaa","aaa","aa"]
// console.log(findLUSlength(strs))

//523. Continuous Subarray Sum

var checkSubarraySum = function(nums, k) {
    let hash  = new Map();
    let i = 0;
    let sum = 0;
    hash.set(0, 0)
    while(i < nums.length) {
        sum += nums[i] % k;
        if(!hash.has(sum % k)) hash.set(sum % k, i+1);
        else {
            if (i - hash.get(sum % k)  + 1>= 2) return true;
        }
        i++;
    }
    return false;    
};

nums = [23,2,4,6,7], k = 6
// nums = [23,2,6,4,7], k = 6
console.log(checkSubarraySum(nums, k))