// 1.
// function maxOfTwoNumbers(x, y) {
//     if (x >= y) {
//       return x;
//     } else {
//       return y;
//     }
  
//     // or more "elegantly" using the fantastic ternary expression!
//     // return  x >= y ? x : y;
//   }
  
//   console.log(maxOfTwoNumbers(3, 9));

//2.
// function maxOfThree(x, y, z) {
//     if (x >= y && x >= z) {
//         return x;
//     }else if (y >= x && y >= z) {
//         return y;
//     } else {
//         if (z >= x && z >= y) {
//             return z;
//     }
// }
// }
// console.log(maxOfThree(3, 9, 6));

//3.
// function isCharAVowel(char) {
//     if(char === 'a' || char === 'e' || char === 'i' || char ==='o' || char === 'u') 
//     {
//         return true;
//     }
//     return false;}

//     console.log(isCharAVowel('y'));

//4.
// function sumArray(arr) {
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++) {
//         sum += arr[i];
//     }
//     return sum; // leave return out of the loop because if inside the previous scope it will end the loop process.
// }
// const arr = [4, 2, 3, 3];
// console.log(sumArray(arr));
//5.
// function multiplyArray(arr) {
//     let product = 1;
//     for(let i = 0; i < arr.length; i){
//         product *= arr[i];
//     }
//     return quotient;
// }
// const arr = [4, 2, 3];
// console.log(multiplyArray(arr));
//6.
// function numArgs(arg) {
//     return arguments.length;
// }
// console.log(numArgs(1, 2, 3, 4, 5));
// console.log(numArgs("hello" , "world"));
//7.
// function reverseString(str) {
//     let string ="";
//     for (let i = str.length - 1; i >= 0; i--) {
//         string += str[i];
//     }
//     return string;
// }
// console.log(reverseString("hello world"));
//8.
// function longestString(arr){
//     let longestOne = 0;
//     for (let i = 0; i < arr.length; i++) {
//         const currentString = arr[i].length;
//         if(arr[i].length> longestOne){
//             longestOne = currentString;
//         }
//     }
//     return longestOne;
// }
// console.log(longestString(["ay", "bat", "ccat", "ddeepers", "ear"]));
//9. 