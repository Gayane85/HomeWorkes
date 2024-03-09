/*1))))))Given a number. Write a recursive function that reverse the number. Return the new
number.*/
function reversedNum(num, reversed = 0) {
  if (num === 0) {
    return reversed;
  }
  return reversedNum(Math.floor(num / 10), reversed * 10 + (num % 10));
}
//console.log(reversedNum(235))

/* 2. Given a number and an array. Find the second occurrence of the number in the array.
    Consider that the occurrence of each element in the array is at least two. (recursive) */
function findSecondIndex(arr, target, index = 0, count = 0) {
  if (index === arr.length) {
    return undefined;
  }
  if (arr[index] === target) {
    count++;

    if (count === 2) {
      return index;
    }
  }
  return findSecondIndex(arr, target, index + 1, count);
}

const arr = [0, -1, 0, 5, 6, 6, 5, -1, 0, 5, 6];
const target = 5;
console.log(findSecondIndex(arr, target, (index = 0), (count = 0)));

/* 3. Given a substring and a string. Find how many times the substring occurred in the string.
    (For getting substring of the string use str.substring(startIndex, endIndex),
    str.substr(startIndex, length) ) (recursive) */
function getCount(str1, str2) {
  if (str1.length == 0 || str1.length < str2.length) return 0;

  if (str1.substr(0, str2.length) == str2) {
    return getCount(str1.substr(1), str2) + 1;
  }

  return getCount(str1.substr(1), str2);
}
let str1 = "Are var far shared?";
let str2 = "ar";
console.log(getCount(str1, str2));

/* 4. Given a string, compute recursively (no loops) a new string where all appearances of &quot;pi&quot;
    have been replaced by &quot;3.14&quot; */

function changePi(str) {
  if (str.length <= 1) {
    return str;
  }

  if (str[0].toLowerCase() === "p" && str[1] === "i" && str.length >= 2) {
    return "3.14" + changePi(str.substring(2, str.length));
  }
  return str[0] + changePi(str.substring(1, str.length));
}
let str = "Picsart pipelines";
console.log(changePi(str));

/* 5. Given an array of nested arrays. Write a recursive function that flattens it. (Hint create
    function that concats arrays). */
function newArr(arr) {
  let finalArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      finalArr.push(...newArr(arr[i]));
      //կամ էլ concat() մեթոդով  finalArr=finalArr.concat(newArr(arr[i]))
    } else {
      finalArr.push(arr[i]);
    }
  }
  return finalArr;
}
let arr = [1, 2, [3, 4, [5, 6, [7]]]];
console.log(newArr(arr));

/* 6. Given a number. Write a function that calculates its sum of the digits and if that sum has
    more than 1 digit find the sum of digits of that number. Repeat that process if needed
    and return the result. (recursive) */

function sumOfDigits(num) {
  let sum = 0;
  while (num) {
    sum += num % 10;
    num = Math.floor(num / 10);
  }
  return sum > 9 ? sumOfDigits(sum) : sum;
}

console.log(sumOfDigits(79));
