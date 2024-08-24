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
// console.log(checkSubarraySum(nums, k))


// 524. Longest Word in Dictionary through Deleting

var findLongestWord = function(s, dictionary) {
    
};
s = "abpcplea", dictionary = ["ale","apple","monkey","plea"]
// s = "abpcplea", dictionary = ["a","b","c"]
// console.log(findLongestWord(s, dictionary))





const problem = function(arr) {

    let count = 0

    for (let i = 0; i < arr.length; i++) {
        for (let j = i+ 1; j < arr.length; j++) {
            if (arr[i].startsWith(arr[j])) {
                count++
            } else if (arr[j].startsWith(arr[i])) {
                count++
            }
        }
    }

    return count
}


// 121. Best time to buy and sell stocks

var maxProfit = function(prices) {
    
    let highestProfit = 0
    let currentProfit = 0

    for (let i = 0; i < prices.length; i++) {

    }
};

prices = [7,1,5,3,6,4]
// prices = [7,6,4,3,1]
// console.log(maxProfit(prices))


// 238. Product of Array Except Self

var productExceptSelf = function(nums) {
    
    let newArr = []
    for (let i = 0; i < nums.length; i++) {{
        for (let j = i + 1; j < nums.length; j++) {
            if ()
        }
    }}
};

nums = [1, 2, 3, 4]
// nums = [-1,1,0,-3,3]
// console.log(productExceptSelf(nums))



// 21. Merge Two Sorted Lists

var mergeTwoLists = function(l1, l2) {
    if (!l1) return l2;
    else if (!l2) return l1;
    else if (l1.val <= l2.val) {
        l1.next = mergeTwoLists(l1.next, l2);
        return l1;
    } else {
        l2.next = mergeTwoLists(l1, l2.next);
        return l2
    }
};

list1 = [], list2 = []
// list1 = [], list2 = [0]
// console.log(mergeTwoLists(list1, list2))


// 22. Generate paranthesis

var generateParenthesis = function(n) {
    const res = [];

    function dfs(openP, closeP, s) {
        if (openP === closeP && openP + closeP === n * 2) {
            res.push(s);
            return;
        }

        if (openP < n) {
            dfs(openP + 1, closeP, s + "(");
        }

        if (closeP < openP) {
            dfs(openP, closeP + 1, s + ")");
        }
    }

    dfs(0, 0, "");

    return res;     
};

n = 3
m = 1
// console.log(generateParenthesis(n))


//23. merge k sorted lists

var mergeKLists = function(lists) {
    const queue = new MinPriorityQueue({ priority: x => x.val })

    for (const head of lists) {
      if (head) {
        queue.enqueue(head)
      }
    }
  
    let result = new ListNode()
    const head = result
  
    while (!queue.isEmpty()) {
      const { val, next } = queue.dequeue().element
  
      result.next = new ListNode(val)
      result = result.next
  
      if (next) {
        queue.enqueue(next)
      }
    }
  
    return head.next
};

lists = [[1,4,5],[1,3,4],[2,6]]
// lists = []
// lists = [[]]
// console.log(mergeKLists(lists))

// 24. Swap Nodes in pairs

var swapPairs = function(head) {
    if(!head || !head.next) return head

    let dummy = new ListNode(0)
    let tail = dummy
    let curr = head
    
    while(curr && curr.next){
        let temp = curr.next.next

        tail.next = curr.next
        curr.next.next = curr
        curr.next = temp

        tail = curr
        curr = temp
    }
    return dummy.next
};

head = [1,2,3,4]
// head = []
// head = [1]
// console.log(swapPairs(head))


//25. Reverse Nodes in k-Group

var reverseKGroup = function(head, k) {
    var dummy = new ListNode(0);
        dummy.next = head;
        var prevGroupTail = dummy;

        while (head) {
            var groupStart = head;
            var groupEnd = getGroupEnd(head, k);

            if (!groupEnd)
                break;

            prevGroupTail.next = reverseList(groupStart, groupEnd.next);
            prevGroupTail = groupStart;
            head = prevGroupTail.next;
        }
    var newHead = dummy.next;
    return newHead;
};

var getGroupEnd = function(head, k) {
    while (head && k > 1) {
        head = head.next;
        k--;
    }
    return head;
}

var reverseList = function(head, stop) {
    var prev = stop;
    while (head !== stop) {
        var next = head.next;
        head.next = prev;
        prev = head;
        head = next;
    }
    return prev;
}

head = [1,2,3,4,5], k = 2
// head = [1,2,3,4,5], k = 3
// console.log(reverseKGroup(head, k))



// 26. Remove Duplicates from Sorted Array

var removeDuplicates = function(nums) {
    let i = 1;

    for (let j = 1; j < nums.length; j++) {
        if (nums[j] !== nums[i - 1]) {
            nums[i] = nums[j];
            i++;
        }
    }

    return i;      
};

nums = [1,1,2]
// nums = [0,0,1,1,1,2,2,3,3,4]
// console.log(removeDuplicates(nums))


// 28. Find the Index of the First Occurrence in a String

var strStr = function(haystack, needle) {
    return haystack.indexOf(needle);    
};

haystack = "sadbutsad", needle = "sad"
// haystack = "leetcode", needle = "leeto"
console.log(strStr(haystack, needle))